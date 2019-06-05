import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { List } from '@kitten/ui';
import { Article } from '@src/core/model';
import {
  ArticleList3Item,
  ArticleList3ItemProps,
} from './articleList3Item.component';

interface ComponentProps {
  articles: Article[];
  onItemPress: (article: Article) => void;
  onItemLikePress: (article: Article) => void;
  onItemCommentPress: (article: Article) => void;
}

export type ArticleList3Props = ThemedComponentProps & ComponentProps;

class ArticleList3Component extends React.Component<ArticleList3Props> {

  private onItemPress = (article: Article) => {
    this.props.onItemPress(article);
  };

  private onItemLikePress = (article: Article) => {
    this.props.onItemLikePress(article);
  };

  private onItemCommentPress = (article: Article) => {
    this.props.onItemCommentPress(article);
  };

  private renderItem = (info: ListRenderItemInfo<Article>): React.ReactElement<ArticleList3ItemProps> => {
    const { themedStyle } = this.props;

    return (
      <ArticleList3Item
        style={themedStyle.item}
        article={info.item}
        onPress={this.onItemPress}
        onLikePress={this.onItemLikePress}
        onCommentPress={this.onItemCommentPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, articles } = this.props;

    return (
      <List
        contentContainerStyle={themedStyle.container}
        data={articles}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ArticleList3 = withStyles(ArticleList3Component, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme['background-basic-color-2'],
  },
  item: {
    marginVertical: 8,
    backgroundColor: theme['background-basic-color-1'],
  },
}));

