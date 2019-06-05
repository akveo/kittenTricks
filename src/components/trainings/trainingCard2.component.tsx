import React from 'react';
import {
  ImageProps,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import {
  Chips,
  textStyle,
} from '@src/components/common';
import {
  ClockIconOutline,
  ArrowForwardIconOutline,
} from '@src/assets/icons';
import { Exercise } from '@src/core/model/exercise.model';

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
    return ArrowForwardIconOutline(this.props.themedStyle.detailsIcon);
  };

  public render(): React.ReactNode {
    const { themedStyle, training, style } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={this.onDetails}>
        <View style={[themedStyle.container, style]}>
          <ImageBackground
            style={[themedStyle.subContainer, themedStyle.leftSection]}
            source={training.image.imageSource}
          />
          <View style={[themedStyle.subContainer, themedStyle.rightSection]}>
            <Text
              style={themedStyle.titleLabel}
              category='h5'>
              {training.name}
            </Text>
            <View style={themedStyle.controlsContainer}>
              <Chips
                style={themedStyle.chips}
                icon={ClockIconOutline}>
                <Text
                  style={themedStyle.chipsText}
                  category='c1'>
                  {training.duration}
                </Text>
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
    backgroundColor: theme['background-basic-color-1'],
  },
  leftSection: {
    padding: 16,
  },
  titleLabel: textStyle.headline,
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chips: {
    width: 80,
  },
  chipsText: {
    color: 'white',
    ...textStyle.paragraph,
  },
  detailsIcon: {
    width: 22,
    height: 22,
    tintColor: theme['text-hint-color'],
  },
}));
