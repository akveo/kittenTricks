import React from 'react';
import {
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
  GridIcon,
  LayoutIcon,
} from '@src/assets/icons';

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
    const { selectedIndex } = this.props;

    return (
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
          icon={GridIcon}
        />
        <BottomNavigationTab
          title='Themes'
          icon={ColorPaletteIcon}
        />
      </BottomNavigation>
    );
  }
}

export const Menu = withStyles(MenuComponent, (theme: ThemeType) => ({

}));
