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
import { Post } from '@src/core/model';
import {
  ProfileActivityList1Item,
  ProfileActivityList1ItemProps,
} from './profileActivityList1Item.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: Post[];
  onItemPress: (index: number) => void;
  onItemLikePress: (index: number) => void;
  renderItem?: (info: ListRenderItemInfo<ImageSourcePropType>, style: StyleType) => React.ReactElement<any>;
}

type ListItemElement = React.ReactElement<ProfileActivityList1ItemProps>;

export type ProfileActivityList1Props = ThemedComponentProps & ComponentProps;

class ProfileActivityList1Component extends React.Component<ProfileActivityList1Props> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private onItemLikePressPress = (index: number) => {
     this.props.onItemPress(index);
  };

  private renderListItemElement = (item: Post): ListItemElement => {
    const { themedStyle } = this.props;
    const { photo, author, date, likes } = item;

    return (
      <ProfileActivityList1Item
        style={themedStyle.item}
        photo={photo.imageSource}
        profilePhoto={author.photo.imageSource}
        authorName={`${author.firstName} ${author.lastName}`}
        date={date}
        likes={likes}
        onPress={this.onItemPress}
        onLikePress={this.onItemLikePressPress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<Post>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  public render(): React.ReactNode {
    return (
      <List
        {...this.props}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ProfileActivityList1 = withStyles(ProfileActivityList1Component, (theme: ThemeType) => ({
  item: {
    marginVertical: 8,
    backgroundColor: theme['background-basic-color-1'],
  },
}));
