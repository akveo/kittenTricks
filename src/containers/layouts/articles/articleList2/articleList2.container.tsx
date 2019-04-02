import React from 'react';
import { Article } from '@src/core/model';
import { articles } from '@src/core/data/article';
import { ArticleList2 } from './articleList2.component';

interface State {
  articles: Article[];
}

export class ArticleList2Container extends React.Component<any, State> {

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
      <ArticleList2
        articles={articles}
        onItemPress={this.onItemPress}
        onItemLikePress={this.onItemLikePress}
        onItemCommentPress={this.onItemCommentPress}
      />
    );
  }
}
