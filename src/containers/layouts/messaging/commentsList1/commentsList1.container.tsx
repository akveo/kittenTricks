import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Comment } from '@src/core/model';
import { comments } from '@src/core/data/comment';
import { CommentsList1 } from './commentsList1.component';

interface State {
  comments: Comment[];
}

export class CommentsList1Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    comments: comments,
  };

  private onMorePress = (index: number) => {

  };

  private onLikePress = (index: number) => {

  };

  private onCommentPress = (index: number) => {

  };

  public render(): React.ReactNode {
    return (
      <CommentsList1
        comments={this.state.comments}
        onMorePress={this.onMorePress}
        onLikePress={this.onLikePress}
        onCommentPress={this.onCommentPress}
      />
    );
  }
}
