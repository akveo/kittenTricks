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
import { ArticleActivityBar } from '@src/components/articles';
import {
  ActivityAuthoring,
  ImageOverlay,
  Text,
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

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.image}
          source={{ uri: article.image }}
        />
        <View style={themedStyle.infoContainer}>
          <Text style={themedStyle.titleLabel}>{article.title}</Text>
          <Text style={themedStyle.descriptionLabel}>{article.description}</Text>
        </View>
        <ArticleActivityBar
          style={themedStyle.activityContainer}
          comments={article.comments}
          likes={article.likes}
          onCommentPress={this.onCommentsButtonPress}
          onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring
            photo={{ uri: article.author.photo }}
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
    borderBottomColor: '#EDF0F5',
  },
  activityContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
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
    marginTop: 16,
    fontSize: 15,
    fontFamily: 'opensans-semibold',
    color: '#8992A3',
  },
}));
