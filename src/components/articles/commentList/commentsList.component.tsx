import React from 'react';
import {
  Animated,
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
  Comment as CommentComponent,
  CommentProps,
} from './comment.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  onMorePress: (index: number) => void;
  onLikePress: (index: number) => void;
  onCommentPress: (index: number) => void;
  renderItem?: (info: ListRenderItemInfo<Comment>) => ListItemElement;
}

export type CommentsListProps = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<CommentProps>;

class CommentsListComponent extends React.Component<CommentsListProps> {

  private onMorePress = (index: number) => {
    this.props.onMorePress(index);
  };

  private onLikePress = (index: number) => {
    this.props.onLikePress(index);
  };

  private onCommentPress = (index: number) => {
    this.props.onCommentPress(index);
  };

  private isLastItem = (index: number): boolean => {
    const { data } = this.props;

    return data.length - 1 === index;
  };

  private renderListItemElement = (comment: Comment): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <CommentComponent
        style={themedStyle.item}
        comment={comment}
        onLikePress={this.onLikePress}
        onCommentPress={this.onCommentPress}
        onProfilePress={this.onMorePress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<Comment>): ListItemElement => {
    const { themedStyle } = this.props;
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderListItemElement(item);

    const additionalStyle: ViewStyle = this.isLastItem(index) ? null : themedStyle.itemBorder;

    return React.cloneElement(listItemElement, {
      style: [listItemElement.props.style, additionalStyle],
    });
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, data, ...restProps } = this.props;

    return (
      <List
        {...restProps}
        contentContainerStyle={[contentContainerStyle, themedStyle.container]}
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}

export const CommentsList = withStyles(CommentsListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-white'],
  },
  item: {
    backgroundColor: theme['color-white'],
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme['color-basic-200'],
  },
}));

