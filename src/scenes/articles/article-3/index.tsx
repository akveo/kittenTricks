import React from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import { Divider, Input, Layout, Text, TopNavigation, TopNavigationAction, useStyleSheet } from '@ui-kitten/components';
import { KeyboardAvoidingView } from './extra/keyboard-avoiding-view.component';
import { CommentList } from './extra/comment-list.component';
import { ArrowIosBackIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Article } from './extra/data';

const data: Article = Article.howToEatHealthy();

const keyboardOffset = (height: number): number => Platform.select({
  android: 0,
  ios: height,
});

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const styles = StyleSheet.create();

  const [inputComment, setInputComment] = React.useState<string>();

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <Layout style={styles.header}>
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
        labelStyle={styles.commentInputLabel}
        label='Comments'
        placeholder='Write your comment'
        value={inputComment}
        onChangeText={setInputComment}
      />
    </Layout>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: safeArea.top }]}
      offset={keyboardOffset}>
      <TopNavigation
        title='Blog'
        alignment='center'
        leftControl={renderBackAction()}
      />
      <Divider/>
      <CommentList
        style={styles.list}
        data={data.comments}
        ListHeaderComponent={renderHeader}
      />
    </KeyboardAvoidingView>
  );
};

const StyleSheet = useStyleSheet({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
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
