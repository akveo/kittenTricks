import React from 'react';
import {
  View,
  Dimensions,
  ScaledSize,
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

interface ComponentProps {
  onCancel: () => void;
}

export type ComingSoonModalProps = ThemedComponentProps & ComponentProps;

class ComingSoonModalComponent extends React.Component<ComingSoonModalProps> {

  private onCancel = (): void => {
    this.props.onCancel();
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        <View style={themedStyle.headerContainer}>
          <Text style={themedStyle.titleLabel}>Coming Soon</Text>
          <Text style={themedStyle.descriptionLabel}>These layouts are not currently available. Stay tuned</Text>
        </View>
        <Button
          appearance='ghost'
          size='large'
          onPress={this.onCancel}>
          Okay
        </Button>
      </View>
    );
  }
}

export const ComingSoonModal = withStyles(ComingSoonModalComponent, (theme: ThemeType) => {
  const dimensions: ScaledSize = Dimensions.get('window');
  const contentWidth: number = dimensions.width - 24;
  const contentHeight: number = 192;

  return {
    container: {
      zIndex: 1,
      justifyContent: 'space-between',
      padding: 24,
      width: contentWidth,
      height: contentHeight,
      borderRadius: 12,
      top: (dimensions.height - contentHeight) / 2,
      left: (dimensions.width - contentWidth) / 2,
      backgroundColor: theme['color-white'],
    },
    headerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleLabel: {
      color: theme['color-black'],
      fontFamily: 'opensans-extrabold',
      fontSize: 20,
      lineHeight: 28,
    },
    descriptionLabel: {
      marginTop: 24,
      fontSize: 13,
      lineHeight: 16,
      color: theme['color-black'],
    },
  };
});
