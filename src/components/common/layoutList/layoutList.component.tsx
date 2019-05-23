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
import { LayoutListItemData } from './type';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: LayoutListItemData[];
  renderItem?: (info: ListItemElementInfo) => void;
  onItemPress: (index: number) => void;
}

export type LayoutListProps = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<LayoutListItemProps>;
type ListItemElementInfo = ListRenderItemInfo<LayoutListItemData>;

class LayoutListComponent extends React.Component<LayoutListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <LayoutListItem
        style={this.props.themedStyle.item}
        data={info.item}
        onPress={this.onItemPress}
      />
    );
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
  item: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
}));
