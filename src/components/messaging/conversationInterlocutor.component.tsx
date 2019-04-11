import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import { Profile } from '@src/core/model';
import { Avatar } from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ComponentProps {
  profile: Profile;
}

export type ConversationInterlocutorProps = & ThemedComponentProps & ViewProps & ComponentProps;

class ConversationInterlocutorComponent extends React.Component<ConversationInterlocutorProps> {

  private renderOnlineIndicator = (): React.ReactElement<ViewProps> => {
    const { themedStyle, profile } = this.props;

    return profile.onLine ? (
      <View style={themedStyle.onlineIndicator}/>
    ) : null;
  };

  public render(): React.ReactNode {
    const { themedStyle, profile, style } = this.props;

    return (
      <View style={[themedStyle.container, style]}>
        <Avatar
          source={{ uri: profile.photo }}
          style={themedStyle.avatar}/>
        {this.renderOnlineIndicator()}
      </View>
    );
  }
}

export const ConversationInterlocutor = withStyles(ConversationInterlocutorComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'flex-end',
  },
  avatar: {
    alignSelf: 'center',
  },
  onlineIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme['color-success-500'],
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 2,
    right: 2,
  },
}));
