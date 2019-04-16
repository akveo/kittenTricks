import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ListRenderItemInfo,
  Dimensions,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  Button,
} from '@kitten/ui';
import { Text } from '@src/components/common';
import { Product as ProductModel } from '@src/core/model';
import { BuyActionModel } from './productDetails.container';

const { width, height } = Dimensions.get('window');

interface ComponentProps {
  product: ProductModel;
  shoppingItemsCount: number;
  actionItems: BuyActionModel[];
  onCancel: () => void;
}

export type ByuModalProps = ThemedComponentProps & ComponentProps;

class ByuModalComponent extends React.Component<ByuModalProps> {

  private onCancel = (): void => {
    this.props.onCancel();
  };

  private renderAction = (info: ListRenderItemInfo<BuyActionModel>): React.ReactElement<TouchableOpacityProps> => {
    const { themedStyle } = this.props;

    return (
      <TouchableOpacity
        style={themedStyle.actionContainer}
        activeOpacity={0.95}
        onPress={info.item.action}>
        <Text style={themedStyle.actionLabel}>{info.item.title}</Text>
      </TouchableOpacity>
    );
  };

  public render(): React.ReactNode {
    const {
      themedStyle,
      shoppingItemsCount,
      product,
      actionItems,
    } = this.props;

    return (
      [
        <View style={themedStyle.container} key={0}>
          <View style={themedStyle.headerContainer}>
            <Text style={themedStyle.nameLabel}>{product.name}</Text>
            <Text style={themedStyle.countLabel}>
              {`You have ${shoppingItemsCount} in your Shopping Cart`}
            </Text>
          </View>
          <List
            style={themedStyle.actionsList}
            data={actionItems}
            renderItem={this.renderAction}
          />
          <Button
            appearance='ghost'
            size='large'
            onPress={this.onCancel}>
            Cancel
          </Button>
        </View>,
        <View
          style={themedStyle.wrapper}
          pointerEvents='box-none'
          key={1}
        />,
      ]
    );
  }
}

export const ByuModal = withStyles(ByuModalComponent, (theme: ThemeType) => ({
  wrapper: {
    width: width,
    height: height,
    backgroundColor: theme['color-black'],
    opacity: 0.4,
    position: 'absolute',
  },
  container: {
    zIndex: 1,
    backgroundColor: theme['color-white'],
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingBottom: 16,
    width: 343,
    height: 276,
    borderRadius: 12,
    top: (height - 276) / 2,
    left: (width - 343) / 2,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameLabel: {
    color: theme['color-black'],
    fontFamily: 'opensans-extrabold',
    fontSize: 20,
    lineHeight: 28,
  },
  countLabel: {
    color: theme['color-black'],
    fontSize: 13,
    lineHeight: 16,
  },
  actionsList: {
    marginTop: 16,
  },
  actionContainer: {
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    borderBottomColor: theme['color-basic-200'],
    borderBottomWidth: 1.5,
  },
  actionLabel: {
    color: theme['color-black'],
    fontFamily: 'opensans-bold',
    fontSize: 13,
    lineHeight: 24,
  },
}));
