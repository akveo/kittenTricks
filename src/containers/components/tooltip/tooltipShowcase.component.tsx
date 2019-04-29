import React from 'react';
import { ScrollView } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Tooltip,
  TooltipProps,
  Button,
} from '@kitten/ui';
import { PopoverShowcaseModel } from '../popover/popoverShowcase.container';
import { StarIcon } from '@src/assets/icons';

interface ComponentProps {
  tooltips: PopoverShowcaseModel[];
  toggleTooltip: (index: number, visible: boolean) => void;
}

export type TooltipShowcaseProps = ThemedComponentProps & ComponentProps;

class TooltipShowcaseComponent extends React.Component<TooltipShowcaseProps> {

  private onExampleButtonPress = (index: number) => {
    this.props.toggleTooltip(index, true);
  };

  private onExamplePopoverRequestClose = (index: number) => {
    this.props.toggleTooltip(index, false);
  };

  private renderExample = (item: PopoverShowcaseModel, index: number): React.ReactElement<TooltipProps> => {
    const { themedStyle } = this.props;
    const placementLabel: string = item.placement.toUpperCase();

    return (
      <Tooltip
        key={index}
        style={themedStyle.tooltip}
        placement={item.placement}
        visible={item.visible}
        text={`Try setting 'placement' with 'PopoverPlacements.${placementLabel}' instead of '${item.placement}'`}
        onRequestClose={() => this.onExamplePopoverRequestClose(index)}>
        <Button
          style={themedStyle.button}
          onPress={() => this.onExampleButtonPress(index)}>
          {placementLabel}
        </Button>
      </Tooltip>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, tooltips } = this.props;

    return (
      <ScrollView
        style={themedStyle.container}
        contentContainerStyle={themedStyle.content}>
        {tooltips.map(this.renderExample)}
      </ScrollView>
    );
  }
}

export const TooltipShowcase = withStyles(TooltipShowcaseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 96,
  },
  button: {
    marginVertical: 16,
  },
  tooltip: {
    width: 256,
  },
}));

