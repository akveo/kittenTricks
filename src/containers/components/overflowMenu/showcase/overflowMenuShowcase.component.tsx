import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  OverflowMenu,
  OverflowMenuProps,
  OverflowMenuItemType,
} from '@kitten/ui';
import { StarIconFill } from '@src/assets/icons';

interface OverflowMenuShowcaseComponentState {
  visible: boolean;
}

export class OverflowMenuShowcase extends React.Component<any, OverflowMenuShowcaseComponentState> {

  private items: OverflowMenuItemType[] = [
    {
      title: 'Menu Item 1',
    },
    {
      title: 'Menu Item 2',
    },
    {
      title: 'Icon Menu Item',
      icon: StarIconFill,
    },
    {
      title: 'Disabled Menu Item',
      icon: StarIconFill,
      disabled: true,
    },
  ];

  static defaultProps: Partial<OverflowMenuProps> = {
    visible: false,
  };

  public state: OverflowMenuShowcaseComponentState = {
    visible: this.props.visible,
  };

  private onBackdropPress = () => {
    this.setState({ visible: false });
  };

  private onItemSelect = () => {
    this.setState({ visible: false });
  };

  private onButtonPress = () => {
    this.setState({ visible: true });
  };

  public render(): React.ReactElement<OverflowMenuProps> {
    return (
      <OverflowMenu
        style={styles.container}
        {...this.props}
        visible={this.state.visible}
        data={this.items}
        onSelect={this.onItemSelect}
        onBackdropPress={this.onBackdropPress}>
        <Button onPress={this.onButtonPress}>BUTTON</Button>
      </OverflowMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 228,
  },
});
