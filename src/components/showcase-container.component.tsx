import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout, SafeAreaLayoutProps } from './safe-area-layout.component';
import { Showcase } from './showcase.component';
import { ShowcaseSettings } from './showcase-settings.component';
import { appThemes } from '../app/app-themes';
import { Theme, ThemeContextValue, Theming } from '../services/theme.service';
import { ComponentShowcase, ComponentShowcaseSetting } from '../model/showcase.model';
import { ArrowIosBackIcon } from './icons';

interface ShowcaseContainerProps extends SafeAreaLayoutProps {
  showcase: ComponentShowcase;
  settings?: ComponentShowcaseSetting[];
  renderItem: (props: any) => React.ReactElement;
  onBackPress?: () => void;
}

const themes = Object.keys(appThemes).filter(name => name !== 'brand') as Theme[];

export const ShowcaseContainer = (props: ShowcaseContainerProps): React.ReactElement => {

  const { showcase, settings, renderItem, children, onBackPress, ...layoutProps } = props;

  const [showcaseSettings, setShowcaseSettings] = React.useState({});
  const themeContext: ThemeContextValue = React.useContext(Theming.Context);

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
      insets='top'
      level='2'>
      <TopNavigation
        title={showcase.title}
        leftControl={renderBackAction()}
      />
      <ShowcaseSettings
        themes={themes}
        settings={settings}
        onSettingSelect={onSelectSetting}
        onThemeSelect={themeContext.setCurrentTheme}
        onReset={onResetSettings}
      />
      {children}
      <Showcase
        {...layoutProps}
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
