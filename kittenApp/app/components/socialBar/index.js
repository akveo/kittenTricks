import React from 'react';
import {
  View
} from 'react-native';
import {
  RkText,
  RkButton,
  RkComponent
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';

export class SocialBar extends RkComponent {
  componentName = 'SocialBar';
  typeMapping = {
    container: {},
    section: {},
    icon: {},
    label: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes || 18,
      comments: this.props.comments || 26,
      shares: this.props.shares || 5,
    }
  }

  render() {
    let {container, section, icon, label} = this.defineStyles();

    let likes = this.state.likes + (this.props.showLabel ? ' Likes' : '');
    let comments = this.state.comments + (this.props.showLabel ? ' Comments' : '');
    let shares = this.state.shares + (this.props.showLabel ? ' Shares' : '');


    return (
      <View style={container}>
        <View style={section}>
          <RkButton rkType='clear'>
            <RkText rkType='awesome primary' style={icon}>{FontAwesome.heart}</RkText>
            <RkText rkType='primary secondary4' style={label}>{likes}</RkText>
          </RkButton>
        </View>
        <View style={section}>
          <RkButton rkType='clear'>
            <RkText rkType='awesome alterColor' style={icon}>{FontAwesome.comment}</RkText>
            <RkText rkType='secondary4 alterColor' style={label}>{comments}</RkText>
          </RkButton>
        </View>
        <View style={section}>
          <RkButton rkType='clear'>
            <RkText rkType='awesome alterColor' style={icon}>{FontAwesome.user}</RkText>
            <RkText rkType='secondary4 alterColor' style={label}>{shares}</RkText>
          </RkButton>
        </View>
      </View>
    )
  }
}