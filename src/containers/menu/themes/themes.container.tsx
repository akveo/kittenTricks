import React from 'react';
import { Themes } from './themes.component';
import {
  ContextType,
  ThemeContext,
  themes,
} from '@src/core/themes';
import { Theme } from './type';

export class ThemesContainer extends React.Component {

  private data: Theme[] = [];

  constructor(props) {
    super(props);
    this.data = Object.keys(themes).map(this.toThemeObject);
  }

  private toThemeObject = (theme: string): Theme => {
    return { name: theme, theme: themes[theme] };
  };

  private renderContent = (context: ContextType): React.ReactElement<any> => {
    return (
      <Themes
        data={this.data}
        currentTheme={context.currentTheme}
        onToggleTheme={context.toggleTheme}
      />
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
