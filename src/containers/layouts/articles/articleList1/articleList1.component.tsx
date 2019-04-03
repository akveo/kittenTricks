import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { List } from '@kitten/ui';
import { Article } from '@src/core/model';
import { ArticleList1Item } from './articleList1Item.component';

interface ComponentProps {
  articles: Article[];
  onItemPress: (article: Article) => void;
  onItemLikePress: (article: Article) => void;
  onItemCommentPress: (article: Article) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class ArticleList1Component extends React.Component<Props> {

  private onItemPress = (article: Article) => {
    this.props.onItemPress(article);
  };

  private onItemLikePress = (article: Article) => {
    this.props.onItemLikePress(article);
  };

  private onItemCommentPress = (article: Article) => {
    this.props.onItemCommentPress(article);
  };

  private renderItem = (info: ListRenderItemInfo<Article>): React.ReactElement<any> => {
    const { themedStyle } = this.props;

    return (
      <ArticleList1Item
        style={themedStyle.item}
        article={info.item}
        onPress={this.onItemPress}
        onLikePress={this.onItemLikePress}
        onCommentPress={this.onItemCommentPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <List
        style={themedStyle.container}
        data={this.props.articles}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ArticleList1 = withStyles(ArticleList1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F7F8FA',
  },
  item: {
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
  },
}));

