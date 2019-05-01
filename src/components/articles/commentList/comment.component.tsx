import React from 'react';
import {
  ListRenderItemInfo,
  View,
  ViewProps,
  TouchableOpacity,
  ImageProps,
} from 'react-native';
import {
  List,
  ListProps,
  Text,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ActivityAuthoring,
  textStyle,
} from '@src/components/common';
import { MoreIcon } from '@src/assets/icons';
import { Comment as CommentModel } from '@src/core/model';
import { ArticleActivityBar } from '../articleActivityBar.component';

interface ListDerivedProps {
  index?: number;
}

interface ComponentProps extends ListDerivedProps, ViewProps {
  comment: CommentModel;
  onLikePress: (index: number | undefined) => void;
  onCommentPress: (index: number | undefined) => void;
  onProfilePress: (index: number | undefined) => void;
}

interface State {
  subCommentsVisible: boolean;
}

export type CommentProps = & ThemedComponentProps & ComponentProps;

type SubcommentsElement = React.ReactElement<ListProps>;

class CommentComponent extends React.Component<CommentProps, State> {

  public state: State = {
    subCommentsVisible: false,
  };

  private onLikePress = (): void => {
    this.props.onLikePress(this.props.index);
  };

  private onCommentPress = (): void => {
    this.setState(
      { subCommentsVisible: !this.state.subCommentsVisible },
      () => this.props.onCommentPress(this.props.index),
    );
  };

  private onProfilePress = (): void => {
    this.props.onProfilePress(this.props.index);
  };


  private shouldRenderSubcomments = (): boolean => {
    const { comment } = this.props;

    return comment.comments && comment.comments.length !== 0 && this.state.subCommentsVisible;
  };

  private renderMoreIcon = (): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return MoreIcon(themedStyle.moreIcon);
  };

  private renderSubComment = (info: ListRenderItemInfo<CommentModel>): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;
    const { item } = info;

    return (
      <View style={themedStyle.subCommentsContainer}>
        <View style={themedStyle.container}>
          <ActivityAuthoring
            photo={{ uri: item.author.photo }}
            name={`${item.author.firstName} ${item.author.lastName}`}
            date={item.date}
          />
          <View>
            <TouchableOpacity
              style={themedStyle.moreButton}
              activeOpacity={0.5}
              onPress={this.onProfilePress}>
              {this.renderMoreIcon()}
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={themedStyle.comment}
          category='s1'>
          {item.text}
        </Text>
      </View>
    );
  };

  private renderSubComments = (): React.ReactElement<ListProps> | null => {
    const { themedStyle, comment } = this.props;

    return (
      <List
        style={themedStyle.subCommentList}
        data={comment.comments}
        renderItem={this.renderSubComment}
      />
    );
  };

  public render(): React.ReactNode {
    const { style, themedStyle, comment } = this.props;

    const subcommentsElement: SubcommentsElement | null = this.shouldRenderSubcomments() && this.renderSubComments();

    return (
      <View style={[themedStyle.commentContainer, style]}>
        <View style={themedStyle.container}>
          <ActivityAuthoring
            photo={{ uri: comment.author.photo }}
            name={`${comment.author.firstName} ${comment.author.lastName}`}
            date={comment.date}
          />
          <TouchableOpacity
            style={themedStyle.moreButton}
            activeOpacity={0.75}
            onPress={this.onProfilePress}>
            {this.renderMoreIcon()}
          </TouchableOpacity>
        </View>
        <Text
          style={themedStyle.comment}
          category='s1'>
          {comment.text}
        </Text>
        <ArticleActivityBar
          style={themedStyle.activityBar}
          comments={comment.comments ? comment.comments.length : 0}
          likes={comment.likesCount}
          onCommentPress={this.onCommentPress}
          onLikePress={this.onLikePress}
        />
        {subcommentsElement}
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
  comment: {
    marginTop: 14,
    ...textStyle.paragraph,
  },
  moreIcon: {
    width: 18,
    height: 4,
    tintColor: theme['color-basic-700'],
  },
  moreButton: {
    width: 18,
    height: 18,
  },
  commentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  subCommentList: {
    marginTop: 24,
  },
  subCommentsContainer: {
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: theme['color-basic-100'],
  },
  activityBar: {
    marginTop: 24,
  },
}));
