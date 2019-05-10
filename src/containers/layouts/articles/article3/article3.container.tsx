import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  Article,
  Comment,
  Profile,
} from '@src/core/model';
import { articles } from '@src/core/data/article';
import {
  profile1,
  profile2,
  profile3,
  profile4,
} from '@src/core/data/profile';
import { comments } from '@src/core/data/comment';
import { Article3 } from './article3.component';

const profiles: Profile[] = [
  profile1,
  profile2,
  profile3,
  profile4,
];

interface State {
  article: Article;
  comments: Comment[];
  currentCommentText: string;
}

export class Article3Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    article: articles[0],
    comments: comments,
    currentCommentText: '',
  };

  private onLikePress = (index: number) => {

  };

  private onMorePress = (index: number) => {

  };

  private onReplyMorePress = (index: number) => {

  };

  private onCommentTextChange = (text: string) => {
    this.setState({ currentCommentText: text });
  };

  private onCommentSubmit = () => {
    const articleCopy: Article = this.state.article;
    articleCopy.comments.push({
      author: profiles[Math.floor(Math.random() * profiles.length)],
      text: this.state.currentCommentText,
      likesCount: 1,
      date: 'Today 10:36 pm',
    });
    this.setState({
      article: articleCopy,
      currentCommentText: '',
    });
  };

  public render(): React.ReactNode {
    return (
      <Article3
        article={this.state.article}
        comments={this.state.comments}
        currentCommentText={this.state.currentCommentText}
        onCommentTextChange={this.onCommentTextChange}
        onCommentSubmit={this.onCommentSubmit}
        onCommentLikePress={this.onLikePress}
        onCommentMorePress={this.onMorePress}
        onCommentReplyMorePress={this.onReplyMorePress}
      />
    );
  }
}
