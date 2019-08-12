import React from 'react';
import {
  Button,
  OverflowMenu,
  OverflowMenuProps,
  OverflowMenuItemType,
} from '@kitten/ui';
import { StarIconFill } from '@src/assets/icons';
import { StyleSheet } from 'react-native';

interface OverflowMenuShowcaseComponentState {
  visible: boolean;
}

export class OverflowMenuShowcase extends React.Component<any, OverflowMenuShowcaseComponentState> {

  private items: OverflowMenuItemType[] = [
    {
      text: 'Menu Item 1',
    },
    {
      text: 'Menu Item 2',
    },
    {
      text: 'Icon Menu Item',
      icon: StarIconFill,
    },
    {
      text: 'Disabled Menu Item',
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
        items={this.items}
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
