import React from 'react';
import {
  ImageProps,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  icon?: (style: StyleType) => React.ReactElement<ImageProps>;
  children: string;
}

export type ArticleTipsProps = ThemedComponentProps & ViewProps & ComponentProps;

class ArticleTipsComponent extends React.Component<ArticleTipsProps> {

  private renderIconElement = (style: StyleType): React.ReactElement<ImageProps> => {
    return this.props.icon(style);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, icon, children } = this.props;

    return (
      <View style={[themedStyle.container, style]}>
        {icon ? this.renderIconElement(themedStyle.icon) : null}
        <Text
          style={themedStyle.text}>
          {children}
        </Text>
      </View>
    );
  }
}

export const ArticleTips = withStyles(ArticleTipsComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 18,
    tintColor: 'white',
  },
  text: {
    color: 'white',
    ...textStyle.subtitle,
  },
}));
