import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  RkButton,
  RkText,
  RkComponent
} from 'react-native-ui-kitten';

export class GradientButton extends RkComponent {
  componentName = 'GradientButton';
  typeMapping = {
    button: {},
    gradient: {},
    text: {}
  };

  render() {

    let {button, gradient, text: textStyle} = this.defineStyles();
    let colors = this.extractNonStyleValue(gradient, 'colors');
    let {style, ...otherProps} = this.props;

    colors = this.props.colors ? this.props.colors : colors;

    return (
      <RkButton rkType='stretch' style={[button, style]}>
        <LinearGradient colors={colors}
                        start={{x: 0.0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={[gradient]}
                        {...otherProps}>
          <RkText style={textStyle}>
            {this.props.text}
          </RkText>
        </LinearGradient>
      </RkButton>
    )
  }
}