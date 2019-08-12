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
import { textStyle } from '@src/components/common';

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
          <Text
            style={themedStyle.titleLabel}
            category='h6'>
            Coming Soon
          </Text>
          <Text
            style={themedStyle.descriptionLabel}
            category='p2'>
            These layouts are not currently available. Stay tuned
          </Text>
        </View>
        <Button
          textStyle={textStyle.button}
          appearance='ghost'
          size='large'
          onPress={this.onCancel}>
          OKAY
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
      backgroundColor: theme['background-basic-color-3'],
    },
    headerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleLabel: textStyle.headline,
    descriptionLabel: {
      marginTop: 24,
      ...textStyle.paragraph,
    },
  };
});
