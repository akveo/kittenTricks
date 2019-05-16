import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { ArticleActivityBar } from '@src/components/articles';
import {
  ActivityAuthoring,
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

export type ArticleList1ItemProps = ThemedComponentProps & ComponentProps;

class ArticleList1ItemComponent extends React.Component<ArticleList1ItemProps> {

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
    const commentsCount: number = article.comments ? article.comments.length : 0;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.image}
          source={article.image.imageSource}
        />
        <View style={themedStyle.infoContainer}>
          <Text
            style={themedStyle.titleLabel}
            category='h5'>
            {article.title}
          </Text>
          <Text
            style={themedStyle.descriptionLabel}
            appearance='hintDark'
            category='s1'>
            {article.description}
          </Text>
        </View>
        <ArticleActivityBar
          style={themedStyle.activityContainer}
          comments={commentsCount}
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

export const ArticleList1Item = withStyles(ArticleList1ItemComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: theme['color-basic-200'],
  },
  activityContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  image: {
    height: 220,
  },
  titleLabel: textStyle.headline,
  descriptionLabel: {
    marginTop: 16,
    ...textStyle.subtitle,
  },
}));
