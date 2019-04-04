import React from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Avatar } from '@kitten/ui';
import { ArticleActivityBar } from '@src/components/articles';
import { Text } from '@src/components/common';
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
      <View style={themedStyle.container}>
        <ImageBackground
          style={themedStyle.image}
          source={{ uri: article.image }}>
          <Avatar
            style={themedStyle.authorPhoto}
            size='large'
            source={{ uri: article.author.photo }}
          />
        </ImageBackground>
        <ScrollView contentContainerStyle={themedStyle.contentContainer}>
          <Text style={themedStyle.titleLabel}>
            {article.title}
          </Text>
          <Text style={themedStyle.contentLabel}>
            {article.content}
          </Text>
          <ArticleActivityBar
            style={themedStyle.detailsContainer}
            comments={article.comments}
            likes={article.likes}
            onCommentPress={this.onCommentButtonPress}
            onLikePress={this.onLikeButtonPress}>
            <View style={themedStyle.dateContainer}>
              {ClockIcon(themedStyle.dateIcon)}
              <Text style={themedStyle.dateLabel}>{article.date}</Text>
            </View>
          </ArticleActivityBar>
        </ScrollView>
      </View>
    );
  }
}

export const Article2 = withStyles(Article2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  detailsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: '#EDF0F5',
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
    borderColor: '#FFFFFF',
  },
  titleLabel: {
    marginHorizontal: 24,
    marginTop: 48,
    fontFamily: 'anton-regular',
    fontSize: 24,
    color: '#0D1C2E',
  },
  contentLabel: {
    marginHorizontal: 24,
    marginTop: 24,
    flex: 1,
    fontSize: 17,
    color: '#0D1C2E',
  },
  dateLabel: {
    fontSize: 13,
    marginLeft: 8,
    color: '#8992A3',
  },
  dateIcon: {
    width: 24,
    height: 24,
    tintColor: '#8992A3',
  },
}));
