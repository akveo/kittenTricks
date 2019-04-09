import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  View,
} from 'react-native';
import { Exercise } from '@src/core/model/exercise.model';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  Button,
} from '@src/components/common';
import { ClockIcon } from '@src/assets/icons';

interface ComponentProps {
  training: Exercise;
  index?: number;
  onDuration: (index: number) => void;
}

export type TrainingCardProps = ThemedComponentProps & ComponentProps & Partial<ImageBackgroundProps>;

class TrainingCardComponent extends React.Component<TrainingCardProps> {

  private onDuration = (): void => {
    this.props.onDuration(this.props.index);
  };

  public render(): React.ReactNode {
    const { themedStyle, training, style } = this.props;

    return (
      <ImageBackground
        style={[themedStyle.container, style]}
        imageStyle={themedStyle.containerImageStyle}
        source={{ uri: training.image }}>
        <View>
          <Text style={themedStyle.levelLabel}>{`${training.level} Level`}</Text>
          <Text style={themedStyle.titleLabel}>{training.name}</Text>
        </View>
        <Button
          size='small'
          style={themedStyle.durationButton}
          icon={ClockIcon}
          onPress={this.onDuration}>
          {training.duration}
        </Button>
      </ImageBackground>
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
    fontWeight: '600',
  },
  titleLabel: {
    fontSize: 32,
    fontFamily: 'anton-regular',
  },
  durationButton: {
    width: 80,
    height: 24,
    borderRadius: 100,
    fontSize: 11,
    fontWeight: '600',
  },
}));
