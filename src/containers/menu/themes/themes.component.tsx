import React from 'react';
import { ViewProps } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ThemeContext } from '@src/core/utils/themeContext';
import { ThemesContent } from '@src/containers/menu/themes/themesContent.component';

type Props = ThemedComponentProps;

class ThemesComponent extends React.Component<Props> {

  private renderContent = ({ currentTheme, toggleTheme }): React.ReactElement<ViewProps> => {
    return (
      <ThemesContent context={{ currentTheme, toggleTheme }}/>
    );
  };

  public render(): React.ReactNode {
    return (
      <ThemeContext.Consumer>
        {this.renderContent}
      </ThemeContext.Consumer>
    );
  }
}

export const Themes = withStyles(ThemesComponent, (theme: ThemeType) => ({}));
