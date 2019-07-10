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
import { profile1 } from '@src/core/data/profile';

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

  private onBackdropPress = () => {
    this.setState({ visible: false });
  };

  private onPopoverContentButtonPress = () => {
    this.setState({ visible: false });
  };

  private onButtonPress = () => {
    this.setState({ visible: true });
  };

  private getButtonTitle = (placement: string): string => {
    const placementArray: string[] = placement.split(' ');

    if (placementArray.length > 1) {
      return placementArray[1].toUpperCase();
    } else {
      return 'CENTER';
    }
  };

  private renderContentElement = (): ContentElement => {
    return (
      <PopoverContent
        style={styles.content}
        profile={profile1}
        onFollowPress={this.onPopoverContentButtonPress}
      />
    );
  };

  public render(): React.ReactElement<CheckBoxProps> {
    const { placement } = this.props;
    const title: string = this.getButtonTitle(placement);

    return (
      <Popover
        {...this.props}
        visible={this.state.visible}
        content={this.renderContentElement()}
        onBackdropPress={this.onBackdropPress}>
        <Button
          style={styles.button}
          onPress={this.onButtonPress}>
          {title}
        </Button>
      </Popover>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: 228,
  },
  button: {
    width: 106,
  },
});
