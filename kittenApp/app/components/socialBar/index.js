import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  RkText,
  RkButton
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';

export class SocialBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes || 18,
      comments: this.props.comments || 26,
      reposts: this.props.reposts || 5,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <RkButton rkType='clear'>
            <RkText rkType='awesome primary' style={styles.icon}>{FontAwesome.heart}</RkText>
            <RkText rkType='primary secondary4' style={styles.label}>{this.state.likes}</RkText>
          </RkButton>
        </View>
        <View style={styles.section}>
          <RkButton rkType='clear'>
            <RkText rkType='awesome alterColor' style={styles.icon}>{FontAwesome.comment}</RkText>
            <RkText rkType='secondary4 alterColor' style={styles.label}>{this.state.comments}</RkText>
          </RkButton>
        </View>
        <View style={styles.section}>
          <RkButton rkType='clear'>
            <RkText rkType='awesome alterColor' style={styles.icon}>{FontAwesome.user}</RkText>
            <RkText rkType='secondary4 alterColor' style={styles.label}>{this.state.reposts}</RkText>
          </RkButton>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  section: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    marginRight: 8,
    fontSize: 20
  },
  label: {
    alignSelf: 'flex-end'
  }
});