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
  Comment as CommentComponent,
  CommentProps,
} from './comment.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: Comment[];
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

  private renderItem = (info: ListRenderItemInfo<Comment>): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <CommentComponent
        style={themedStyle.item}
        comment={info.item}
        index={info.index}
        onLikePress={this.onLikePress}
        onCommentPress={this.onCommentPress}
        onProfilePress={this.onMorePress}
      />
    );
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
    paddingVertical: 8,
    backgroundColor: theme['color-white'],
  },
  item: {
    marginVertical: 8,
    backgroundColor: theme['color-white'],
  },
}));

