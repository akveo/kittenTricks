import React from 'react';
import { ImageProps } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import {
  ThemeContext,
  ThemeKey,
} from '@src/core/themes';
import { ComponentsListItemData } from './type';

interface ComponentProps {
  data: ComponentsListItemData;
}

export type ComponentsListItemProps = ThemedComponentProps & ListItemProps & ComponentProps;

class ComponentsListItemComponent extends React.Component<ComponentsListItemProps> {

  private renderShowcaseElement = (style: StyleType, theme: ThemeKey): React.ReactElement<ImageProps> => {
    const showcaseElement: React.ReactElement<ImageProps> = this.props.data.icon(style, theme);

    return React.cloneElement(showcaseElement, {
      style: [style, showcaseElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, data, ...restProps } = this.props;

    return (
      <ThemeContext.Consumer>{({ currentTheme }) => (
        <ListItem
          {...restProps}
          style={[themedStyle.container, style]}>
          {this.renderShowcaseElement(themedStyle.icon, currentTheme)}
          <Text
            style={textStyle.subtitle}
            category='s2'>
            {data.title}
          </Text>
        </ListItem>
      )}</ThemeContext.Consumer>
    );
  }
}

export const ComponentsListItem = withStyles(ComponentsListItemComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  icon: {
    width: 80,
    height: 80,
  },
}));
