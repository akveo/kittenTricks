import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  ApartmentFacilityList1Item,
  ApartmentFacilityList1ItemProps,
} from './apartmentFacilityList1Item.component';
import { ApartmentFacility } from '@src/core/model';

interface ComponentProps {
  data: ApartmentFacility[];
  onItemPress: (index: number) => void;
}

export type ApartmentFacilityList1Props = ThemedComponentProps & ViewProps & ComponentProps;

type ListItemElement = React.ReactElement<ApartmentFacilityList1ItemProps>;

class ApartmentFacilityList1Component extends React.Component<ApartmentFacilityList1Props> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderListItemElement = (item: ApartmentFacility): ListItemElement => {
    return (
      <ApartmentFacilityList1Item
        style={this.props.themedStyle.item}
        onPress={this.onItemPress}>
        {item.title}
      </ApartmentFacilityList1Item>
    );
  };

  private renderItem = (item: ApartmentFacility, index: number): ListItemElement => {
    const listItemElement: ListItemElement = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { index, key: index });
  };

  private renderComponentChildren = (): React.ReactNode => {
    return this.props.data.map(this.renderItem);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;
    const componentChildren: React.ReactNode = this.renderComponentChildren();

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        {componentChildren}
      </View>
    );
  }
}

export const ApartmentFacilityList1 = withStyles(ApartmentFacilityList1Component, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    marginVertical: 2,
    marginRight: 8,
  },
}));
