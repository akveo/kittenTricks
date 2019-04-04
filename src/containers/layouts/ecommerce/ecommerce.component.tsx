import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  LayoutList,
  ListItem,
} from '@src/components/common';

interface ComponentProps {
  items: ListItem[];
  onItemSelect: (index: number) => void;
}

export type EcommerceProps = ThemedComponentProps & ComponentProps;

class EcommerceComponent extends React.Component<EcommerceProps> {

  private onItemSelect = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, items } = this.props;

    return (
      <LayoutList
        style={themedStyle.container}
        data={items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}

export const Ecommerce = withStyles(EcommerceComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
