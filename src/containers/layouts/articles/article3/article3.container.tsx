import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Article } from '@src/core/model';
import { articles } from '@src/core/data/article';
import { Article3 } from './article3.component';

interface State {
  article: Article;
  comments: string[];
  currentComment: string;
}

export class Article3Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    article: articles[0],
    comments: [
      'This is very useful information for me. Thanks for your article!',
    ],
    currentComment: '',
  };

  private onCommentPress = () => {

  };

  private onLikePress = () => {

  };

  private onCommentTextChange = (text: string) => {
    this.setState({ currentComment: text });
  };

  private onCommentSubmit = () => {
    const comments: string[] = this.state.comments;
    comments.push(this.state.currentComment);
    this.setState({
      currentComment: '',
      comments: comments,
    });
  };

  public render(): React.ReactNode {
    return (
      <Article3
        article={this.state.article}
        comments={this.state.comments}
        comment={this.state.currentComment}
        onCommentTextChange={this.onCommentTextChange}
        onCommentSubmit={this.onCommentSubmit}
        onCommentPress={this.onCommentPress}
        onLikePress={this.onLikePress}
      />
    );
  }
}
