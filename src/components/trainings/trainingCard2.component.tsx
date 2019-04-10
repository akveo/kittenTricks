import React from 'react';
import {
  Image,
  ImageProps,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Exercise } from '@src/core/model/exercise.model';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  Chips,
} from '@src/components/common';
import {
  ClockIcon,
  ForwardArrowIcon,
} from '@src/assets/icons';

interface ComponentProps {
  training: Exercise;
  index?: number;
  onDetails: (index: number) => void;
}

export type TrainingCardProps = ThemedComponentProps & ComponentProps & TouchableOpacityProps;

class TrainingCardComponent extends React.Component<TrainingCardProps> {

  private onDetails = (): void => {
    this.props.onDetails(this.props.index);
  };

  private renderDetailsIcon = (): React.ReactElement<ImageProps> => {
    return ForwardArrowIcon(this.props.themedStyle.detailsIcon);
  };

  public render(): React.ReactNode {
    const { themedStyle, training, style } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={this.onDetails}>
        <View style={[themedStyle.container, style]}>
          <Image
            style={[themedStyle.subContainer, themedStyle.leftSection]}
            source={{ uri: training.image }}/>
          <View style={[themedStyle.subContainer, themedStyle.rightSection]}>
            <Text style={themedStyle.titleLabel}>{training.name}</Text>
            <View style={themedStyle.controlsContainer}>
              <Chips
                style={themedStyle.chips}
                icon={ClockIcon}>
                <Text style={themedStyle.chipsText}>{training.duration}</Text>
              </Chips>
              {this.renderDetailsIcon()}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const TrainingCard2 = withStyles(TrainingCardComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    minHeight: 144,
    overflow: 'hidden',
  },
  subContainer: {
    flex: 1,
  },
  rightSection: {
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: theme['color-white'],
  },
  leftSection: {
    padding: 16,
  },
  titleLabel: {
    fontSize: 24,
    fontFamily: 'anton-regular',
    color: theme['color-black'],
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chips: {
    width: 80,
  },
  chipsText: {
    fontSize: 11,
  },
  detailsIcon: {
    width: 22,
    height: 22,
    tintColor: theme['color-black'],
  },
}));
