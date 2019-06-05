import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageProps,
  ImageBackground,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  ClockIconOutline,
  FlashIconOutline,
} from '@src/assets/icons';
import { Exercise } from '@src/core/model';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  training: Exercise;
  index?: number;
  onDetails: (index: number) => void;
  onTiming: (index: number) => void;
  onEnergy: (index: number) => void;
}

export type TrainingCardProps = ThemedComponentProps & ComponentProps & TouchableOpacityProps;

class TrainingCard3Component extends React.Component<TrainingCardProps> {

  private onDetails = (): void => {
    this.props.onDetails(this.props.index);
  };

  private onTiming = (): void => {
    this.props.onTiming(this.props.index);
  };

  private onEnergy = (): void => {
    this.props.onEnergy(this.props.index);
  };

  private renderTimingIcon = (): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return ClockIconOutline(themedStyle.timingIcon);
  };

  private renderEnergyIcon = (): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return FlashIconOutline(themedStyle.energyIcon);
  };

  public render(): React.ReactNode {
    const { themedStyle, training, style } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={this.onDetails}
        style={style}>
        <ImageBackground
          style={themedStyle.image}
          source={training.image.imageSource}
        />
        <View style={themedStyle.infoContainer}>
          <Text
            style={themedStyle.titleLabel}
            category='h5'>
            {training.name}
          </Text>
          <View style={themedStyle.controlsContainer}>
            <Button
              style={themedStyle.timingButton}
              textStyle={themedStyle.controlButtonText}
              appearance='ghost'
              icon={this.renderTimingIcon}
              onPress={this.onTiming}>
              {training.duration}
            </Button>
            <Button
              textStyle={themedStyle.controlButtonText}
              appearance='ghost'
              icon={this.renderEnergyIcon}
              onPress={this.onEnergy}>
              {training.energy}
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const TrainingCard3 = withStyles(TrainingCard3Component, (theme: ThemeType) => ({
  image: {
    minHeight: 160,
  },
  infoContainer: {
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  titleLabel: {
    marginHorizontal: 18,
    ...textStyle.headline,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: theme['text-hint-color'],
    ...textStyle.button,
  },
  timingButton: {
    marginLeft: 8,
  },
  timingIcon: {
    width: 20,
    height: 20,
    tintColor: theme['color-primary-default'],
  },
  energyIcon: {
    width: 20,
    height: 20,
    tintColor: theme['color-danger-default'],
  },
}));
