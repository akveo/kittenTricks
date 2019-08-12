import React from 'react';
import {
  ThemedComponentProps,
  ThemeProvider,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Tab,
  TabProps,
  TabView,
  TabViewProps,
} from '@kitten/ui';
import {
  GridIconOutline,
  ListIconFill,
} from '@src/assets/icons';
import { LayoutGridList } from '../layoutGridList';
import { LayoutList } from '../layoutList';
import { LayoutMenuItemData } from './type';
import { themes } from '@src/core/themes';

// @ts-ignore (override `children` prop)
interface ComponentProps extends TabViewProps {
  data: LayoutMenuItemData[];
  onItemPress: (index: number) => void;
  children?: ChildrenProp;
}

export type LayoutMenuProps = ThemedComponentProps & ComponentProps;

type ChildElement = React.ReactElement<TabProps>;
type ChildrenProp = ChildElement | ChildElement[];

interface TabLoadingMap {
  [key: string]: boolean;
}

class LayoutMenuComponent extends React.Component<LayoutMenuProps> {

  private tabLoadingMap: TabLoadingMap;

  constructor(props: LayoutMenuProps) {
    super(props);
    this.tabLoadingMap = this.createTabLoadingMap(props.selectedIndex);
  }

  public componentWillUpdate(nextProps: LayoutMenuProps) {
    const nextLoadingMap: TabLoadingMap = this.createTabLoadingMap(nextProps.selectedIndex);
    this.tabLoadingMap = { ...this.tabLoadingMap, ...nextLoadingMap };
  }

  private shouldLoadTabContentElement = (index: number): boolean => {
    return this.tabLoadingMap[`${index}`];
  };

  private createTabLoadingMap = (selectedIndex: number): TabLoadingMap => {
    return { [`${selectedIndex}`]: true };
  };

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data, ...restProps } = this.props;

    return (
      <ThemeProvider theme={{ ...this.props.theme, ...themes['App Theme'] }}>
        <TabView
          shouldLoadComponent={this.shouldLoadTabContentElement}
          {...restProps}>
          <Tab icon={GridIconOutline}>
            <LayoutGridList
              contentContainerStyle={themedStyle.listContentContainer}
              data={data}
              onItemPress={this.onItemPress}
            />
          </Tab>
          <Tab icon={ListIconFill}>
            <LayoutList
              contentContainerStyle={themedStyle.listContentContainer}
              data={data}
              onItemPress={this.onItemPress}
            />
          </Tab>
        </TabView>
      </ThemeProvider>
    );
  }
}

export const LayoutMenu = withStyles(LayoutMenuComponent, (theme: ThemeType) => ({
  listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
}));
