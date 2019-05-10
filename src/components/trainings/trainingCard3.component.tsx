import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageProps,
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
  ClockIcon,
  FlashIcon,
} from '@src/assets/icons';
import { Exercise } from '@src/core/model';
import {
  ImageOverlay,
  textStyle,
} from '@src/components/common';

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

    return ClockIcon(themedStyle.timingIcon);
  };

  private renderEnergyIcon = (): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return FlashIcon(themedStyle.energyIcon);
  };

  public render(): React.ReactNode {
    const { themedStyle, training, style } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={this.onDetails}
        style={style}>
        <ImageOverlay
          style={themedStyle.image}
          source={{ uri: training.image }}
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
    width: '100%',
    minHeight: 160,
  },
  infoContainer: {
    paddingVertical: 16,
    justifyContent: 'space-between',
    backgroundColor: theme['color-white'],
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
    color: theme['color-basic-600'],
    fontSize: 13,
    fontWeight: 'normal',
    ...textStyle.button,
  },
  timingButton: {
    marginLeft: 8,
  },
  timingIcon: {
    width: 20,
    height: 20,
    tintColor: theme['color-primary-500'],
  },
  energyIcon: {
    width: 20,
    height: 20,
    tintColor: theme['color-danger-500'],
  },
}));
