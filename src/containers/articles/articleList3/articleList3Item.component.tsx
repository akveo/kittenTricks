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
import {
  ArticleTips,
  ReactionButton,
} from '@src/components/articles';
import {
  ImageOverlay,
  Text,
} from '@src/components/common';
import {
  HeartIcon,
  MessageCircleIcon,
} from '@src/assets/icons';
import { Article } from '@src/core/model';

interface ComponentProps {
  article: Article;
  onPress: (article: Article) => void;
  onCommentPress: (article: Article) => void;
  onLikePress: (article: Article) => void;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

class ArticleList3ItemComponent extends React.Component<Props> {

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
          source={{ uri: article.image }}>
          <Text style={themedStyle.titleLabel}>{article.title}</Text>
          <ArticleTips style={themedStyle.tipsContainer}>
            {`${article.tips} Useful Tips`}
          </ArticleTips>
          <View style={themedStyle.reactionsContainer}>
            <ReactionButton
              style={themedStyle.reactionButton}
              icon={MessageCircleIcon}
              onPress={this.onCommentsButtonPress}>
              {article.comments}
            </ReactionButton>
            <ReactionButton
              style={themedStyle.reactionButton}
              icon={HeartIcon}
              onPress={this.onLikeButtonPress}>
              {article.likes}
            </ReactionButton>
          </View>
        </ImageOverlay>
      </TouchableOpacity>
    );
  }
}

export const ArticleList3Item = withStyles(ArticleList3ItemComponent, (theme: ThemeType) => ({
  container: {
    minHeight: 220,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tipsContainer: {
    marginTop: 16,
  },
  reactionsContainer: {
    flexDirection: 'row',
    marginTop: 48,
  },
  image: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  titleLabel: {
    maxWidth: 192,
    fontFamily: 'anton-regular',
    fontSize: 32,
  },
  reactionButton: {
    color: 'white',
  },
}));
