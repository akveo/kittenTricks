import React from 'react';
import { ImageProps } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TopNavigationActionProps,
  TopNavigationAction,
  TopNavigation,
} from '@kitten/ui';
import { SafeAreaView } from '@src/core/navigation';
import {
  ArrowIosBackFill,
  CartIconFill,
  SearchIconOutline,
} from '@src/assets/icons';

interface ComponentProps {
  title: string;
  onShoppingCart: () => void;
  onSearch: () => void;
  onBack: () => void;
}

export type EcommerceHeaderProps = ThemedComponentProps & ComponentProps;

class EcommerceHeaderComponent extends React.Component<EcommerceHeaderProps> {

  private onBack = (): void => {
    this.props.onBack();
  };

  private onShoppingCart = (): void => {
    this.props.onShoppingCart();
  };

  private onSearch = (): void => {
    this.props.onSearch();
  };

  private renderLeftControl = (): React.ReactElement<TopNavigationActionProps> => {
    return (
      <TopNavigationAction
        icon={ArrowIosBackFill}
        onPress={this.onBack}
      />
    );
  };

  private renderShoppingCartIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return CartIconFill({ ...style, ...themedStyle.cartIcon });
  };

  private renderRightControls = (): React.ReactElement<TopNavigationActionProps>[] => {
    return ([
      <TopNavigationAction
        icon={SearchIconOutline}
        onPress={this.onSearch}
      />,
      <TopNavigationAction
        icon={this.renderShoppingCartIcon}
        onPress={this.onShoppingCart}
      />,
    ]);
  };

  public render(): React.ReactNode {
    const { themedStyle, title } = this.props;

    return (
      <SafeAreaView style={themedStyle.container}>
        <TopNavigation
          alignment='center'
          title={title}
          leftControl={this.renderLeftControl()}
          rightControls={this.renderRightControls()}
        />
      </SafeAreaView>
    );
  }
}

export const EcommerceHeader = withStyles(EcommerceHeaderComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  cartIcon: {
    tintColor: theme['color-primary-default'],
  },
}));

