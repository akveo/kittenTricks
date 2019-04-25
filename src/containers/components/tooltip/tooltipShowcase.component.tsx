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

interface ComponentProps {
  tooltips: PopoverShowcaseModel[];
  onTooltipShowcase: (index: number) => void;
}

export type TooltipShowcaseProps = ThemedComponentProps & ComponentProps;

class TooltipShowcaseComponent extends React.Component<TooltipShowcaseProps> {

  private onExamplePress = (index: number): void => {
    this.props.onTooltipShowcase(index);
  };

  private renderExample = (item: PopoverShowcaseModel, index: number): React.ReactElement<TooltipProps> => {
    const { themedStyle } = this.props;
    const placementLabel: string = item.placement.toUpperCase();

    return (
      <Tooltip
        key={index}
        placement={item.placement}
        visible={item.visible}
        style={themedStyle.tooltip}
        text={item.placement}
        onRequestClose={() => this.onExamplePress(index)}>
        <Button
          appearance='outline'
          style={themedStyle.tip}
          onPress={() => this.onExamplePress(index)}>
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
  tip: {
    marginVertical: 24,
  },
  text: {
    alignSelf: 'center',
    color: theme['color-black'],
  },
  tooltip: {
    backgroundColor: theme['color-primary-500'],
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

