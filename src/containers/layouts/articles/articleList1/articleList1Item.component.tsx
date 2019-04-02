import React from 'react';
import {
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ArticleDetails } from '@src/components/articles';
import {
  ImageOverlay,
  Text,
} from '@src/components/common';
import { Article } from '@src/core/model';

interface ComponentProps {
  article: Article;
  onPress: (article: Article) => void;
  onCommentPress: (article: Article) => void;
  onLikePress: (article: Article) => void;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

class ArticleList1ItemComponent extends React.Component<Props> {

  private onPress = () => {
    this.props.onPress(this.props.article);
  };

  private onCommentsButtonPress = () => {
    this.props.onCommentPress(this.props.article);
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress(this.props.article);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, article } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        activeOpacity={0.9}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.image}
          source={{ uri: article.image }}
        />
        <View style={themedStyle.infoContainer}>
          <Text style={themedStyle.titleLabel}>{article.title}</Text>
          <Text style={themedStyle.descriptionLabel}>{article.description}</Text>
        </View>
        <ArticleDetails
          authorPhoto={{ uri: article.author.photo }}
          authorName={`${article.author.firstName} ${article.author.lastName}`}
          date={article.date}
          comments={article.comments}
          likes={article.likes}
          onCommentPress={this.onCommentsButtonPress}
          onLikePress={this.onLikeButtonPress}
        />
      </TouchableOpacity>
    );
  }
}

export const ArticleList1Item = withStyles(ArticleList1ItemComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF0F5',
  },
  image: {
    height: 220,
  },
  titleLabel: {
    fontFamily: 'anton-regular',
    fontSize: 24,
    color: '#0D1C2E',
  },
  descriptionLabel: {
    fontSize: 15,
    fontFamily: 'opensans-semibold',
    color: '#8992A3',
  },
}));
