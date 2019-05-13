import React from 'react';
import {
  SafeAreaView,
  NavigationScreenProps,
} from 'react-navigation';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TopNavigationActionProps,
  TopNavigationAction,
  TopNavigation,
} from '@kitten/ui';
import {
  BackArrowIcon,
  SearchIconOutline,
} from '@src/assets/icons';

interface ComponentProps {
  onBack: () => void;
  onSearchPress: () => void;
}

export type ConversationListHeaderProps = ThemedComponentProps & ComponentProps & NavigationScreenProps;

class ConversationListHeaderComponent extends React.Component<ConversationListHeaderProps> {

  private onSearchPress = (): void => {
    this.props.onSearchPress();
  };

  private onBack = (): void => {
    this.props.onBack();
  };

  private renderLeftControl = (): React.ReactElement<TopNavigationActionProps> => {
    return (
      <TopNavigationAction
        icon={BackArrowIcon}
        onPress={this.onBack}
      />
    );
  };

  private renderRightControls = (): React.ReactElement<TopNavigationActionProps>[] => {
    return ([
      <TopNavigationAction
        icon={SearchIconOutline}
        onPress={this.onSearchPress}
      />,
    ]);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <SafeAreaView style={themedStyle.container}>
        <TopNavigation
          alignment='center'
          title='Conversations List'
          leftControl={this.renderLeftControl()}
          rightControls={this.renderRightControls()}
        />
      </SafeAreaView>
    );
  }
}

export const ConversationListHeader = withStyles(ConversationListHeaderComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-white'],
  },
}));

