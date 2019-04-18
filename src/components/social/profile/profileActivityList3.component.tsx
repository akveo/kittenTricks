import React from 'react';
import {
  Dimensions,
  FlexStyle,
  ImageSourcePropType,
  ListRenderItemInfo,
  ScaledSize,
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
  ProfileActivityList3Item,
  ProfileActivityList3ItemProps,
} from './profileActivityList3Item.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: ImageSourcePropType[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListRenderItemInfo<ImageSourcePropType>, style: StyleType) => React.ReactElement<any>;
}

type ListItemElement = React.ReactElement<ProfileActivityList3ItemProps>;

const dimensions: ScaledSize = Dimensions.get('window');

export type ProfileActivityList3Props = ThemedComponentProps & ComponentProps;

class ProfileActivityList3Component extends React.Component<ProfileActivityList3Props> {

  static defaultProps: Partial<ProfileActivityList3Props> = {
    numColumns: 3,
  };

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderListItemElement = (item: ImageSourcePropType): ListItemElement => {
    const { themedStyle, numColumns } = this.props;

    const size: number = dimensions.width / numColumns;
    const sizeStyle: FlexStyle = {
      width: size,
      height: size,
    };

    return (
      <ProfileActivityList3Item
        style={[themedStyle.item, sizeStyle]}
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
        {...restProps}
        contentContainerStyle={[themedStyle.container, contentContainerStyle]}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ProfileActivityList3 = withStyles(ProfileActivityList3Component, (theme: ThemeType) => ({
  container: {},
  item: {
    backgroundColor: theme['color-basic-100'],
  },
}));
