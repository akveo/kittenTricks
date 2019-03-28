import React from 'react';
import {
  TextProps,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import { Text } from '@src/components/common';
import {
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
} from '@src/assets/icons';

interface ComponentProps {
  hint?: string;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

class SocialAuthComponent extends React.Component<Props> {

  private renderCaptionElement = (style: StyleType): React.ReactElement<TextProps> => {
    const { hint } = this.props;

    return (
      <Text style={style}>
        {hint}
      </Text>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, hint, ...restProps } = this.props;
    const { buttonContainer, button, ...componentStyle } = themedStyle;

    return (
      <View {...restProps}>
        {hint ? this.renderCaptionElement(componentStyle.caption) : null}
        <View style={buttonContainer}>
          <Button
            style={button}
            size='giant'
            activeOpacity={0.5}
            icon={GoogleIcon}
          />
          <Button
            style={button}
            size='giant'
            activeOpacity={0.5}
            icon={FacebookIcon}
          />
          <Button
            style={button}
            size='giant'
            activeOpacity={0.5}
            icon={TwitterIcon}
          />
        </View>
      </View>
    );
  }
}

export const SocialAuth = withStyles(SocialAuthComponent, (theme: ThemeType) => ({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'transparent',
  },
  caption: {
    marginBottom: 24,
    alignSelf: 'center',
  },
}));

