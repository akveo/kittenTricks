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
import {
  ProfileActivityList1Item,
  ProfileActivityList1ItemProps,
} from './profileActivityList1Item.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: ImageSourcePropType[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListRenderItemInfo<ImageSourcePropType>, style: StyleType) => React.ReactElement<any>;
}

type ListItemElement = React.ReactElement<ProfileActivityList1ItemProps>;

export type ProfileActivityList1Props = ThemedComponentProps & ComponentProps;

class ProfileActivityList1Component extends React.Component<ProfileActivityList1Props> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderListItemElement = (item: ImageSourcePropType): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <ProfileActivityList1Item
        style={themedStyle.item}
        activeOpacity={0.75}
        source={item}
        onPress={this.onItemPress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<ImageSourcePropType>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, ...restProps } = this.props;

    return (
      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        {...restProps}
        contentContainerStyle={[themedStyle.container, contentContainerStyle]}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ProfileActivityList1 = withStyles(ProfileActivityList1Component, (theme: ThemeType) => ({
  container: {},
  item: {
    width: 120,
    height: 120,
    marginHorizontal: 8,
    backgroundColor: theme['color-basic-200'],
  },
}));
