import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Article } from '@src/core/model';
import { articles } from '@src/core/data/article';
import { ArticleList3 } from './articleList3.component';

interface State {
  articles: Article[];
}

export class ArticleList3Container extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    articles: articles,
  };

  private onItemPress = (article: Article) => {

  };

  private onItemLikePress = (article: Article) => {

  };

  private onItemCommentPress = (article: Article) => {

  };

  public render(): React.ReactNode {
    return (
      <ArticleList3
        articles={articles}
        onItemPress={this.onItemPress}
        onItemLikePress={this.onItemLikePress}
        onItemCommentPress={this.onItemCommentPress}
      />
    );
  }
}
