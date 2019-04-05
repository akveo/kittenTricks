import React from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  ViewProps,
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
import { Article } from '@src/core/model';

interface ComponentProps {
  article: Article;
  comments: string[];
  comment: string;
  onCommentSubmit: () => void;
  onCommentTextChange: (text: string) => void;
  onCommentPress: () => void;
  onLikePress: () => void;
}

export type Article3Props = ThemedComponentProps & ComponentProps;

class Article3Component extends React.Component<Article3Props> {

  private onCommentButtonPress = () => {
    this.props.onCommentPress();
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress();
  };

  private onCommentTextChange = (text: string): void => {
    this.props.onCommentTextChange(text);
  };

  private handleTextSubmit = () => {
    this.props.onCommentSubmit();
  };

  private renderComment = (comment: string, key: number): React.ReactElement<CommentProps> => {
    const { article } = this.props;

    return (
      <Comment
        key={key}
        author={article.author}
        comment={comment}
        date={article.date}
        commentsCount={45}
        likes={22}
        onLikePress={() => {
        }}
        onCommentPress={() => {
        }}
        onProfilePress={() => {
        }}/>
    );
  };

  private renderComments = (): React.ReactElement<ViewProps> => {
    const { comments, themedStyle } = this.props;

    return (
      <View>
        {comments.map(this.renderComment)}
      </View>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, article, comment } = this.props;

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
            value={comment}
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
    borderColor: '#FFFFFF',
  },
  titleLabel: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
    fontFamily: 'anton-regular',
    fontSize: 32,
    color: '#0D1C2E',
  },
  descriptionLabel: {
    marginHorizontal: 24,
    marginBottom: 24,
    fontSize: 15,
    color: '#0D1C2E',
  },
  contentLabel: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
    fontSize: 17,
    color: '#0D1C2E',
  },
  articleAuthorContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  articleAuthorLabel: {
    fontSize: 13,
    marginRight: 16,
    color: '#8992A3',
  },
  articleDateLabel: {
    fontSize: 13,
    color: '#8992A3',
  },
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 44,
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 17,
    color: '#0D1C2E',
    marginBottom: 8,
  },
}));
