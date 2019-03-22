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
  StyleType,
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

  private renderAvatar = (source: string): React.ReactElement<AvatarProps> => {
    return (
      <Avatar
        size='large'
        shape='rounded'
        source={{ uri: source }}
      />
    );
  };

  private renderAccessory = (): React.ReactElement<ButtonProps> => {
    return (
      <Button
        style={this.props.themedStyle.button}
        size='medium'
        status='primary'
        alignment='right'
        onPress={() => 1}>
        Test
      </Button>
    );
  };

  private renderFollower = (follower: ListRenderItemInfo<Follower>): React.ReactElement<ListItemProps> => {
    const { item, index } = follower;
    const avatar = (i: number, style: StyleType): React.ReactElement<AvatarProps> =>
      this.renderAvatar(item.picture.large);
    const accessory = (i: number, style: StyleType): React.ReactElement<ButtonProps> =>
      this.renderAccessory();

    return (
      <ListItem
        title={`${item.name.first} ${item.name.last}`}
        description={`${item.location.city}, ${item.location.state}`}
        icon={avatar}
        accessory={accessory}
        onPress={() => 1}>
      </ListItem>
    );
  };

  private renderFollowers = (): React.ReactElement<ListProps> => {
    return (
      <List
        data={this.props.followers}
        renderItem={this.renderFollower}/>
    );
  };

  private renderLoading = (): React.ReactElement<ActivityIndicatorProps> => {
    return (
      <ActivityIndicator size='large' color={this.props.themedStyle.loader.color}/>
    );
  };

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        {this.props.loading ? this.renderLoading() : this.renderFollowers()}
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
