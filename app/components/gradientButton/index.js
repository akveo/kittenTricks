import React from 'react';
import { LinearGradient } from 'expo';
import {
  RkButton,
  RkText,
  RkComponent,
} from 'react-native-ui-kitten';

export class GradientButton extends RkComponent {
  componentName = 'GradientButton';
  typeMapping = {
    button: {},
    gradient: {},
    text: {},
  };

  renderContent = (textStyle) => {
    const hasText = this.props.text === undefined;
    return hasText ? this.props.children : this.renderText(textStyle);
  };

  renderText = (textStyle) => (
    <RkText style={textStyle}>{this.props.text}</RkText>
  );

  render() {
    const { button, gradient, text: textStyle } = this.defineStyles();
    const { style, rkType, ...restProps } = this.props;
    const colors = this.props.colors || this.extractNonStyleValue(gradient, 'colors');
    return (
      <RkButton
        rkType='stretch'
        style={[button, style]}
        {...restProps}>
        <LinearGradient
          colors={colors}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[gradient]}>
          {this.renderContent(textStyle)}
        </LinearGradient>
      </RkButton>
    );
  }
}
