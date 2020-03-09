import React from 'react';
import { I18nManager, Platform, StyleSheet, ViewProps } from 'react-native';
import { Button, CheckBox, Layout, MenuItem, OverflowMenu } from '@ui-kitten/components';
import { ColorPaletteIcon, SettingsIcon, TrashIcon } from './icons';
import { ComponentShowcaseSetting } from '../model/showcase.model';
import { Theme } from '../services/theme.service';
import { AppReloadService } from '../services/app-reload.service';

export interface ShowcaseSettingsProps extends ViewProps {
  themes?: Theme[];
  settings?: ComponentShowcaseSetting[];
  onThemeSelect?: (theme: Theme) => void;
  onSettingSelect?: (setting: { [prop: string]: any }) => void;
  onReset: () => void;
}

export const ShowcaseSettings = (props: ShowcaseSettingsProps): React.ReactElement => {

  const [themesMenuVisible, setThemesMenuVisible] = React.useState<boolean>(false);
  const [settingsMenuVisible, setSettingsMenuVisible] = React.useState<boolean>(false);
  const [selectedThemeIndex, setSelectedThemeIndex] = React.useState(null);
  const [selectedSettingIndex, setSelectedSettingIndex] = React.useState(null);

  const onResetButtonPress = (): void => {
    props.onReset();
  };

  const onSettingSelect = (index: number): void => {
    const { [index]: setting } = props.settings;

    props.onSettingSelect({
      [setting.propertyName]: setting.value,
    });

    setSelectedSettingIndex(index);
    setSettingsMenuVisible(false);
  };

  const onThemeSelect = (index: number): void => {
    props.onThemeSelect(props.themes[index]);

    setSelectedThemeIndex(index);
    setThemesMenuVisible(false);
  };

  const toggleThemesMenu = (): void => {
    setThemesMenuVisible(!themesMenuVisible);
  };

  const toggleSettingsMenu = (): void => {
    setSettingsMenuVisible(!settingsMenuVisible);
  };

  const toggleRtl = (): void => {
    I18nManager.forceRTL(!I18nManager.isRTL);
    I18nManager.allowRTL(I18nManager.isRTL);
    Platform.OS !== 'web' && AppReloadService.reload();
  };

  const renderSettingMenuItem = (setting: ComponentShowcaseSetting, index: number): React.ReactElement => (
    <MenuItem
      key={index}
      title={setting.description || `${setting.propertyName}: ${setting.value}`}
      selected={selectedSettingIndex === index}
      onPress={() => onSettingSelect(index)}
    />
  );

  const renderThemeMenuItem = (theme: Theme, index: number): React.ReactElement => (
    <MenuItem
      key={index}
      title={theme}
      selected={selectedThemeIndex === index}
      onPress={() => onThemeSelect(index)}
    />
  );

  const renderRTLToggle = (): React.ReactElement => (
    <CheckBox
      checked={I18nManager.isRTL}
      onChange={toggleRtl}>
      RTL
    </CheckBox>
  );

  const renderSettingsButton = (): React.ReactElement => (
    <Button
      size='tiny'
      accessoryLeft={SettingsIcon}
      disabled={!props.settings}
      onPress={toggleSettingsMenu}>
      SETTINGS
    </Button>
  );

  const renderThemesButton = (): React.ReactElement => (
    <Button
      size='tiny'
      accessoryLeft={ColorPaletteIcon}
      disabled={!props.themes}
      onPress={toggleThemesMenu}>
      THEMES
    </Button>
  );

  return (
    <Layout
      style={[styles.container, props.style]}
      level='1'>
      <OverflowMenu
        visible={themesMenuVisible}
        anchor={renderThemesButton}
        onBackdropPress={toggleThemesMenu}>
        {props.themes && props.themes.map(renderThemeMenuItem)}
      </OverflowMenu>
      <OverflowMenu
        visible={settingsMenuVisible}
        anchor={renderSettingsButton}
        onBackdropPress={toggleSettingsMenu}>
        {props.settings && props.settings.map(renderSettingMenuItem)}
      </OverflowMenu>
      <Button
        size='tiny'
        status='danger'
        accessoryLeft={TrashIcon}
        disabled={!props.settings}
        onPress={onResetButtonPress}>
        RESET
      </Button>
      {__DEV__ && renderRTLToggle()}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
  },
});
