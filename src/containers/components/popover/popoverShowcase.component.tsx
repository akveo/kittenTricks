import React from 'react';
import {
  ScrollView,
  ViewProps,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Popover,
  PopoverProps,
  Button,
  Text,
} from '@kitten/ui';
import { PopoverShowcaseModel } from './popoverShowcase.container';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  popovers: PopoverShowcaseModel[];
  togglePopover: (index: number, visible: boolean) => void;
}

export type PopoverShowcaseProps = ThemedComponentProps & ComponentProps;

class PopoverShowcaseComponent extends React.Component<PopoverShowcaseProps> {

  private onExampleButtonPress = (index: number) => {
    this.props.togglePopover(index, true);
  };

  private onExamplePopoverRequestClose = (index: number) => {
    this.props.togglePopover(index, false);
  };

  private renderPopoverContent = (placement: string, index: number): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.popoverContent}>
        <Text
          style={themedStyle.popoverContentTitle}
          category='h6'>
          PRO TIP
        </Text>
        <Text
          style={themedStyle.popoverContentDescription}
          category='s1'>
          {`Try setting 'placement' with 'PopoverPlacements.${placement.toUpperCase()}' instead of '${placement}'`}
        </Text>
        <Button
          style={themedStyle.popoverContentButton}
          status='success'
          onPress={() => this.onExamplePopoverRequestClose(index)}>
          GOT IT
        </Button>
      </View>
    );
  };

  private renderExample = (item: PopoverShowcaseModel, index: number): React.ReactElement<PopoverProps> => {
    const { themedStyle } = this.props;

    return (
      <Popover
        key={index}
        placement={item.placement}
        visible={item.visible}
        style={themedStyle.popover}
        content={this.renderPopoverContent(item.placement, index)}
        onRequestClose={() => this.onExamplePopoverRequestClose(index)}>
        <Button
          style={themedStyle.button}
          onPress={() => this.onExampleButtonPress(index)}>
          {item.placement.toUpperCase()}
        </Button>
      </Popover>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, popovers } = this.props;

    return (
      <ScrollView
        style={themedStyle.container}
        contentContainerStyle={themedStyle.content}>
        {popovers.map(this.renderExample)}
      </ScrollView>
    );
  }
}

export const PopoverShowcase = withStyles(PopoverShowcaseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-basic-900'],
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 72,
  },
  button: {
    marginVertical: 16,
  },
  popover: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popoverContent: {
    width: 280,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  popoverContentTitle: {
    marginVertical: 4,
    ...textStyle.headline,
  },
  popoverContentDescription: {
    marginVertical: 4,
    ...textStyle.subtitle,
  },
  popoverActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  popoverContentButton: {
    marginVertical: 8,
  },
}));

