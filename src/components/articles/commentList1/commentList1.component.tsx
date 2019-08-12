import React from 'react';
import {
  ListRenderItemInfo,
  ViewStyle,
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
import { Comment } from '@src/core/model';
import {
  CommentList1Item,
  CommentList1ItemProps,
} from './commentList1Item.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: Comment[];
  onLikePress: (index: number) => void;
  onMorePress: (index: number) => void;
  onReplyMorePress: (index: number) => void;
  renderItem?: (info: ListItemElementInfo) => ListItemElement;
}

export type CommentsList1Props = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<CommentList1ItemProps>;
type ListItemElementInfo = ListRenderItemInfo<Comment>;

class CommentList1Component extends React.Component<CommentsList1Props> {

  private onItemMorePress = (index: number) => {
    this.props.onMorePress(index);
  };

  private onItemLikePress = (index: number) => {
    this.props.onLikePress(index);
  };

  private onItemReplyMorePress = (index: number) => {
    this.props.onReplyMorePress(index);
  };

  private isLastItem = (index: number): boolean => {
    const { data } = this.props;

    return data.length - 1 === index;
  };

  private renderListItemElement = (comment: Comment): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <CommentList1Item
        style={themedStyle.item}
        comment={comment}
        onLikePress={this.onItemLikePress}
        onMorePress={this.onItemMorePress}
        onReplyMorePress={this.onItemReplyMorePress}
      />
    );
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    const { themedStyle } = this.props;
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderListItemElement(item);

    const additionalStyle: ViewStyle = this.isLastItem(index) ? null : themedStyle.itemBorder;

    return React.cloneElement(listItemElement, {
      style: [listItemElement.props.style, additionalStyle],
    });
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, ...restProps } = this.props;

    return (
      <List
        {...restProps}
        renderItem={this.renderItem}
      />
    );
  }
}

export const CommentsList1 = withStyles(CommentList1Component, (theme: ThemeType) => ({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: theme['background-basic-color-2'],
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-3'],
  },
}));

