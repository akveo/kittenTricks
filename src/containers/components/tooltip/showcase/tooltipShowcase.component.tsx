import React from 'react';
import {
  Button,
  CheckBoxProps,
  TooltipProps,
  Tooltip,
} from '@kitten/ui';
import { StyleSheet } from 'react-native';

interface TooltipShowcaseComponentState {
  visible: boolean;
}

export class TooltipShowcase extends React.Component<any, TooltipShowcaseComponentState> {

  static defaultProps: Partial<TooltipProps> = {
    visible: false,
    placement: 'left',
  };

  public state: TooltipShowcaseComponentState = {
    visible: this.props.visible,
  };

  private onBackdropPress = () => {
    this.setState({ visible: false });
  };

  private onButtonPress = () => {
    this.setState({ visible: true });
  };

  private tipDescription = (): string => {
    const { placement } = this.props;

    const rawValue: string = placement.toString();
    const tipValue: string = rawValue.replace(' ', '_').toUpperCase();

    return `Use 'PopoverPositions.${tipValue}' instead of '${rawValue}'`;
  };

  public render(): React.ReactElement<CheckBoxProps> {
    const { style, ...restProps } = this.props;

    return (
      <Tooltip
        {...restProps}
        style={[styles.container, style]}
        visible={this.state.visible}
        text={this.tipDescription()}
        onBackdropPress={this.onBackdropPress}>
        <Button
          size='small'
          onPress={this.onButtonPress}>
          BUTTON
        </Button>
      </Tooltip>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 228,
  },
});
