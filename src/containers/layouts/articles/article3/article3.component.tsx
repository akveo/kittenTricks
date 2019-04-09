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
  Text,
  Comment,
  CommentProps,
} from '@src/components/common';
import { Input } from '@kitten/ui';
import {
  Article,
  Comment as CommentModel,
} from '@src/core/model';

interface ComponentProps {
  article: Article;
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

  private renderComment = (comment: CommentModel, key: number): React.ReactElement<CommentProps> => {
    return (
      <Comment
        key={key}
        comment={comment}
        onLikePress={this.onLikeButtonPress}
        onCommentPress={this.onCommentButtonPress}
        onProfilePress={this.onMoreButtonPress}/>
    );
  };

  private renderComments = (): React.ReactElement<CommentProps>[] => {
    const { article } = this.props;

    return article.comments.map(this.renderComment);
  };

  public render(): React.ReactNode {
    const { themedStyle, article, currentCommentText } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.contentContainer}>
        <Text style={themedStyle.titleLabel}>
          {article.title}
        </Text>
        <Text style={themedStyle.descriptionLabel}>
          {article.description}
        </Text>
        <ImageBackground
          style={themedStyle.image}
          source={{ uri: article.image }}>
        </ImageBackground>
        <Text style={themedStyle.contentLabel}>
          {article.content}
        </Text>
        <View style={themedStyle.articleAuthorContainer}>
          <Text style={themedStyle.articleAuthorLabel}>
            {`By ${article.author.firstName} ${article.author.lastName}`}
          </Text>
          <Text style={themedStyle.articleDateLabel}>
            {article.date}
          </Text>
        </View>
        <View style={themedStyle.inputContainer}>
          <Text style={themedStyle.inputLabel}>
            Comments
          </Text>
          <Input
            placeholder='Write your comment'
            value={currentCommentText}
            onChangeText={this.onCommentTextChange}
            onSubmitEditing={this.handleTextSubmit}
          />
        </View>
        {this.renderComments()}
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
    fontFamily: 'anton-regular',
    fontSize: 32,
    color: theme['font-primary-color'],
  },
  descriptionLabel: {
    marginHorizontal: 24,
    marginBottom: 24,
    fontSize: 15,
    color: theme['font-primary-color'],
  },
  contentLabel: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
    fontSize: 17,
    color: theme['font-primary-color'],
  },
  articleAuthorContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  articleAuthorLabel: {
    fontSize: 13,
    marginRight: 16,
    color: theme['color-basic-600'],
  },
  articleDateLabel: {
    fontSize: 13,
    color: theme['color-basic-600'],
  },
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 44,
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 17,
    color: theme['font-primary-color'],
    marginBottom: 8,
  },
}));
