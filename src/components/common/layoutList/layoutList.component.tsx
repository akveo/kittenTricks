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
  ListProps,
} from '@kitten/ui';
import {
  LayoutListItem,
  LayoutListItemProps,
} from './layoutListItem.component';

export interface ListItem {
  title: string;
  description: string;
}

interface ComponentProps {
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps & ListProps;

class LayoutListComponent extends React.Component<Props> {

  private onItemPress = (index: number): void => {
    this.props.onItemSelect(index);
  };

  private renderListItemElement = (item: ListItem): React.ReactElement<ListItemProps> => {
    return (
      <LayoutListItem
        style={this.props.themedStyle.item}
        title={item.title}
        description={item.description}
        onPress={this.onItemPress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<ListItemModel>): React.ReactElement<ListItemProps> => {
    const { item, index } = info;

    const listItemElement: React.ReactElement<LayoutListItemProps> = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, items, ...restProps } = this.props;

    return (
      <List
        {...restProps}
        style={[themedStyle.container, style]}
        data={items}
        renderItem={this.renderItem}
      />
    );
  }
}

export const LayoutList = withStyles(LayoutListComponent, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: '#F7F8FA',
  },
  item: {
    marginVertical: 12,
    backgroundColor: '#FFFFFF',
  },
}));
