import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ArticleActivityBar,
  ArticleHeader,
} from '@src/components/articles';
import {
  Text,
  ActivityAuthoring,
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
      <View style={themedStyle.container}>
        <ArticleHeader
          source={{ uri: article.image }}
          title={article.title}
          description={`${article.tips} Useful Tips`}
        />
        <ScrollView contentContainerStyle={themedStyle.contentContainer}>
          <Text style={themedStyle.contentLabel}>
            {article.content}
          </Text>
          <ArticleActivityBar
            style={themedStyle.activityContainer}
            comments={commentsCount}
            likes={article.likes}
            onCommentPress={this.onCommentButtonPress}
            onLikePress={this.onLikeButtonPress}>
            <ActivityAuthoring
              photo={{ uri: article.author.photo }}
              name={`${article.author.firstName} ${article.author.lastName}`}
              date={article.date}
            />
          </ArticleActivityBar>
        </ScrollView>
      </View>
    );
  }
}

export const Article1 = withStyles(Article1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  activityContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#EDF0F5',
  },
  contentLabel: {
    marginHorizontal: 24,
    marginVertical: 24,
    flex: 1,
    fontSize: 17,
    color: '#0D1C2E',
  },
}));

