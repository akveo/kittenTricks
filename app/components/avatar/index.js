import React from 'react';
import {
  Image,
  View,
} from 'react-native';
import {
  RkComponent,
  RkText,
  RkTheme,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';

export class Avatar extends RkComponent {
  componentName = 'Avatar';
  typeMapping = {
    container: {},
    image: {},
    badge: {},
    badgeText: {},
  };

  getBadgeStyle = (badgeProps) => {
    switch (badgeProps) {
      case 'like':
        return {
          symbol: FontAwesome.heart,
          backgroundColor: RkTheme.current.colors.badge.likeBackground,
          color: RkTheme.current.colors.badge.likeForeground,
        };
      case 'follow':
        return {
          symbol: FontAwesome.plus,
          backgroundColor: RkTheme.current.colors.badge.plusBackground,
          color: RkTheme.current.colors.badge.plusForeground,
        };
      default: return {};
    }
  };

  renderImg = (styles) => (
    <View>
      <Image style={styles.image} source={this.props.img} />
      { this.props.badge && this.renderBadge(styles.badge)}
    </View>
  );

  renderBadge = (style, textStyle) => {
    const badgeStyle = this.getBadgeStyle(this.props.badge);
    return (
      <View style={[style, { backgroundColor: badgeStyle.backgroundColor }]}>
        <RkText rkType='awesome' style={[textStyle, { color: badgeStyle.color }]}>
          {badgeStyle.symbol}
        </RkText>
      </View>
    );
  };

  render() {
    const { container, ...other } = this.defineStyles();
    return (
      <View style={[container, this.props.style]}>
        {this.renderImg(other)}
      </View>
    );
  }
}
