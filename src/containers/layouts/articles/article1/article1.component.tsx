import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import {
  ArticleActivityBar,
  ArticleHeader,
} from '@src/components/articles';
import {
  ActivityAuthoring,
  ContainerView,
  textStyle,
} from '@src/components/common';
import { Article } from '@src/core/model';

interface ComponentProps {
  article: Article;
  onButtonPress: () => void;
  onCommentPress: () => void;
  onLikePress: () => void;
}

export type Article1Props = ThemedComponentProps & ComponentProps;

class Article1Component extends React.Component<Article1Props> {

  private onCommentButtonPress = () => {
    this.props.onCommentPress();
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress();
  };

  public render(): React.ReactNode {
    const { themedStyle, article } = this.props;
    const commentsCount: number = article.comments ? article.comments.length : 0;

    return (
      <ContainerView style={themedStyle.container}>
        <ArticleHeader
          source={article.image.imageSource}
          title={article.title}
          description={`${article.tips} Useful Tips`}
        />
        <Text
          style={themedStyle.contentLabel}
          category='s1'>
          {article.content}
        </Text>
        <ArticleActivityBar
          style={themedStyle.activityContainer}
          comments={commentsCount}
          likes={article.likes}
          onCommentPress={this.onCommentButtonPress}
          onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring
            photo={article.author.photo.imageSource}
            name={`${article.author.firstName} ${article.author.lastName}`}
            date={article.date}
          />
        </ArticleActivityBar>
      </ContainerView>
    );
  }
}

export const Article1 = withStyles(Article1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  activityContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: theme['border-basic-color-2'],
  },
  contentLabel: {
    marginHorizontal: 24,
    marginVertical: 24,
    flex: 1,
    ...textStyle.paragraph,
  },
}));

