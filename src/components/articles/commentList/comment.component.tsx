import React from 'react';
import {
  ListRenderItemInfo,
  View,
  ViewProps,
  TouchableOpacity,
  ImageProps,
} from 'react-native';
import {
  Avatar,
  List,
  ListProps,
  TextProps,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';
import { MoreIcon } from '@src/assets/icons';
import { Comment as CommentModel } from '@src/core/model';
import { ArticleActivityBar } from '../articleActivityBar.component';

interface ComponentProps {
  comment: CommentModel;
  index?: number;
  onLikePress: (index: number | undefined) => void;
  onCommentPress: (index: number | undefined) => void;
  onProfilePress: (index: number | undefined) => void;
}

interface State {
  subCommentsVisible: boolean;
}

export type CommentProps = & ThemedComponentProps & ViewProps & ComponentProps;

class CommentComponent extends React.Component<CommentProps, State> {

  public state: State = {
    subCommentsVisible: false,
  };

  private onLikePress = (): void => {
    this.props.onLikePress(this.props.index);
  };

  private onCommentPress = (): void => {
    this.setState({ subCommentsVisible: !this.state.subCommentsVisible },
      () => this.props.onCommentPress(this.props.index));
  };

  private onProfilePress = (): void => {
    this.props.onProfilePress(this.props.index);
  };

  private renderMoreIcon = (): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return MoreIcon(themedStyle.moreIcon);
  };

  private renderCommentContent = (comment: CommentModel)
    : [React.ReactElement<ViewProps>, React.ReactElement<TextProps>] => {

    const { themedStyle } = this.props;

    return [
      <View style={themedStyle.container} key={0}>
        <View style={themedStyle.authorInfoContainer}>
          <Avatar
            style={themedStyle.avatar}
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
          <TouchableOpacity
            style={themedStyle.moreButton}
            activeOpacity={0.5}
            onPress={this.onProfilePress}>
            {this.renderMoreIcon()}
          </TouchableOpacity>
        </View>
      </View>,
      <Text style={themedStyle.comment} key={1}>
        {comment.text}
      </Text>,
    ];
  };

  private renderSubComment = (info: ListRenderItemInfo<CommentModel>): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.subCommentsContainer}>
        {this.renderCommentContent(info.item)}
      </View>
    );
  };

  private renderSubComments = (): React.ReactElement<ListProps> | null => {
    const { comment } = this.props;
    const { subCommentsVisible } = this.state;
    const isVisible: boolean = comment.comments && comment.comments.length !== 0 && subCommentsVisible;

    if (isVisible) {
      return (
        <List
          data={comment.comments}
          renderItem={this.renderSubComment}
        />
      );
    } else {
      return null;
    }
  };

  public render(): React.ReactNode {
    const { themedStyle, comment } = this.props;

    return (
      <View style={themedStyle.commentContainer}>
        {this.renderCommentContent(comment)}
        <ArticleActivityBar
          style={themedStyle.activityBar}
          comments={comment.comments ? comment.comments.length : 0}
          likes={comment.likesCount}
          onCommentPress={this.onCommentPress}
          onLikePress={this.onLikePress}
        />
        {this.renderSubComments()}
      </View>
    );
  }
}

export const Comment = withStyles(CommentComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginLeft: 16,
    marginBottom: 14,
    marginHorizontal: 16,
  },
  authorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleAuthorLabel: {
    fontSize: 13,
    color: theme['font-primary-color'],
  },
  articleDateLabel: {
    fontSize: 11,
    color: theme['color-basic-600'],
  },
  comment: {
    marginHorizontal: 24,
    fontSize: 15,
    color: theme['font-primary-color'],
  },
  moreIcon: {
    width: 18,
    height: 4,
    tintColor: theme['font-primary-color'],
  },
  moreButton: {
    width: 18,
    height: 4,
  },
  commentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme['color-basic-200'],
    paddingBottom: 16,
  },
  subCommentsContainer: {
    backgroundColor: theme['color-basic-100'],
    marginHorizontal: 24,
    borderRadius: 10,
    paddingVertical: 16,
  },
  avatar: {
    marginRight: 16,
  },
  activityBar: {
    marginLeft: 12,
  },
}));
