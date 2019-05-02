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
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import { Article } from '@src/core/model';

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps {
  article: Article;
  onPress: (article: Article) => void;
  onCommentPress: (article: Article) => void;
  onLikePress: (article: Article) => void;
}

export type ArticleList3ItemProps = ThemedComponentProps & ComponentProps;

class ArticleList3ItemComponent extends React.Component<ArticleList3ItemProps> {

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
          <Text
            style={themedStyle.titleLabel}
            appearance='light'
            category='h4'>
            {article.title}
          </Text>
          <ArticleTips style={themedStyle.tipsContainer}>
            {`${article.tips} Useful Tips`}
          </ArticleTips>
          <ArticleActivityBar
            style={themedStyle.activityContainer}
            textStyle={themedStyle.activityBarLabel}
            comments={article.comments ? article.comments.length : 0}
            likes={article.likes}
            onCommentPress={this.onCommentsButtonPress}
            onLikePress={this.onLikeButtonPress}
          />
        </ImageOverlay>
      </TouchableOpacity>
    );
  }
}

export const ArticleList3Item = withStyles(ArticleList3ItemComponent, (theme: ThemeType) => ({
  container: {
    minHeight: 220,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tipsContainer: {
    marginTop: 16,
  },
  activityContainer: {
    marginTop: 48,
  },
  image: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  titleLabel: {
    maxWidth: 192,
    ...textStyle.headline,
  },
  activityBarLabel: {
    color: theme['font-light-color'],
  },
}));
