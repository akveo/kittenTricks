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
import { ComponentsListItemData } from './type';

interface ComponentProps {
  data: ComponentsListItemData;
}

export type ComponentsListItemProps = ThemedComponentProps & ListItemProps & ComponentProps;

class ComponentsListItemComponent extends React.Component<ComponentsListItemProps> {

  private renderShowcaseElement = (style: StyleType): React.ReactElement<ImageProps> => {
    const showcaseElement: React.ReactElement<ImageProps> = this.props.data.showcase(style);

    return React.cloneElement(showcaseElement, {
      style: [style, showcaseElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, data, ...restProps } = this.props;

    return (
      <ListItem
        {...restProps}
        style={[themedStyle.container, style]}>
        {this.renderShowcaseElement(themedStyle.showcase)}
        <Text
          style={themedStyle.title}
          appearance='dark'
          category='s2'>
          {data.title}
        </Text>
      </ListItem>
    );
  }
}

export const ComponentsListItem = withStyles(ComponentsListItemComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: theme['color-white'],
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  showcase: {},
  title: {
    marginTop: 8,
    ...textStyle.subtitle,
  },
}));
