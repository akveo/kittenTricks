import React from 'react';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ButtonProps,
  ImageOverlay,
  ImageOverlayProps,
  Text,
} from '@src/components/common';

interface ComponentProps {
  title: React.ReactText;
  description: React.ReactText;
  button?: (style: StyleType) => React.ReactElement<ButtonProps>;
}

export type ArticleHeaderProps = ThemedComponentProps & ImageOverlayProps & ComponentProps;

class ArticleHeaderComponent extends React.Component<ArticleHeaderProps> {

  private renderButtonElement = (style: StyleType): React.ReactElement<ButtonProps> => {
    const buttonElement: React.ReactElement<ButtonProps> = this.props.button(style);

    return React.cloneElement(buttonElement, {
      style: [style, buttonElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, title, description, button, ...restProps } = this.props;
    const { button: buttonStyle, ...componentStyle } = themedStyle;

    return (
      <ImageOverlay
        {...restProps}
        style={[componentStyle.container, style]}>
        <Text style={componentStyle.titleLabel}>{title}</Text>
        <Text style={componentStyle.descriptionLabel}>{description}</Text>
        { button ? this.renderButtonElement(buttonStyle) : null }
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
  button: {
    height: 40,
    width: 200,
    marginTop: 32,
    fontFamily: 'opensans-extrabold',
    fontSize: 16,
    backgroundColor: 'white',
    color: '#3366FF',
  },
}));
