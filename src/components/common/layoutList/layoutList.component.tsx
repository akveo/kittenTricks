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
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <List
        style={[themedStyle.container, style]}
        {...restProps}
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
