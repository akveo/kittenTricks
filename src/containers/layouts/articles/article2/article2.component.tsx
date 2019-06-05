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
  Avatar,
  Text,
} from '@kitten/ui';
import { ArticleActivityBar } from '@src/components/articles';
import {
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import { ClockIcon } from '@src/assets/icons';
import { Article } from '@src/core/model';

interface ComponentProps {
  article: Article;
  onCommentPress: () => void;
  onLikePress: () => void;
}

export type Article2Props = ThemedComponentProps & ComponentProps;

class Article2Component extends React.Component<Article2Props> {

  private onCommentButtonPress = () => {
    this.props.onCommentPress();
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress();
  };

  public render(): React.ReactNode {
    const { themedStyle, article } = this.props;

    return (
      <ScrollView style={themedStyle.container}>
        <ImageOverlay
          style={themedStyle.image}
          source={article.image.imageSource}>
          <Avatar
            style={themedStyle.authorPhoto}
            size='large'
            source={article.author.photo.imageSource}
          />
        </ImageOverlay>
          <Text
            style={themedStyle.titleLabel}
            category='h5'>
            {article.title}
          </Text>
          <Text
            style={themedStyle.contentLabel}
            category='s1'>
            {article.content}
          </Text>
          <ArticleActivityBar
            style={themedStyle.detailsContainer}
            comments={article.comments ? article.comments.length : 0}
            likes={article.likes}
            onCommentPress={this.onCommentButtonPress}
            onLikePress={this.onLikeButtonPress}>
            <View style={themedStyle.dateContainer}>
              {ClockIcon(themedStyle.dateIcon)}
              <Text
                style={themedStyle.dateLabel}
                appearance='hint'
                category='p2'>
                {article.date}
              </Text>
            </View>
          </ArticleActivityBar>
      </ScrollView>
    );
  }
}

export const Article2 = withStyles(Article2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  detailsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: theme['border-basic-color-2'],
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    minHeight: 175,
  },
  authorPhoto: {
    position: 'absolute',
    left: 24,
    bottom: -32,
    margin: 0,
    borderWidth: 2,
    borderColor: theme['border-basic-color-2'],
  },
  titleLabel: {
    marginHorizontal: 24,
    marginTop: 48,
    ...textStyle.headline,
  },
  contentLabel: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 24,
    ...textStyle.paragraph,
  },
  dateLabel: {
    marginLeft: 8,
    ...textStyle.paragraph,
  },
  dateIcon: {
    width: 24,
    height: 24,
    tintColor: theme['text-hint-color'],
  },
}));
