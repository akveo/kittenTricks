import React from 'react';
import {
  Image,
  ImageSourcePropType,
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
  LikeButton,
  CommentsButton,
} from '@src/components/common';
import { Avatar } from '@kitten/ui';

interface ComponentProps {
  authorPhoto: ImageSourcePropType;
  authorName: string;
  date: string;
  comments: number;
  likes: number;
  onCommentPress: () => void;
  onLikePress: () => void;
}

export type ArticleDetailsProps = ThemedComponentProps & ViewProps & ComponentProps;

class ArticleDetailsComponent extends React.Component<ArticleDetailsProps> {

  private onCommentsButtonPress = () => {
    this.props.onCommentPress();
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress();
  };

  public render(): React.ReactNode {
    const { style, themedStyle, authorPhoto, authorName, date, comments, likes, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.detailsContainer, style]}
        {...restProps}>
        <View style={themedStyle.authorContainer}>
          <Avatar
            style={themedStyle.authorPhoto}
            source={authorPhoto}
          />
          <View style={themedStyle.authorInfoContainer}>
            <Text style={themedStyle.authorNameLabel}>{authorName}</Text>
            <Text style={themedStyle.dateLabel}>{date}</Text>
          </View>
        </View>
        <View style={themedStyle.reactionsContainer}>
          <CommentsButton onPress={this.onCommentsButtonPress}>
            {comments}
          </CommentsButton>
          <LikeButton onPress={this.onLikeButtonPress}>
            {likes}
          </LikeButton>
        </View>
      </View>
    );
  }
}

export const ArticleDetails = withStyles(ArticleDetailsComponent, (theme: ThemeType) => ({
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorInfoContainer: {
    marginLeft: 16,
  },
  reactionsContainer: {
    flexDirection: 'row',
  },
  authorPhoto: {
    margin: 0,
  },
  authorNameLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: '#0D1C2E',
  },
  dateLabel: {
    color: '#8992A3',
    fontSize: 13,
  },
  reactionButton: {
    backgroundColor: 'transparent',
  },
}));
