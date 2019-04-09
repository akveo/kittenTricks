import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageProps,
} from 'react-native';
import { Exercise } from '@src/core/model/exercise.model';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import { Text } from '@src/components/common';
import {
  ClockIcon,
  FlashIcon,
} from '@src/assets/icons';

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
    return ClockIcon(this.props.themedStyle.timingIcon);
  };

  private renderEnergyIcon = (): React.ReactElement<ImageProps> => {
    return FlashIcon(this.props.themedStyle.energyIcon);
  };

  public render(): React.ReactNode {
    const { themedStyle, training, style } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={this.onDetails}
        style={style}>
        <Image
          style={themedStyle.image}
          source={{ uri: training.image }}
        />
        <View style={themedStyle.infoContainer}>
          <Text style={themedStyle.titleLabel}>{training.name}</Text>
          <View style={themedStyle.controlsContainer}>
            <Button
              style={[themedStyle.controlButton, themedStyle.timingButton]}
              appearance='ghost'
              icon={this.renderTimingIcon}
              onPress={this.onTiming}>
              {training.duration}
            </Button>
            <Button
              style={themedStyle.controlButton}
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
    backgroundColor: '#FFFFFF',
  },
  titleLabel: {
    fontSize: 24,
    marginHorizontal: 18,
    color: '#0D1C2E',
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    color: '#8992A3',
    fontSize: 13,
    fontWeight: 'normal',
  },
  timingButton: {
    marginLeft: 8,
    marginRight: 28,
  },
  timingIcon: {
    width: 20,
    height: 20,
    tintColor: '#3366FF',
  },
  energyIcon: {
    width: 20,
    height: 20,
    tintColor: '#FF3D71',
  },
}));
