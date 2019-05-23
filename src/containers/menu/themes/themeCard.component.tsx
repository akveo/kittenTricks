import React from 'react';
import {
  View,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import {
  ThemeType,
  ThemedComponentProps,
  withStyles,
  StyleType,
} from '@kitten/theme';
import {
  Text,
  Button,
  ButtonProps,
} from '@kitten/ui';
import {
  CheckMarkIconFill,
  StarIcon,
} from '@src/assets/icons';

interface ComponentProps {
  currentTheme: 'light' | 'dark';
  buttonResponsibility: 'light' | 'dark';
}

export type ThemeCardComponentProps = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

export class ThemeCardComponent extends React.Component<ThemeCardComponentProps> {

  private renderColors = (style: StyleType, index: number): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View
        key={index}
        style={[themedStyle.colorItem, style]}
      />
    );
  };

  private getCardTitle = (): string => {
    const { buttonResponsibility: text } = this.props;
    const theme: string = text.charAt(0).toUpperCase() + text.slice(1);

    return `Eva ${theme}`;
  };

  private renderButton = (): React.ReactElement<ButtonProps> => {
    const {
      currentTheme,
      buttonResponsibility,
      themedStyle,
      onPress,
    } = this.props;

    const disabled: boolean = currentTheme === buttonResponsibility;
    const title: string = disabled ? 'ACTIVE' : 'CHOOSE';

    return (
      <Button
        appearance='outline'
        status='success'
        disabled={disabled}
        style={themedStyle.button}
        icon={disabled ? CheckMarkIconFill : StarIcon}
        onPress={onPress}>
        {title}
      </Button>
    );
  };

  public render(): React.ReactNode {
    const {
      themedStyle,
      style,
    } = this.props;

    const colors: string[] = [
      themedStyle.colorItem1,
      themedStyle.colorItem2,
      themedStyle.colorItem3,
      themedStyle.colorItem4,
      themedStyle.colorItem5,
      themedStyle.colorItem6,
    ];

    const cardTitle: string = this.getCardTitle();

    return (
      <View
        style={[themedStyle.card, style]}>
        <View style={[themedStyle.cardHeader, themedStyle.cardItem]}>
          <Text category='h6'>{cardTitle}</Text>
          {this.renderButton()}
        </View>
        <View style={themedStyle.cardItem}>
          {colors.map(this.renderColors)}
        </View>
      </View>
    );
  }
}

export const ThemeCard = withStyles(ThemeCardComponent, (theme: ThemeType) => ({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: theme['background-color-default-1'],
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeader: {
    marginBottom: 28,
  },
  colorItem: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
  button: {
    flexDirection: 'row-reverse',
    width: 144,
  },
  colorItem1: {
    backgroundColor: theme['background-color-default-2'],
  },
  colorItem2: {
    backgroundColor: theme['background-color-default-3'],
  },
  colorItem3: {
    backgroundColor: theme['background-color-alternative-2'],
  },
  colorItem4: {
    backgroundColor: theme['background-color-alternative-1'],
  },
  colorItem5: {
    backgroundColor: theme['text-color-default'],
  },
  colorItem6: {
    backgroundColor: theme['color-primary-default'],
  },
}));
