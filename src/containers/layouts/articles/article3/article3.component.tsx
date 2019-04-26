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
import {
  Input,
  Text,
} from '@kitten/ui';
import { CommentsList } from '@src/components/articles';
import { textStyle } from '@src/components/common';
import {
  Article,
  Comment,
} from '@src/core/model';

interface ComponentProps {
  article: Article;
  comments: Comment[];
  currentCommentText: string;
  onCommentSubmit: () => void;
  onCommentTextChange: (text: string) => void;
  onCommentItemPress: (index: number) => void;
  onCommentPress: (index: number) => void;
  onLikePress: (index: number) => void;
}

export type Article3Props = ThemedComponentProps & ComponentProps;

class Article3Component extends React.Component<Article3Props> {

  private onCommentButtonPress = (index: number) => {
    this.props.onCommentPress(index);
  };

  private onLikeButtonPress = (index: number) => {
    this.props.onLikePress(index);
  };

  private onMoreButtonPress = (index: number) => {
    this.props.onCommentItemPress(index);
  };

  private onCommentTextChange = (text: string): void => {
    this.props.onCommentTextChange(text);
  };

  private handleTextSubmit = () => {
    this.props.onCommentSubmit();
  };

  public render(): React.ReactNode {
    const { themedStyle, article, comments, currentCommentText } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.contentContainer}>
        <Text
          style={themedStyle.titleLabel}
          category='h4'>
          {article.title}
        </Text>
        <Text
          style={themedStyle.descriptionLabel}
          category='s1'>
          {article.description}
        </Text>
        <ImageBackground
          style={themedStyle.image}
          source={{ uri: article.image }}>
        </ImageBackground>
        <Text
          style={themedStyle.contentLabel}
          category='s1'>
          {article.content}
        </Text>
        <View style={themedStyle.articleAuthorContainer}>
          <Text
            style={themedStyle.articleAuthorLabel}
            appearance='hintDark'
            category='p2'>
            {`By ${article.author.firstName} ${article.author.lastName}`}
          </Text>
          <Text
            style={themedStyle.articleDateLabel}
            appearance='hintDark'
            category='p2'>
            {article.date}
          </Text>
        </View>
        <View style={themedStyle.inputContainer}>
          <Text
            style={[themedStyle.inputLabel, themedStyle.inputSpace]}
            category='s1'>
            Comments
          </Text>
          <Input
            style={themedStyle.inputSpace}
            placeholder='Write your comment'
            value={currentCommentText}
            onChangeText={this.onCommentTextChange}
            onSubmitEditing={this.handleTextSubmit}
          />
        </View>
        <CommentsList
          data={comments}
          onMorePress={this.onMoreButtonPress}
          onLikePress={this.onLikeButtonPress}
          onCommentPress={this.onCommentButtonPress}
        />
      </ScrollView>
    );
  }
}

export const Article3 = withStyles(Article3Component, (theme: ThemeType) => ({
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  image: {
    minHeight: 240,
  },
  authorPhoto: {
    position: 'absolute',
    left: 24,
    bottom: -32,
    margin: 0,
    borderWidth: 2,
    borderColor: theme['color-white'],
  },
  titleLabel: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
    ...textStyle.headline,
  },
  descriptionLabel: {
    marginHorizontal: 24,
    marginVertical: 24,
    ...textStyle.subtitle,
  },
  contentLabel: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
    ...textStyle.paragraph,
  },
  articleAuthorContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  articleAuthorLabel: textStyle.paragraph,
  articleDateLabel: textStyle.paragraph,
  inputSpace: {
    marginHorizontal: 24,
  },
  inputContainer: {
    marginTop: 44,
    marginBottom: 24,
  },
  inputLabel: {
    marginBottom: 8,
    ...textStyle.subtitle,
  },
}));
