import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout, SafeAreaLayoutProps } from './safe-area-layout.component';
import { Showcase } from './showcase.component';
import { ShowcaseSettings } from './showcase-settings.component';
import { Theme, ThemeContextValue, Theming } from '../services/theme.service';
import { ComponentShowcase, ComponentShowcaseSetting } from '../model/showcase.model';
import { ArrowIosBackIcon } from './icons';

interface ShowcaseContainerProps extends SafeAreaLayoutProps {
  showcase: ComponentShowcase;
  settings?: ComponentShowcaseSetting[];
  renderItem: (props: any) => React.ReactElement;
  onBackPress?: () => void;
}

const themes: Theme[] = ['light', 'dark'];

export const ShowcaseContainer = (props: ShowcaseContainerProps): React.ReactElement => {

  const { showcase, settings, renderItem, children, onBackPress, ...showcaseProps } = props;

  const [showcaseSettings, setShowcaseSettings] = React.useState({});
  const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);

  const onSelectSetting = (selectedSettings: { [prop: string]: any }): void => {
    setShowcaseSettings({ ...settings, ...selectedSettings });
  };

  const onResetSettings = (): void => {
    setShowcaseSettings({});
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={onBackPress}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title={showcase.title}
        accessoryLeft={renderBackAction}
      />
      <Divider/>
      <ShowcaseSettings
        themes={themes}
        settings={settings}
        onSettingSelect={onSelectSetting}
        onThemeSelect={themeContext.setCurrentTheme}
        onReset={onResetSettings}
      />
      <Divider/>
      {children}
      <Showcase
        {...showcaseProps}
        showcase={showcase}
        renderItem={renderItem}
        settings={showcaseSettings}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
