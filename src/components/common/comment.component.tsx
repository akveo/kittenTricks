import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import { Comment as CommentModel } from '@src/core/model';
import {
  Avatar,
  Button,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { MoreIcon } from '@src/assets/icons';
import { ArticleActivityBar } from '@src/components/articles';
import { Text } from '@src/components/common';

interface ComponentProps {
  comment: CommentModel;
  onLikePress: () => void;
  onCommentPress: () => void;
  onProfilePress: () => void;
}

export type CommentProps = & ThemedComponentProps & ViewProps & ComponentProps;

class CommentComponent extends React.Component<CommentProps> {

  private onLikePress = (): void => {
    this.props.onLikePress();
  };

  private onCommentPress = (): void => {
    this.props.onCommentPress();
  };

  private onProfilePress = (): void => {
    this.props.onProfilePress();
  };

  public render(): React.ReactNode {
    const { themedStyle, comment } = this.props;

    return (
      <View>
        <View style={themedStyle.container}>
          <View style={themedStyle.authorInfoContainer}>
            <Avatar
              size='medium'
              source={{ uri: comment.author.photo }}
            />
            <View>
              <Text style={themedStyle.articleAuthorLabel}>
                {`${comment.author.firstName} ${comment.author.lastName}`}
              </Text>
              <Text style={themedStyle.articleDateLabel}>
                {comment.date}
              </Text>
            </View>
          </View>
          <View>
            <Button
              appearance='ghost'
              icon={() => MoreIcon(themedStyle.moreIcon)}
              activeOpacity={0.5}
              onPress={this.onProfilePress}/>
          </View>
        </View>
        <Text style={themedStyle.comment}>
          {comment.text}
        </Text>
        <ArticleActivityBar
          comments={comment.comments ? comment.comments.length : 0}
          likes={comment.likesCount}
          onCommentPress={this.onCommentPress}
          onLikePress={this.onLikePress}/>
      </View>
    );
  }
}

export const Comment = withStyles(CommentComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleAuthorLabel: {
    fontSize: 13,
    color: '#0D1C2E',
  },
  articleDateLabel: {
    fontSize: 11,
    color: '#8992A3',
  },
  comment: {
    marginHorizontal: 24,
    fontSize: 15,
    color: '#0D1C2E',
  },
  moreIcon: {
    width: 18,
    height: 4,
    tintColor: '#0D1C2E',
  },
}));
