import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { Button, ButtonGroup, Divider, List, ThemeProvider, Toggle, TopNavigation } from '@ui-kitten/components';
import { ThemeCard } from './theme-card.component';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ThemeContextValue, Theming } from '../../services/theme.service';
import { ThemesService } from './themes.service';
import { ThemeItem } from './type';
import { appThemes } from '../../app/app-themes';


export const ThemesScreen = (): React.ReactElement => {

  const themeContext: ThemeContextValue = React.useContext(Theming.Context);
  const themes: ThemeItem[] = ThemesService.createThemeListItems(appThemes, themeContext.currentMapping);

  const onItemPress = (info: ListRenderItemInfo<ThemeItem>): void => {
    themeContext.setCurrentTheme(info.item.name);
  };

  const isActiveTheme = (theme: ThemeItem): boolean => {
    return themeContext.currentMapping === theme.mapping && themeContext.currentTheme === theme.name;
  };

  const shouldDisableItem = (theme: ThemeItem): boolean => {
    return themeContext.currentTheme === theme.name;
  };

  const createThemeNameForItem = (theme: ThemeItem): string => {
    return `${theme.mapping} ${theme.name}`.toUpperCase();
  };

  const renderItem = (info: ListRenderItemInfo<ThemeItem>): React.ReactElement => (
    <ThemeProvider theme={info.item.theme}>
      <ThemeCard
        style={styles.item}
        title={createThemeNameForItem(info.item)}
        isActive={isActiveTheme(info.item)}
        disabled={shouldDisableItem(info.item)}
        onPress={() => onItemPress(info)}
      />
    </ThemeProvider>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'
      level='2'>
      <TopNavigation
        title='Kitten Tricks'
        alignment='center'
      />
      <Divider/>
      <List
        contentContainerStyle={styles.container}
        data={themes}
        renderItem={renderItem}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 8,
  },
  item: {
    margin: 8,
  },
  designSystemToggle: {
    margin: 8,
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
});
