import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  Button,
} from '@kitten/ui';
import { ArticleHeader } from '@src/components/articles';
import { Article } from '@src/core/model';
import {
  ArticleList4Item,
  ArticleList4ItemProps,
} from './articleList4Item.component';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';

interface ComponentProps {
  articles: Article[];
  onItemPress: (index: number) => void;
  onItemCommentPress: (index: number) => void;
  onItemLikePress: (index: number) => void;
}

export type ArticleList4Props = ThemedComponentProps & ComponentProps;

class ArticleList4Component extends React.Component<ArticleList4Props> {

  private onReadButtonPress = () => {
    this.props.onItemPress(0);
  };

  private onItemPress = (index: number) => {
    this.props.onItemPress(index + 1);
  };

  private onItemCommentPress = (index: number) => {
    this.props.onItemCommentPress(index + 1);
  };

  private onItemLikePress = (index: number) => {
    this.props.onItemLikePress(index + 1);
  };

  private renderArticleItemElement = (item: Article, index: number): React.ReactElement<ArticleList4ItemProps> => {
    const { themedStyle } = this.props;

    const isReverse: boolean = index % 2 === 1;
    const style: StyleType = isReverse ? themedStyle.itemReverse : themedStyle.item;

    return (
      <ArticleList4Item
        style={style}
        photo={item.image.imageSource}
        title={item.title}
        comments={item.comments ? item.comments.length : 0}
        likes={item.likes}
        onPress={this.onItemPress}
        onCommentPress={this.onItemCommentPress}
        onLikePress={this.onItemLikePress}
      />
    );
  };

  private renderArticleItem = (info: ListRenderItemInfo<Article>): React.ReactElement<ArticleList4ItemProps> => {
    const { item, index } = info;

    const articleElement: React.ReactElement<ArticleList4ItemProps> = this.renderArticleItemElement(item, index);

    return React.cloneElement(articleElement, { index });
  };

  public render(): React.ReactNode {
    const { themedStyle, articles } = this.props;
    const [headingArticle, ...restArticles] = articles;

    return (
      <ContainerView style={themedStyle.container}>
        <ArticleHeader
          source={headingArticle.image.imageSource}
          title={headingArticle.title}
          description={`${headingArticle.tips} Useful Tips`}>
          <Button
            style={themedStyle.readButton}
            textStyle={textStyle.button}
            status='control'
            onPress={this.onReadButtonPress}>
            READ
          </Button>
        </ArticleHeader>
        <List
          data={restArticles}
          renderItem={this.renderArticleItem}
        />
      </ContainerView>
    );
  }
}

export const ArticleList4 = withStyles(ArticleList4Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  item: {
    flex: 1,
  },
  itemReverse: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  readButton: {
    width: 200,
    marginTop: 32,
  },
}));
