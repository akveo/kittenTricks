import React from 'react';
import {
  View,
  ViewProps,
  ImageProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  StyleType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  Button,
  ButtonProps,
} from '@kitten/ui';
import { ContextType } from '@src/core/utils/themeContext';
import { CheckMarkIconFill } from '@src/assets/icons';

interface ThemesContentComponentProps {
  context: ContextType;
}

type Props = ThemedComponentProps & ThemesContentComponentProps;

class ThemesContentComponent extends React.Component<Props> {

  private lightThemeColors: string[] = [
    '#3366FF',
    '#284DE0',
    '#D9E4FF',
    '#F2F6FF',
    '#DDE1EB',
    '#A6AEBD',
  ];

  private darkThemeColors: string[] = [
    '#415A81',
    '#1C2F4E',
    '#96AAC8',
    '#FFFFFF',
    '#00E194',
    '#B0FFD5',
  ];

  private onLightThemePress = (): void => {
    this.props.context.toggleTheme('light');
  };

  private onDarkThemePress = (): void => {
    this.props.context.toggleTheme('dark');
  };

  private renderButtonActiveIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle, context } = this.props;
    const additionalStyle: StyleType = context.currentTheme === 'light' ?
      themedStyle.lightActiveButtonIcon : themedStyle.darkActiveButtonIcon;

    return CheckMarkIconFill({ ...style, ...additionalStyle });
  };

  private renderLightThemeCardButton = (): React.ReactElement<ButtonProps | ViewProps> => {
    const { themedStyle, context } = this.props;
    const isLight: boolean = context.currentTheme === 'light';

    if (isLight) {
      return (
        <Button
          appearance='ghost'
          disabled={true}
          textStyle={themedStyle.lightActiveButtonText}
          icon={this.renderButtonActiveIcon}
          style={themedStyle.lightActiveButton}>
          ACTIVE
        </Button>
      );
    } else {
      return (
        <Button
          appearance='outline'
          status='white'
          onPress={this.onLightThemePress}>
          CHOOSE
        </Button>
      );
    }
  };

  private renderDarkThemeCardButton = (): React.ReactElement<ButtonProps | ViewProps> => {
    const { themedStyle, context } = this.props;
    const isDark: boolean = context.currentTheme === 'dark';

    if (isDark) {
      return (
        <Button
          appearance='ghost'
          disabled={true}
          textStyle={themedStyle.darkButtonText}
          icon={this.renderButtonActiveIcon}
          style={themedStyle.darkActiveButton}>
          ACTIVE
        </Button>
      );
    } else {
      return (
        <Button
          appearance='outline'
          status='white'
          style={themedStyle.darkButtonChoose}
          textStyle={themedStyle.darkButtonText}
          onPress={this.onDarkThemePress}>
          CHOOSE
        </Button>
      );
    }
  };

  private renderColors = (color: string, index: number): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View
        key={index}
        style={[themedStyle.colorItem, { backgroundColor: color }]}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, context } = this.props;

    return (
      <View style={themedStyle.container}>
        <View
          style={[themedStyle.card, themedStyle.cardLight]}>
          <View style={[themedStyle.cardHeader, themedStyle.cardItem]}>
            <Text category='h6'>Eva Light</Text>
            {this.renderLightThemeCardButton()}
          </View>
          <View style={themedStyle.cardItem}>
            {this.lightThemeColors.map(this.renderColors)}
          </View>
        </View>
        <View
          style={[themedStyle.card, themedStyle.cardDark]}>
          <View style={[themedStyle.cardHeader, themedStyle.cardItem]}>
            <Text category='h6' style={themedStyle.darkButtonText}>Eva Dark</Text>
            {this.renderDarkThemeCardButton()}
          </View>
          <View style={themedStyle.cardItem}>
            {this.darkThemeColors.map(this.renderColors)}
          </View>
        </View>
      </View>
    );
  }
}

export const ThemesContent = withStyles(ThemesContentComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    width: '100%',
  },
  cardLight: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  cardDark: {
    backgroundColor: '#0D1C2E',
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
  lightActiveButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  lightActiveButtonText: {
    color: '#3366FF',
  },
  lightActiveButtonIcon: {
    marginHorizontal: 0,
    tintColor: '#3366FF',
  },
  darkActiveButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  darkButtonText: {
    color: '#FFFFFF',
  },
  darkActiveButtonIcon: {
    marginHorizontal: 0,
    tintColor: '#FFFFFF',
  },
  darkButtonChoose: {
    borderColor: '#FFFFFF',
  },
}));
