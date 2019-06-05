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
import { Text } from '@kitten/ui';
import {
  ArticleActivityBar,
  ArticleTips,
} from '@src/components/articles';
import {
  ActivityAuthoring,
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import { BulbIconFill } from '@src/assets/icons';
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
        activeOpacity={0.95}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.image}
          source={article.image.imageSource}>
          <Text
            style={themedStyle.titleLabel}
            category='h4'>
            {article.title}
          </Text>
          <ArticleTips
            style={themedStyle.tipsContainer}
            icon={BulbIconFill}>
            {`${article.tips} Useful Tips`}
          </ArticleTips>
        </ImageOverlay>
        <ArticleActivityBar
          style={themedStyle.activityContainer}
          comments={article.comments ? article.comments.length : 0}
          likes={article.likes}
          onCommentPress={this.onCommentsButtonPress}
          onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring
            photo={article.author.photo.imageSource}
            name={`${article.author.firstName} ${article.author.lastName}`}
            date={article.date}
          />
        </ArticleActivityBar>
      </TouchableOpacity>
    );
  }
}

export const ArticleList2Item = withStyles(ArticleList2ItemComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  activityContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  tipsContainer: {
    marginTop: 16,
  },
  image: {
    minHeight: 220,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  titleLabel: {
    maxWidth: 192,
    color: 'white',
    ...textStyle.headline,
  },
}));
