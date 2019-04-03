import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ArticleDetails,
  ArticleHeader,
} from '@src/components/articles';
import {
  Button,
  Text,
  ButtonProps,
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

  private onHeaderButtonPress = () => {
    this.props.onButtonPress();
  };

  private onCommentButtonPress = () => {
    this.props.onCommentPress();
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress();
  };

  private renderHeaderButton = (style: StyleType): React.ReactElement<ButtonProps> => {
    return (
      <Button
        activeOpacity={0.95}
        onPress={this.onHeaderButtonPress}>
        READ
      </Button>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, article } = this.props;

    return (
      <View style={themedStyle.container}>
        <ArticleHeader
          source={{ uri: article.image }}
          title={article.title}
          description={`${article.tips} Useful Tips`}
          button={this.renderHeaderButton}
        />
        <ScrollView>
          <Text style={themedStyle.contentLabel}>
            {`${article.content} ${article.content}`}
          </Text>
          <ArticleDetails
            style={themedStyle.detailsContainer}
            authorPhoto={{ uri: article.author.photo }}
            authorName={`${article.author.firstName} ${article.author.lastName}`}
            date={article.date}
            comments={article.comments}
            likes={article.likes}
            onCommentPress={this.onCommentButtonPress}
            onLikePress={this.onLikeButtonPress}
          />
        </ScrollView>
      </View>
    );
  }
}

export const Article1 = withStyles(Article1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  detailsContainer: {
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

