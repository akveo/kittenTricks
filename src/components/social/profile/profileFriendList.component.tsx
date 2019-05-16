import React from 'react';
import {
  ImageSourcePropType,
  ListRenderItemInfo,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  ListProps,
} from '@kitten/ui';
import { Profile as ProfileModel } from '@src/core/model';
import {
  ProfileFriendListItem,
  ProfileFriendListItemProps,
} from './profileFriendListItem.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: ProfileModel[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListRenderItemInfo<ImageSourcePropType>, style: StyleType) => React.ReactElement<any>;
}

type ListItemElement = React.ReactElement<ProfileFriendListItemProps>;

export type ProfileFriendListProps = ThemedComponentProps & ComponentProps;

class ProfileFriendListComponent extends React.Component<ProfileFriendListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderListItemElement = (item: ProfileModel): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <ProfileFriendListItem
        style={themedStyle.item}
        activeOpacity={0.75}
        photo={item.photo.imageSource}
        name={item.firstName}
        onPress={this.onItemPress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<ProfileModel>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, ...restProps } = this.props;

    return (
      <List
        horizontal={true}
        {...restProps}
        contentContainerStyle={[themedStyle.container, contentContainerStyle]}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ProfileFriendList = withStyles(ProfileFriendListComponent, (theme: ThemeType) => ({
  item: {
    marginHorizontal: 12,
  },
}));
