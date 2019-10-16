import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Article } from '@src/core/model';
import { Article1 } from './article1.component';
import { articles } from '@src/core/data/article';

interface State {
  article: Article;
}

export class Article1Container extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    article: articles[0],
  };

  private onButtonPress = () => {

  };

  private onCommentPress = () => {

  };

  private onLikePress = () => {

  };

  public render(): React.ReactNode {
    return (
      <Article1
        article={this.state.article}
        onButtonPress={this.onButtonPress}
        onCommentPress={this.onCommentPress}
        onLikePress={this.onLikePress}
      />
    );
  }
}
