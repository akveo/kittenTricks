import React from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Tab,
  TabView,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  selectedIndex: number;
  onTabSelect: (index: number) => void;
}

const ICON1: ImageSourcePropType = { uri: 'https://akveo.github.io/eva-icons/fill/png/128/star.png' };
const ICON2: ImageSourcePropType = { uri: 'https://akveo.github.io/eva-icons/fill/png/128/email.png' };
const ICON3: ImageSourcePropType = { uri: 'https://akveo.github.io/eva-icons/fill/png/128/info.png' };

export type TabViewShowcaseProps = ThemedComponentProps & ComponentProps;

class TabViewShowcaseComponent extends React.Component<TabViewShowcaseProps> {

  private onTabSelect = (index: number): void => {
    this.props.onTabSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, selectedIndex } = this.props;

    return (
      <TabView
        style={themedStyle.container}
        selectedIndex={selectedIndex}
        onSelect={this.onTabSelect}>
        <Tab
          title='TAB 1'
          icon={(style: StyleType) => <Image source={ICON1} style={style}/>}>
          <View style={themedStyle.tabContent}>
            <Text style={themedStyle.text}>Tab 1</Text>
          </View>
        </Tab>
        <Tab
          title='TAB 2'
          icon={(style: StyleType) => <Image source={ICON2} style={style}/>}>
          <View style={themedStyle.tabContent}>
            <Text style={themedStyle.text}>Tab 2</Text>
          </View>
        </Tab>
        <Tab
          title='TAB 3'
          icon={(style: StyleType) => <Image source={ICON3} style={style}/>}>
          <View style={themedStyle.tabContent}>
            <Text style={themedStyle.text}>Tab 3</Text>
          </View>
        </Tab>
      </TabView>
    );
  }
}

export const TabViewShowcase = withStyles(TabViewShowcaseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    padding: 16,
    backgroundColor: theme['color-basic-100'],
  },
  text: textStyle.paragraph,
}));

