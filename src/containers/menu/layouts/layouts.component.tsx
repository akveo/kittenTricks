import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  List,
  ListItemProps,
} from '@kitten/ui';
import { ListItem } from './layouts.container';
import { LayoutsListItem } from './layoutsListItem.component';

interface ComponentProps {
  items: ListItem[];
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<ListItemProps>;

class LayoutsComponent extends React.Component<Props> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  private renderItemElement = (item: ListItem): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <LayoutsListItem
        style={themedStyle.item}
        activeOpacity={0.75}
        title={item.title}
        icon={item.icon}
        onPress={this.onItemPress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<ListItem>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  public render(): React.ReactNode {
    const { themedStyle, items } = this.props;

    return (
      <List
        style={themedStyle.container}
        contentContainerStyle={themedStyle.contentContainer}
        numColumns={2}
        data={items}
        renderItem={this.renderItem}
      />
    );
  }
}

export const Layouts = withStyles(LayoutsComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-basic-100'],
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  item: {
    flex: 1,
    height: 160,
    marginHorizontal: 8,
    marginVertical: 8,
  },
}));
