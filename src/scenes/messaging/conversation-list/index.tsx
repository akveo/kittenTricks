import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Divider, Input, Layout, List, StyleService, TopNavigation, TopNavigationAction, useStyleSheet } from '@ui-kitten/components';
import { MessageItem } from './extra/message-item.component';
import { ArrowIosBackIcon, SearchIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Message } from './extra/data';

const initialMessages: Message[] = [
  Message.howAreYou(),
  Message.canYouSend(),
  Message.noProblem(),
];

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const styles = useStyleSheet(themedStyles);
  const [searchQuery, setSearchQuery] = React.useState<string>();

  const onItemPress = (index: number): void => {
    navigation && navigation.navigate('Chat1');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
  );

  const renderItem = (info: ListRenderItemInfo<Message>): React.ReactElement => (
    <MessageItem
      style={styles.item}
      message={info.item}
      onPress={onItemPress}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <Input
      style={styles.searchInput}
      placeholder='Search'
      value={searchQuery}
      icon={SearchIcon}
    />
  );

  return (
    <Layout
      style={[styles.container, { paddingTop: safeArea.top }]}
      level='2'>
      <TopNavigation
        alignment='center'
        title='Messages'
        leftControl={renderBackAction()}
      />
      <Divider/>
      <List
        style={styles.list}
        data={initialMessages}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  searchInput: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  list: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3',
  },
});
