import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  ListProps,
} from '@kitten/ui';
import { Comment } from '@src/core/model';
import {
  CommentList2Item,
  CommentList2ItemProps,
} from './commentList2Item.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: Comment[];
  onItemMorePress: (index: number) => void;
  renderItem?: (info: ListItemElementInfo) => ListItemElement;
}

export type CommentList2Props = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<CommentList2ItemProps>;
type ListItemElementInfo = ListRenderItemInfo<Comment>;

class CommentList2Component extends React.Component<CommentList2Props> {

  private onItemMorePress = (index: number) => {
    this.props.onItemMorePress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <CommentList2Item
        style={this.props.themedStyle.item}
        data={info.item}
        onMorePress={this.onItemMorePress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <List
        {...restProps}
        renderItem={this.renderItem}
      />
    );
  }
}

export const CommentList2 = withStyles(CommentList2Component, (theme: ThemeType) => ({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
}));
