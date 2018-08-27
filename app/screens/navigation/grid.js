import React from 'react';
import {
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  RkButton, RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';

const paddingValue = 8;

export class GridV1 extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Grid Menu'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    const screenWidth = Dimensions.get('window').width;
    this.itemSize = {
      width: (screenWidth - (paddingValue * 6)) / 2,
      height: (screenWidth - (paddingValue * 6)) / 2,
    };
  }

  onItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
  };

  renderItems = () => MainRoutes.map(route => (
    <RkButton
      rkType='square shadow'
      style={{ ...this.itemSize }}
      key={route.id}
      onPress={() => this.onItemPressed(route)}>
      <RkText style={styles.icon} rkType='primary moon menuIcon'>
        {route.icon}
      </RkText>
      <RkText>{route.title}</RkText>
    </RkButton>
  ));

  render = () => (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.rootContainer}>
      {this.renderItems()}
    </ScrollView>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.scroll,
    padding: paddingValue,
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    marginBottom: 16,
  },
}));
