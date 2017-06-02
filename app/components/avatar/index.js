import React from 'react';
import {
  Image,
  View
} from 'react-native';
import {
  RkComponent,
  RkText,
  RkTheme
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';

export class Avatar extends RkComponent {
  componentName = 'Avatar';
  typeMapping = {
    container: {},
    image: {},
    badge: {},
    badgeText: {}
  };

  constructor(props) {
    super(props);
  }

  renderImg(styles) {
    let {image, badge, badgeText} = styles;
    return (
      <View>
        <Image style={image} source={this.props.img}/>
        { this.props.badge && this.renderBadge(badge, badgeText)}
      </View>
    )
  }

  renderBadge(style, textStyle) {
    let symbol;
    let backgroundColor;

    switch (this.props.badge) {
      case 'like':
        symbol = FontAwesome.heart;
        backgroundColor = RkTheme.current.colors.back.primary;
        break;
      case 'follow':
        symbol = FontAwesome.plus;
        backgroundColor = RkTheme.current.colors.back.success;
        break;
    }

    return (
      <View style={[style, {backgroundColor}]}>
        <RkText rkType='awesome' style={textStyle}>
          {symbol}
        </RkText>
      </View>
    )
  };

  render() {
    let {container, ...other} = this.defineStyles();
    return (
      <View style={[container, this.props.style]}>
        {this.renderImg(other)}
      </View>
    )
  }
}
