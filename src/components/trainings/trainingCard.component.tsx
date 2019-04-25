import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import {
  Chips,
  ImageOverlay,
} from '@src/components/common';
import { ClockIcon } from '@src/assets/icons';
import { Exercise } from '@src/core/model';

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

  public render(): React.ReactNode {
    const { themedStyle, training, style } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={this.onDetails}>
        <ImageOverlay
          style={[themedStyle.container, style]}
          source={{ uri: training.image }}>
          <View>
            <Text style={themedStyle.levelLabel}>{`${training.level} Level`}</Text>
            <Text style={themedStyle.titleLabel}>{training.name}</Text>
          </View>
          <Chips
            style={themedStyle.chips}
            icon={ClockIcon}>
            <Text style={themedStyle.chipsText}>{training.duration}</Text>
          </Chips>
        </ImageOverlay>
      </TouchableOpacity>
    );
  }
}

export const TrainingCard1 = withStyles(TrainingCardComponent, (theme: ThemeType) => ({
  container: {
    // width: '100%',
    height: 200,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  levelLabel: {
    fontSize: 15,
    fontFamily: 'opensans-semibold',
    color: theme['color-white'],
  },
  titleLabel: {
    fontSize: 32,
    fontFamily: 'anton-regular',
    color: theme['color-white'],
  },
  chips: {
    width: 80,
  },
  chipsText: {
    fontSize: 11,
    fontFamily: 'opensans-semibold',
    color: theme['color-white'],
  },
}));
