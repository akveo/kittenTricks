import React from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TopNavigationBarActionProps,
  TopNavigationAction,
  TopNavigation,
} from '@kitten/ui';
import {
  BackArrowIcon,
  CartIconFill,
  SearchIconOutline,
} from '@src/assets/icons';
import { ImageProps } from 'react-native';

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

  private renderLeftControl = (): React.ReactElement<TopNavigationBarActionProps> => {
    return (
      <TopNavigationAction
        icon={BackArrowIcon}
        onPress={this.onBack}
      />
    );
  };

  private renderShoppingCartIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return CartIconFill({ ...style, ...themedStyle.cartIcon });
  };

  private renderRightControls = (): React.ReactElement<TopNavigationBarActionProps>[] => {
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
    backgroundColor: theme['color-white'],
  },
  cartIcon: {
    tintColor: theme['color-primary-500'],
  },
}));

