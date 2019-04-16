import React from 'react';
import {
  ImageSourcePropType,
  ListRenderItemInfo,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  List,
  ListProps,
} from '@kitten/ui';
import {
  ApartmentPhotoListItem,
  ApartmentPhotoListItemProps,
} from '@src/components/ecommerce/apartmentPhotoListItem.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  renderItem?: () => void;
  onItemPress: (index: number) => void;
  data: ImageSourcePropType[];
}

export type ApartmentPhotoListProps = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<ApartmentPhotoListItemProps>;

class ApartmentPhotoListComponent extends React.Component<ApartmentPhotoListProps> {

  private onItemPress = (index: number): void => {
    this.props.onItemPress(index);
  };

  private renderListItemElement = (item: ImageSourcePropType): ListItemElement => {
    return (
      <ApartmentPhotoListItem
        style={this.props.themedStyle.item}
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
        showsHorizontalScrollIndicator={false}
        {...restProps}
        contentContainerStyle={[themedStyle.container, contentContainerStyle]}
        horizontal={true}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ApartmentPhotoList = withStyles(ApartmentPhotoListComponent, (theme: ThemeType) => ({
  container: {},
  item: {
    width: 180,
    height: 120,
    marginHorizontal: 8,
    backgroundColor: theme['color-basic-200'],
  },
}));
