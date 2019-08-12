import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface ComponentProps extends ListDerivedProps, ButtonProps {
  onPress: (index: number) => void;
}

export type ApartmentFacilityList1ItemProps = ThemedComponentProps & ComponentProps;

class ApartmentFacilityList1ItemComponent extends React.Component<ApartmentFacilityList1ItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <Button
        textStyle={themedStyle.text}
        appearance='outline'
        size='tiny'
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}
      />
    );
  }
}

export const ApartmentFacilityList1Item = withStyles(ApartmentFacilityList1ItemComponent, (theme: ThemeType) => ({
  container: {
    borderWidth: 1,
    borderRadius: 15,
  },
  text: {
    fontSize: 11,
    ...textStyle.paragraph,
  },
}));
