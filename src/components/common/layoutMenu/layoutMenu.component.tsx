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
  GridIcon,
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

class LayoutMenuComponent extends React.Component<LayoutMenuProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data, ...restProps } = this.props;

    return (
      <ThemeProvider theme={{ ...this.props.theme, ...themes['App Theme'] }}>
        <TabView {...restProps}>
          <Tab icon={GridIcon}>
            <LayoutGridList
              style={themedStyle.listContainer}
              contentContainerStyle={themedStyle.listContentContainer}
              data={data}
              onItemPress={this.onItemPress}
            />
          </Tab>
          <Tab icon={ListIconFill}>
            <LayoutList
              style={themedStyle.listContainer}
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
  listContainer: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
}));
