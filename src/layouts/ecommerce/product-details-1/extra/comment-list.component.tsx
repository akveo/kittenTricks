import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  CardHeaderElement,
  List,
  ListProps,
  Text,
} from '@ui-kitten/components';
import { Comment } from './data';
import { HeartIcon, MessageCircleIcon, MoreHorizontalIcon } from './icons';

export type CommentListProps = Omit<ListProps, 'renderItem'>;

export const CommentList = (props: CommentListProps): React.ReactElement => {

  const renderCommentHeader = (comment: Comment): CardHeaderElement => (
    <View style={styles.commentHeader}>
      <Avatar source={comment.author.photo}/>
      <View style={styles.commentAuthorContainer}>
        <Text category='s2'>{comment.author.fullName}</Text>
        <Text appearance='hint' category='c1'>{comment.date}</Text>
      </View>
      <Button
        style={styles.iconButton}
        appearance='ghost'
        status='basic'
        icon={MoreHorizontalIcon}
      />
    </View>
  );

  const renderItem = (info: ListRenderItemInfo<Comment>): React.ReactElement => (
    <Card
      style={styles.commentItem}
      header={() => renderCommentHeader(info.item)}>
      <Text>{info.item.text}</Text>
      <View style={styles.commentReactionsContainer}>
        <Button
          style={styles.iconButton}
          appearance='ghost'
          status='basic'
          icon={MessageCircleIcon}>
          {`${info.item.comments.length}`}
        </Button>
        <Button
          style={styles.iconButton}
          appearance='ghost'
          status='danger'
          icon={HeartIcon}>
          {`${info.item.likes.length}`}
        </Button>
      </View>
    </Card>
  );

  return (
    <List
      {...props}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  commentItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  commentHeader: {
    flexDirection: 'row',
    padding: 16,
  },
  commentAuthorContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  commentReactionsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: -8,
    marginVertical: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
