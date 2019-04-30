import React from 'react';
import {
  Button,
  CheckBoxProps,
  Popover,
  PopoverProps,
} from '@kitten/ui';
import {
  PopoverContent,
  PopoverContentProps,
} from './popoverContent.component';
import { StyleSheet } from 'react-native';

interface PopoverShowcaseComponentState {
  visible: boolean;
}

type ContentElement = React.ReactElement<PopoverContentProps>;

export class PopoverShowcase extends React.Component<any, PopoverShowcaseComponentState> {

  static defaultProps: Partial<PopoverProps> = {
    visible: false,
  };

  public state: PopoverShowcaseComponentState = {
    visible: this.props.visible,
  };

  private onRequestClose = () => {
    this.setState({ visible: false });
  };

  private onPopoverContentButtonPress = () => {
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

  private renderContentElement = (): ContentElement => {
    return (
      <PopoverContent
        style={styles.content}
        title='PRO TIP'
        description={this.tipDescription()}
        onGotItPress={this.onPopoverContentButtonPress}
      />
    );
  };

  public render(): React.ReactElement<CheckBoxProps> {
    return (
      <Popover
        {...this.props}
        visible={this.state.visible}
        content={this.renderContentElement()}
        onRequestClose={this.onRequestClose}>
        <Button onPress={this.onButtonPress}>BUTTON</Button>
      </Popover>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: 228,
  },
});
