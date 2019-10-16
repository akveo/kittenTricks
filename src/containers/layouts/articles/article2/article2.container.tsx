import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Article } from '@src/core/model';
import { articles } from '@src/core/data/article';
import { Article2 } from './article2.component';

interface State {
  article: Article;
}

export class Article2Container extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    article: articles[0],
  };

  private onCommentPress = () => {

  };

  private onLikePress = () => {

  };

  public render(): React.ReactNode {
    return (
      <Article2
        article={this.state.article}
        onCommentPress={this.onCommentPress}
        onLikePress={this.onLikePress}
      />
    );
  }
}
