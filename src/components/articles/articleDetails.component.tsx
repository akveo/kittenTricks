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
import { Text } from '@src/components/common';
import {
  HeartIcon,
  MessageCircleIcon,
} from '@src/assets/icons';
import { ReactionButton } from './reactionButton.component';

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
          <ReactionButton
            iconStyle={themedStyle.commentsIcon}
            icon={MessageCircleIcon}
            onPress={this.onCommentsButtonPress}>
            {comments}
          </ReactionButton>
          <ReactionButton
            iconStyle={themedStyle.likeIcon}
            icon={HeartIcon}
            onPress={this.onLikeButtonPress}>
            {likes}
          </ReactionButton>
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
  reactionIcon: {
    width: 20,
    height: 20,
  },
  commentsIcon: {
    tintColor: '#A6AEBD',
  },
  likeIcon: {
    tintColor: '#FF3D71',
  },
}));
