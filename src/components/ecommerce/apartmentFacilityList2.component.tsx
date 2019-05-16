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
import { ApartmentFacility } from '@src/core/model';
import {
  ApartmentFacilityList2Item,
  ApartmentFacilityList2ItemProps,
} from './apartmentFacilityList2Item.component';

interface ComponentProps {
  data: ApartmentFacility[];
}

export type ApartmentFacilityList2Props = ThemedComponentProps & ViewProps & ComponentProps;

type ListItemElement = React.ReactElement<ApartmentFacilityList2ItemProps>;

class ApartmentFacilityList2Component extends React.Component<ApartmentFacilityList2Props> {

  private renderListItemElement = (item: ApartmentFacility): ListItemElement => {
    return (
      <ApartmentFacilityList2Item
        style={this.props.themedStyle.item}
        icon={item.icon.imageSource}>
        {item.title}
      </ApartmentFacilityList2Item>
    );
  };

  private renderItem = (item: ApartmentFacility, index: number): ListItemElement => {
    const listItemElement: ListItemElement = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { key: index });
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

export const ApartmentFacilityList2 = withStyles(ApartmentFacilityList2Component, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    marginVertical: 2,
    marginRight: 8,
  },
}));
