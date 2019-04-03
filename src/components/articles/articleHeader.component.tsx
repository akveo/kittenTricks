import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ImageOverlay,
  ImageOverlayProps,
  Text,
} from '@src/components/common';

interface ComponentProps {
  title: React.ReactText;
  description: React.ReactText;
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
        <Text style={componentStyle.titleLabel}>
          {title}
        </Text>
        <Text style={componentStyle.descriptionLabel}>
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
    paddingHorizontal: 64,
    paddingVertical: 64,
  },
  titleLabel: {
    fontFamily: 'anton-regular',
    fontSize: 48,
    textAlign: 'center',
  },
  descriptionLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 18,
  },
}));
