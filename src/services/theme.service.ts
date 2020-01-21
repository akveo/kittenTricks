import React from 'react';
import { Appearance, AppearancePreferences, ColorSchemeName } from 'react-native-appearance';

export type Mapping = 'eva' | 'material';
export type Theme = 'light' | 'dark' | 'brand';

export interface ThemeContextValue {
  /**
   * Should return the name of current mapping
   */
  currentMapping: Mapping;
  /**
   * Should return the name of current theme
   */
  currentTheme: Theme;
  /**
   * Should switch theme globally
   */
  setCurrentTheme: (theme: Theme) => void;
  /**
   * Should return true if current theme is dark or dark mode enabled
   */
  isDarkMode: () => boolean;
  /**
   * Should create a theme based on current
   */
  createTheme: (upstreamTheme: Theme) => any;
}

export class Theming {

  static Context = React.createContext<ThemeContextValue>(null);

  /**
   * @see ThemeContextValue
   *
   * Creates context value with standard configuration:
   *
   * - `currentMapping` is set depending `mapping` argument.
   * - `currentTheme` is set depending on current appearance set on the device.
   * - `setCurrentTheme` will be called when device appearance is changed.
   * - `isDarkMode` returns true if current device appearance is `dark`.
   * - `createTheme` will take an `upstreamTheme` and merge it with `currentTheme`.
   *
   * @param {Record<Theme, any>} themes - set of themes available in app.
   * @param {Mapping} mapping - mapping name to use. Could be `Eva` or `Material`.
   * @param {Theme} theme - name of theme that will be applied if there is no preferred appearance set.
   *
   * @returns {[ThemeContextValue, any]} - array of two values:
   * - value to be set in `ThemeContext.Provider`
   * - and theme picked from `themes` param.
   */
  static useTheming = (themes: Record<Mapping, Record<Theme, any>>,
                       mapping: Mapping,
                       theme: Theme): [ThemeContextValue, any] => {

    const deviceAppearance: ColorSchemeName = Appearance.getColorScheme();
    const deviceAppearanceTheme: Theme = Theming.createAppearanceTheme(deviceAppearance, theme);

    const [currentTheme, setCurrentTheme] = React.useState<Theme>(deviceAppearanceTheme);

    React.useEffect(() => {
      const subscription = Appearance.addChangeListener((preferences: AppearancePreferences): void => {
        const appearanceTheme: Theme = Theming.createAppearanceTheme(
          preferences.colorScheme,
          theme,
        );
        setCurrentTheme(appearanceTheme);
      });

      return () => subscription.remove();
    }, []);

    const isDarkMode = (): boolean => {
      return currentTheme.endsWith('dark');
    };

    const createTheme = (upstreamTheme: Theme): any => {
      return { ...themes[mapping][currentTheme], ...themes[mapping][upstreamTheme][currentTheme] };
    };

    const themeContext: ThemeContextValue = {
      currentMapping: mapping,
      currentTheme,
      setCurrentTheme,
      isDarkMode,
      createTheme,
    };

    return [themeContext, themes[mapping][currentTheme]];
  };

  static useTheme = (upstreamTheme: Theme): any => {
    const themeContext: ThemeContextValue = React.useContext(Theming.Context);
    return themeContext.createTheme(upstreamTheme);
  };

  private static createAppearanceTheme = (appearance: ColorSchemeName,
                                          preferredTheme: Theme): Theme => {
    if (appearance === 'no-preference') {
      return preferredTheme;
    }
    return appearance;
  };
}




