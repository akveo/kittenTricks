import React from 'react';
import {
  ImageBackground,
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
import { ClockIcon } from '@src/assets/icons';

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
        <ImageBackground
          style={[themedStyle.container, style]}
          imageStyle={themedStyle.containerImageStyle}
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
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export const TrainingCard1 = withStyles(TrainingCardComponent, (theme: ThemeType) => ({
  container: {
    width: '100%',
    height: 200,
    padding: 16,
    justifyContent: 'space-between',
  },
  containerImageStyle: {
    borderRadius: 12,
  },
  levelLabel: {
    fontSize: 15,
  },
  titleLabel: {
    fontSize: 32,
    fontFamily: 'anton-regular',
  },
  chips: {
    width: 80,
  },
  chipsText: {
    fontSize: 11,
  },
}));
