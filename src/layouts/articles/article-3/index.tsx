import React from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import { Input, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { KeyboardAvoidingView } from './extra/keyboard-avoiding-view.component';
import { CommentList } from './extra/comment-list.component';
import { Article } from './extra/data';

const data: Article = Article.howToEatHealthy();

const keyboardOffset = (height: number): number => Platform.select({
  android: 0,
  ios: height,
});

export default (): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const [inputComment, setInputComment] = React.useState<string>();

  const renderCommentsLabel = React.useCallback(evaProps => (
    <Text 
      {...evaProps}
      style={styles.commentInputLabel}>
      Comments
    </Text>
  ), []);

  const renderHeader = (): React.ReactElement => (
    <Layout
      style={styles.header}
      level='1'>
      <Text
        style={styles.titleLabel}
        category='h4'>
        {data.title}
      </Text>
      <Text
        style={styles.descriptionLabel}
        category='s1'>
        {data.description}
      </Text>
      <ImageBackground
        style={styles.image}
        source={data.image}
      />
      <Text style={styles.contentLabel}>
        {data.content}
      </Text>
      <View style={styles.authoringContainer}>
        <Text
          appearance='hint'
          category='p2'>
          {`By ${data.author.fullName}`}
        </Text>
        <Text
          style={styles.dateLabel}
          appearance='hint'
          category='p2'>
          {data.date}
        </Text>
      </View>
      <Input
        style={styles.commentInput}
        label={renderCommentsLabel}
        placeholder='Write your comment'
        value={inputComment}
        onChangeText={setInputComment}
      />
    </Layout>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      offset={keyboardOffset}>
      <CommentList
        style={styles.list}
        data={data.comments}
        ListHeaderComponent={renderHeader()}
      />
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
    paddingBottom: 8,
  },
  list: {
    flex: 1,
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 240,
  },
  titleLabel: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  descriptionLabel: {
    margin: 24,
  },
  contentLabel: {
    margin: 24,
  },
  authoringContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  dateLabel: {
    marginHorizontal: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: 'text-basic-color',
  },
  commentInput: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 20,
  },
});
