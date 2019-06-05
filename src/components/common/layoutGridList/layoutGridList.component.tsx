import React from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  ListProps,
} from '@kitten/ui';
import {
  LayoutGridListItem,
  LayoutGridListItemProps,
} from './layoutGridListItem.component';
import { LayoutGridListItemData } from './type';

const { width } = Dimensions.get('window');
const itemWidth: number = width / 2 - 32;

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: LayoutGridListItemData[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListItemElementInfo) => ListItemElement;
}

export type LayoutGridListProps = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<LayoutGridListItemProps>;
type ListItemElementInfo = ListRenderItemInfo<LayoutGridListItemData>;

class LayoutGridListComponent extends React.Component<LayoutGridListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <LayoutGridListItem
        style={this.props.themedStyle.item}
        data={info.item}
        onPress={this.onItemPress}
      />
    );
  };

  public render(): React.ReactNode {
    return (
      <List
        numColumns={2}
        renderItem={this.renderItem}
        {...this.props}
      />
    );
  }
}

export const LayoutGridList = withStyles(LayoutGridListComponent, (theme: ThemeType) => ({
  item: {
    flex: 1,
    maxWidth: itemWidth,
    marginVertical: 8,
    marginHorizontal: 8,
  },
}));
