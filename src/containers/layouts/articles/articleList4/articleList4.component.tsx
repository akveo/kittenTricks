import React from 'react';
import {
  ListRenderItemInfo,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { List } from '@kitten/ui';
import {
  Button,
  ImageOverlay,
  Text,
} from '@src/components/common';
import { Article } from '@src/core/model';
import {
  ArticleList4Item,
  ArticleList4ItemProps,
} from './articleList4Item.component';

interface ComponentProps {
  articles: Article[];
  onItemPress: (index: number) => void;
  onItemCommentPress: (index: number) => void;
  onItemLikePress: (index: number) => void;
}

export type ArticleList4Props = ThemedComponentProps & ComponentProps;

class ArticleList4Component extends React.Component<ArticleList4Props> {

  private onHeaderItemPress = () => {
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
        photo={{ uri: item.image }}
        title={item.title}
        comments={item.comments}
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
      <View style={themedStyle.container}>
        <ImageOverlay
          style={themedStyle.headerItem}
          source={{ uri: headingArticle.image }}>
          <Text style={themedStyle.headerItemTitleLabel}>{headingArticle.title}</Text>
          <Text style={themedStyle.headerItemTipsLabel}>
            {`${headingArticle.tips} Useful Tips`}
          </Text>
          <Button
            style={themedStyle.headerItemButton}
            activeOpacity={0.95}
            onPress={this.onHeaderItemPress}>
            READ
          </Button>
        </ImageOverlay>
        <List
          data={restArticles}
          renderItem={this.renderArticleItem}
        />
      </View>
    );
  }
}

export const ArticleList4 = withStyles(ArticleList4Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 64,
    paddingVertical: 64,
  },
  item: {
    flex: 1,
  },
  itemReverse: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  headerItemTitleLabel: {
    fontFamily: 'anton-regular',
    fontSize: 48,
    textAlign: 'center',
  },
  headerItemTipsLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 18,
  },
  headerItemButton: {
    height: 40,
    width: 200,
    marginTop: 32,
    fontFamily: 'opensans-extrabold',
    fontSize: 16,
    backgroundColor: 'white',
    color: '#3366FF',
  },
}));
