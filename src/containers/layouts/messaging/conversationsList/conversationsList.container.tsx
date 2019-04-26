import React from 'react';
import {
  NavigationScreenProps,
  NavigationScreenConfig,
} from 'react-navigation';
import { Conversation } from '@src/core/model';
import {
  conversation1,
  conversation2,
  conversation3,
  conversation4,
  conversation7,
  conversation8,
  conversation9,
  conversation10,
  conversation11,
  conversation12,
} from '@src/core/data/conversation';
import { ConversationsList } from './conversationsList.component';
import { TopNavigationElement } from '@src/core/navigation/navigationParams';
import { ConversationListHeader } from './conversationList.header';

interface ConversationsListNavigationStateParams {
  onBack: () => void;
  onSearchPress: () => void;
}

interface State {
  searchEnabled: boolean;
  conversations: Conversation[];
}

const conversations: Conversation[] = [
  conversation1,
  conversation2,
  conversation3,
  conversation4,
  conversation7,
  conversation8,
  conversation9,
  conversation10,
  conversation11,
  conversation12,
];

export class ConversationsListContainer extends React.Component<NavigationScreenProps, State> {

  static navigationOptions: NavigationScreenConfig<any> = ({ navigation, screenProps }) => {
    const conversationHeaderConfig: ConversationsListNavigationStateParams = {
      onBack: navigation.getParam('onBack'),
      onSearchPress: navigation.getParam('onSearchPress'),
    };

    const renderHeader = (headerProps: NavigationScreenProps,
                          config: ConversationsListNavigationStateParams) => {

      return (
        <ConversationListHeader
          {...headerProps}
          onSearchPress={config.onSearchPress}
          onBack={config.onBack}
        />
      );
    };

    navigation.state.params = {
      topNavigation: (headerProps: NavigationScreenProps): TopNavigationElement => {
        return renderHeader(headerProps, conversationHeaderConfig);
      },
    };

    return { ...navigation, ...screenProps };
  };

  public componentWillMount(): void {
    this.props.navigation.setParams({
      onSearchPress: this.onSearchPress,
      onBack: this.onBackPress,
    });
  }

  public state: State = {
    conversations: conversations,
    searchEnabled: false,
  };

  private onBackPress = (): void => {
    this.props.navigation.goBack(null);
  };

  private onSearchPress = (): void => {
    this.setState({ searchEnabled: !this.state.searchEnabled });
  };

  private onConversationPress = (index: number) => {
    this.props.navigation.navigate('Chat 1');
  };

  private onSearchStringChange = (searchString: string): void => {
    if (searchString && searchString.length) {
      const query: string = searchString.toUpperCase();
      const items: Conversation[] = conversations
        .filter((item: Conversation) => {
          const name: string = `${item.interlocutor.firstName} ${item.interlocutor.lastName}`.toUpperCase();
          return name.includes(query);
        });
      this.setState({ conversations: items });
    } else {
      this.setState({ conversations });
    }
  };

  public render(): React.ReactNode {
    return (
      <ConversationsList
        searchEnabled={this.state.searchEnabled}
        conversations={this.state.conversations}
        onSearchStringChange={this.onSearchStringChange}
        onConversation={this.onConversationPress}
      />
    );
  }
}
