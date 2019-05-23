import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  ThemeProvider,
} from '@kitten/theme';
import { ContextType } from '@src/core/utils/themeContext';
import { ThemeCard } from './themeCard.component';
import {
  light as lightTheme,
  dark as darkTheme,
} from '@eva/themes';

interface ThemesContentComponentProps {
  context: ContextType;
}

type Props = ThemedComponentProps & ThemesContentComponentProps;

class ThemesContentComponent extends React.Component<Props> {

  private onLightThemePress = (): void => {
    this.props.context.toggleTheme('light');
  };

  private onDarkThemePress = (): void => {
    this.props.context.toggleTheme('dark');
  };

  public render(): React.ReactNode {
    const { themedStyle, context } = this.props;

    return (
      <View style={themedStyle.container}>
        <ThemeProvider theme={lightTheme}>
          <ThemeCard
            style={themedStyle.card}
            currentTheme={context.currentTheme}
            buttonResponsibility='light'
            onPress={this.onLightThemePress}
          />
        </ThemeProvider>
        <ThemeProvider theme={darkTheme}>
          <ThemeCard
            style={themedStyle.card}
            currentTheme={context.currentTheme}
            buttonResponsibility='dark'
            onPress={this.onDarkThemePress}
          />
        </ThemeProvider>
      </View>
    );
  }
}

export const ThemesContent = withStyles(ThemesContentComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: theme['background-color-default-2'],
  },
  card: {
    marginBottom: 16,
  },
}));
