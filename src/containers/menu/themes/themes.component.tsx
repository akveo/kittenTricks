import React, { useContext } from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Radio,
  RadioGroup,
  RadioProps,
  Text,
} from '@kitten/ui';
import { ThemeContext } from '@src/core/utils/themeContext';
import { ThemeService } from '@src/core/utils/theme.service';

type Props = ThemedComponentProps;

interface State {
  themes: string[];
  selectedThemeIndex: number;
}

class ThemesComponent extends React.Component<Props, State> {

  public state: State = {
    themes: [],
    selectedThemeIndex: 0,
  };

  public componentWillMount(): void {
    const test = useContext(ThemeContext)
    console.log(test)
    ThemeService.getAllThemeNames()
      .then((themes: string[]) => this.setState({ themes }));
  }

  private setThemeIndex = (theme: string): void => {
    const { themes } = this.state;
    const themeIndex: number = themes.indexOf(theme);

    if (themeIndex !== -1) {
      this.setState({ selectedThemeIndex: themeIndex });
    }
  };

  private renderThemeItem = (theme: string, index: number): React.ReactElement<RadioProps> => {
    const { themedStyle } = this.props;

    return (
      <Radio
        style={themedStyle.radioItem}
        key={index}
        text={theme}
      />
    );
  };

  private renderContent = ({ currentTheme, toggleTheme }): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;
    const { themes } = this.state;
    // this.setThemeIndex(currentTheme);

    return (
      <View style={themedStyle.container}>

        <Text category='h6'>Choose theme</Text>

        <RadioGroup
          selectedIndex={this.state.selectedThemeIndex}>
          {themes.map(this.renderThemeItem)}
        </RadioGroup>
      </View>
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

export const Themes = withStyles(ThemesComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 24,
  },
  radioItem: {
    marginBottom: 8,
  },
}));
