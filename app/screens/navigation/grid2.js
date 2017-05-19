import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import {RkText, RkButton} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/routes';
import {KittenTheme} from '../../config/theme';

export class GridV2 extends React.Component {
  static navigationOptions = {
    title: 'Grid Menu'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {dimensions: undefined}
  };

  _onLayout = event => {
    if (this.state.height)
      return;
    let dimensions = event.nativeEvent.layout;
    this.setState({dimensions})
  };

  _getEmptyCount(size) {
    let rowCount = Math.ceil((this.state.dimensions.height - 20) / size);
    return rowCount * 3 - MainRoutes.length;
  };

  render() {
    let navigate = this.props.navigation.navigate;
    let items = <View/>;

    if (this.state.dimensions) {
      let size = this.state.dimensions.width / 3;
      let emptyCount = this._getEmptyCount(size);

      items = MainRoutes.map(function (route, index) {
        return (
          <RkButton rkType='tile'
                    style={{height: size, width: size}}
                    key={index}
                    onPress={() => {
                      navigate(route.id)
                    }}>
            <RkText style={styles.icon} rkType='primary moon xlarge'>
              {route.icon}
            </RkText>
            <RkText rkType='small'>{route.title}</RkText>
          </RkButton>
        )
      });

      for (let i = 0; i < emptyCount; i++) {
        items.push(<View key={'empty' + i} style={[{height: size, width: size}, styles.empty]}/>)
      }
    }

    return (
      <ScrollView
        onLayout={this._onLayout}
        contentContainerStyle={styles.rootContainer}>
        {items}
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  empty: {
    borderWidth: 0.5,
    borderColor: KittenTheme.colors.border.underline
  },
  icon: {
    marginBottom: 16
  }
});