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
import { Text } from '@src/components/common';
import {
  Popover,
  PopoverProps,
  Button,
} from '@kitten/ui';
import { PopoverShowcaseModel } from './popoverShowcase.container';
import { MoveIcon } from '@src/assets/icons';

interface ComponentProps {
  popovers: PopoverShowcaseModel[];
  onPopoverShowcase: (index: number) => void;
}

export type PopoverShowcaseProps = ThemedComponentProps & ComponentProps;

class PopoverShowcaseComponent extends React.Component<PopoverShowcaseProps> {

  private onExamplePress = (index: number): void => {
    this.props.onPopoverShowcase(index);
  };

  private renderPopover = (text: string): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.popoverContent}>
        {MoveIcon(themedStyle.popoverContentIcon)}
        <Text style={themedStyle.popoverContentText}>{text}</Text>
      </View>
    );
  };

  private renderExample = (item: PopoverShowcaseModel, index: number): React.ReactElement<PopoverProps> => {
    const { themedStyle } = this.props;
    const placementLabel: string = item.placement.toUpperCase();

    return (
      <Popover
        key={index}
        placement={item.placement}
        visible={item.visible}
        style={themedStyle.popover}
        content={this.renderPopover(item.placement)}
        onRequestClose={() => this.onExamplePress(index)}>
        <Button
          style={themedStyle.tip}
          onPress={() => this.onExamplePress(index)}>
          {placementLabel}
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
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 96,
  },
  tip: {
    marginVertical: 24,
  },
  text: {
    alignSelf: 'center',
    color: theme['color-black'],
  },
  popover: {
    backgroundColor: theme['color-primary-500'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  popoverContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 4,
  },
  popoverContentIcon: {
    tintColor: theme['color-white'],
    width: 16,
    height: 16,
    marginRight: 4,
  },
  popoverContentText: {
    color: theme['color-white'],
    fontSize: 12,
  },
}));

