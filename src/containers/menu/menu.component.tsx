import React from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  ThemeProvider,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@kitten/ui';
import {
  ColorPaletteIcon,
  LayoutIcon,
  StarIconOutline,
} from '@src/assets/icons';
import { themes } from '@src/core/themes';

interface ComponentProps {
  selectedIndex: number;
  onTabSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class MenuComponent extends React.Component<Props> {

  private onTabSelect = (index: number) => {
    this.props.onTabSelect(index);
  };

  public render(): React.ReactNode {
    const { selectedIndex, themedStyle } = this.props;

    return (
      <SafeAreaView style={themedStyle.safeAreaContainer}>
        <ThemeProvider theme={{...this.props.theme, ...themes['App Theme']}}>
          <BottomNavigation
            appearance='noIndicator'
            selectedIndex={selectedIndex}
            onSelect={this.onTabSelect}>
            <BottomNavigationTab
              title='Layouts'
              icon={LayoutIcon}
            />
            <BottomNavigationTab
              title='Components'
              icon={StarIconOutline}
            />
            <BottomNavigationTab
              title='Themes'
              icon={ColorPaletteIcon}
            />
          </BottomNavigation>
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}

export const Menu = withStyles(MenuComponent, (theme: ThemeType) => ({
  safeAreaContainer: {
    backgroundColor: theme['background-color-default-1'],
  },
}));
