import React from 'react';
import {
  ListRenderItemInfo,
  View,
  ViewProps,
} from 'react-native';
import { Comment as CommentModel } from '@src/core/model';
import {
  Avatar,
  Button,
  List,
  ListProps,
  TextProps,
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

  private renderCommentContent = (comment: CommentModel)
    : [React.ReactElement<ViewProps>, React.ReactElement<TextProps>] => {

    const { themedStyle } = this.props;

    return [
      <View style={themedStyle.container} key={0}>
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

  private renderComments = (): React.ReactElement<ListProps> | null => {
    const { comment } = this.props;
    const { subCommentsVisible } = this.state;

    if (comment.comments && comment.comments.length !== 0 && subCommentsVisible) {
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
          comments={comment.comments ? comment.comments.length : 0}
          likes={comment.likesCount}
          onCommentPress={this.onCommentPress}
          onLikePress={this.onLikePress}/>
        {this.renderComments()}
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
  commentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDF0F5',
    paddingBottom: 16,
  },
  subCommentsContainer: {
    backgroundColor: '#F7F8FA',
    marginHorizontal: 24,
    borderRadius: 10,
    paddingBottom: 16,
  },
}));
