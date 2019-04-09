import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { List } from '@kitten/ui';
import { Comment as CommentComponent } from '@src/components/common';
import { Comment } from '@src/core/model';

interface ComponentProps {
  comments: Comment[];
  onMorePress: (index: number) => void;
  onLikePress: (index: number) => void;
  onCommentPress: (index: number) => void;
}

export type CommentsList1Props = ThemedComponentProps & ComponentProps;

class CommentsList1Component extends React.Component<CommentsList1Props> {

  private onMorePress = (index: number) => {
    this.props.onMorePress(index);
  };

  private onLikePress = (index: number) => {
    this.props.onLikePress(index);
  };

  private onCommentPress = (index: number) => {
    this.props.onCommentPress(index);
  };

  private renderItem = (info: ListRenderItemInfo<Comment>): React.ReactElement<any> => {
    const { themedStyle } = this.props;

    return (
      <CommentComponent
        style={themedStyle.item}
        comment={info.item}
        index={info.index}
        onLikePress={this.onLikePress}
        onCommentPress={this.onCommentPress}
        onProfilePress={this.onMorePress}/>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, comments } = this.props;

    return (
      <List
        style={themedStyle.container}
        data={comments}
        renderItem={this.renderItem}
      />
    );
  }
}

export const CommentsList1 = withStyles(CommentsList1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme['color-white'],
  },
  item: {
    marginVertical: 8,
    backgroundColor: theme['color-white'],
  },
}));

