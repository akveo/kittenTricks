import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  List,
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

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  renderItem?: () => void;
  onItemSelect: (index: number) => void;
}

export type LayoutListProps = ThemedComponentProps & ComponentProps;

class LayoutListComponent extends React.Component<LayoutListProps> {

  private onItemPress = (index: number): void => {
    this.props.onItemSelect(index);
  };

  private renderListItemElement = (item: ListItem): React.ReactElement<LayoutListItemProps> => {
    return (
      <LayoutListItem
        style={this.props.themedStyle.item}
        title={item.title}
        description={item.description}
        onPress={this.onItemPress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<ListItem>): React.ReactElement<LayoutListItemProps> => {
    const { item, index } = info;

    const listItemElement: React.ReactElement<LayoutListItemProps> = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  public render(): React.ReactNode {
    const { style, contentContainerStyle, themedStyle, ...restProps } = this.props;

    return (
      <List
        style={[themedStyle.container, style]}
        contentContainerStyle={[themedStyle.contentContainer, contentContainerStyle]}
        {...restProps}
        renderItem={this.renderItem}
      />
    );
  }
}

export const LayoutList = withStyles(LayoutListComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-basic-100'],
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  item: {
    marginVertical: 12,
    backgroundColor: theme['color-white'],
  },
}));
