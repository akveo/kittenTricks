import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import {
  ImageOverlay,
  ImageOverlayProps,
  textStyle,
} from '@src/components/common';

interface ComponentProps {
  title: string;
  description: string;
}

export type ArticleHeaderProps = ThemedComponentProps & ImageOverlayProps & ComponentProps;

class ArticleHeaderComponent extends React.Component<ArticleHeaderProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, title, description, children, ...restProps } = this.props;
    const { button: buttonStyle, ...componentStyle } = themedStyle;

    return (
      <ImageOverlay
        {...restProps}
        style={[componentStyle.container, style]}>
        <Text
          style={componentStyle.titleLabel}
          category='h3'>
          {title}
        </Text>
        <Text
          style={componentStyle.descriptionLabel}
          category='h6'>
          {description}
        </Text>
        {children}
      </ImageOverlay>
    );
  }
}

export const ArticleHeader = withStyles(ArticleHeaderComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 64,
  },
  titleLabel: {
    textAlign: 'center',
    color: 'white',
    ...textStyle.headline,
  },
  descriptionLabel: {
    color: 'white',
    ...textStyle.subtitle,
  },
}));
