import React from 'react';
import {
  ImageProps,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  OverflowMenu,
} from '@kitten/ui';
import { MenuIcon } from '@src/assets/icons';
import { OverflowMenuShowcaseModel } from './overflowMenuShowcase.container';

interface ComponentProps {
  menus: OverflowMenuShowcaseModel[];
  onMenuPress: (index: number) => void;
  onMenuItemPress: (menuIndex: number, itemIndex: number) => void;
}

export type OverflowMenuShowcaseComponentProps = ThemedComponentProps & ComponentProps;

class OverflowMenuShowcaseComponent extends React.Component<OverflowMenuShowcaseComponentProps> {

  private onMenuPress = (index: number): void => {
    this.props.onMenuPress(index);
  };

  private onMenuItemPress = (menuItemIndex: number, menuIndex: number): void => {
    this.props.onMenuItemPress(menuIndex, menuItemIndex);
  };

  private renderMenuIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return MenuIcon({ ...style, ...themedStyle.menuIcon });
  };

  public render(): React.ReactNode {
    const { themedStyle, menus } = this.props;

    return (
      <View style={themedStyle.container}>
        <View style={themedStyle.topContainer}>
          <OverflowMenu
            items={menus[0].menu}
            placement={menus[0].placement}
            visible={menus[0].visible}
            size='small'
            style={themedStyle.menu}
            onSelect={(index: number) => this.onMenuItemPress(index, 0)}
            onRequestClose={() => this.onMenuPress(0)}>
            <Button
              appearance='ghost'
              style={themedStyle.menuButton}
              icon={this.renderMenuIcon}
              onPress={() => this.onMenuPress(0)}
            />
          </OverflowMenu>
          <OverflowMenu
            items={menus[1].menu}
            placement={menus[1].placement}
            visible={menus[1].visible}
            size='large'
            style={themedStyle.menu}
            onSelect={(index: number) => this.onMenuItemPress(index, 1)}
            onRequestClose={() => this.onMenuPress(1)}>
            <Button
              appearance='ghost'
              style={themedStyle.menuButton}
              icon={this.renderMenuIcon}
              onPress={() => this.onMenuPress(1)}
            />
          </OverflowMenu>
        </View>
        <View style={themedStyle.bottomContainer}>
          <OverflowMenu
            items={menus[2].menu}
            placement={menus[2].placement}
            visible={menus[2].visible}
            style={themedStyle.menu}
            onSelect={(index: number) => this.onMenuItemPress(index, 2)}
            onRequestClose={() => this.onMenuPress(2)}>
            <Button
              appearance='ghost'
              style={themedStyle.menuButton}
              icon={this.renderMenuIcon}
              onPress={() => this.onMenuPress(2)}
            />
          </OverflowMenu>
          <OverflowMenu
            items={menus[3].menu}
            placement={menus[3].placement}
            visible={menus[3].visible}
            style={themedStyle.menu}
            onSelect={(index: number) => this.onMenuItemPress(index, 3)}
            onRequestClose={() => this.onMenuPress(3)}>
            <Button
              appearance='ghost'
              style={themedStyle.menuButton}
              icon={this.renderMenuIcon}
              onPress={() => this.onMenuPress(3)}
            />
          </OverflowMenu>
        </View>
      </View>
    );
  }
}

export const OverflowMenuShowcase = withStyles(OverflowMenuShowcaseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme['outline-color'],
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  menu: {
    width: 300,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: theme['color-primary-500'],
  },
  menuButton: {
    width: 30,
    height: 30,
  },
}));

