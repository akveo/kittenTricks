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

interface ComponentProps {
  authorPhoto: ImageSourcePropType;
  authorName: string;
  date: string;
  comments: number;
  likes: number;
  onCommentPress: () => void;
  onLikePress: () => void;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

class ArticleDetailsComponent extends React.Component<Props> {

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
          <Image
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
    paddingHorizontal: 16,
    paddingVertical: 16,
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
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorNameLabel: {
    fontSize: 13,
    color: '#0D1C2E',
  },
  dateLabel: {
    color: '#8992A3',
    fontSize: 11,
  },
  reactionButton: {
    backgroundColor: 'transparent',
  },
}));
