import React from 'react';
import {
  View,
  ListRenderItemInfo,
  ActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  List,
  ListProps,
  ListItem,
  ListItemProps,
  Avatar,
  AvatarProps,
  Button,
  ButtonProps,
} from '@kitten/ui';
import { Follower } from './followers.container';

interface FollowersComponentProps {
  loading: boolean;
  followers: Follower[];
}

type Props = & FollowersComponentProps & ThemedComponentProps;

class Followers extends React.Component<Props> {

  private renderAccessory = (): React.ReactElement<ButtonProps> => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.button}
        size='medium'
        status='primary'
        alignment='right'>
        BUTTON
      </Button>
    );
  };

  private renderAvatar = (source: string): React.ReactElement<AvatarProps> => {
    return (
      <Avatar
        size='large'
        shape='rounded'
        source={{ uri: source }}
      />
    );
  };

  private renderFollower = (follower: ListRenderItemInfo<Follower>): React.ReactElement<ListItemProps> => {
    const { item } = follower;

    const avatar = (): React.ReactElement<AvatarProps> => {
      return this.renderAvatar(item.picture.large);
    };

    const button = (): React.ReactElement<ButtonProps> => {
      return this.renderAccessory();
    };

    return (
      <ListItem
        title={`${item.name.first} ${item.name.last}`}
        description={`${item.location.city}, ${item.location.state}`}
        icon={avatar}
        accessory={button}
        onPress={() => 1}
      />
    );
  };

  private renderFollowers = (): React.ReactElement<ListProps> => {
    return (
      <List
        data={this.props.followers}
        renderItem={this.renderFollower}
      />
    );
  };

  private renderLoading = (): React.ReactElement<ActivityIndicatorProps> => {
    const { themedStyle } = this.props;

    return (
      <ActivityIndicator
        size='large'
        color={themedStyle.loader.color}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, loading } = this.props;

    return (
      <View style={themedStyle.container}>
        {loading ? this.renderLoading() : this.renderFollowers()}
      </View>
    );
  }
}

export const FollowersComponent = withStyles(Followers, (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    color: theme['blue-primary'],
  },
}));
