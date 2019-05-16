import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  title: string;
  description: string;
  onGotItPress: () => void;
}

export type PopoverContentProps = ThemedComponentProps & ViewProps & ComponentProps;

class PopoverContentComponent extends React.Component<PopoverContentProps> {

  private onGotItPress = () => {
    this.props.onGotItPress();
  };

  public render(): React.ReactNode {
    const { style, themedStyle, title, description, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Text
          style={themedStyle.popoverContentTitle}
          category='h6'>
          {title}
        </Text>
        <Text
          style={themedStyle.popoverContentDescription}
          category='s1'>
          {description}
        </Text>
        <Button
          style={themedStyle.button}
          status='success'
          onPress={this.onGotItPress}>
          GOT IT
        </Button>
      </View>
    );
  }
}

export const PopoverContent = withStyles(PopoverContentComponent, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  title: {
    marginVertical: 4,
    ...textStyle.headline,
  },
  description: {
    marginVertical: 4,
    ...textStyle.subtitle,
  },
  button: {
    marginVertical: 8,
  },
}));
