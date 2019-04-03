import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ArticleDetails,
  ArticleTips,
} from '@src/components/articles';
import {
  ImageOverlay,
  Text,
} from '@src/components/common';
import { BulbIcon } from '@src/assets/icons';
import { Article } from '@src/core/model';

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps {
  article: Article;
  onPress: (article: Article) => void;
  onCommentPress: (article: Article) => void;
  onLikePress: (article: Article) => void;
}

export type ArticleList2ItemProps = ThemedComponentProps & ComponentProps;

class ArticleList2ItemComponent extends React.Component<ArticleList2ItemProps> {

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
    const { style, themedStyle, article, ...restProps } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.image}
          source={{ uri: article.image }}>
          <Text style={themedStyle.titleLabel}>{article.title}</Text>
          <ArticleTips
            style={themedStyle.tipsContainer}
            icon={BulbIcon}>
            {`${article.tips} Useful Tips`}
          </ArticleTips>
        </ImageOverlay>
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

export const ArticleList2Item = withStyles(ArticleList2ItemComponent, (theme: ThemeType) => ({
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
  tipsContainer: {
    marginTop: 16,
  },
  image: {
    minHeight: 220,
    paddingHorizontal: 16,
    paddingVertical: 24,
    tintColor: 'rgba(0, 0, 0, 0.25)',
  },
  titleLabel: {
    maxWidth: 192,
    fontFamily: 'anton-regular',
    fontSize: 32,
  },
}));
