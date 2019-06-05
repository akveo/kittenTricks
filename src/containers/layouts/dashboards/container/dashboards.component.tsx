import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { LayoutMenu } from '@src/components/common';
import { DashboardsData } from './type';

interface ComponentProps {
  data: DashboardsData[];
  selectedLayoutIndex: number;
  onItemSelect: (index: number) => void;
  onLayoutSelect: (index: number) => void;
}

export type DashboardsProps = ThemedComponentProps &  ComponentProps;

class DashboardsComponent extends React.Component<DashboardsProps> {

  private onCategorySelect = (index: number) => {
    this.props.onLayoutSelect(index);
  };

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data, selectedLayoutIndex } = this.props;

    return (
      <LayoutMenu
        style={themedStyle.container}
        data={data}
        selectedIndex={selectedLayoutIndex}
        onSelect={this.onCategorySelect}
        onItemPress={this.onItemPress}
      />
    );
  }
}

export const Dashboards = withStyles(DashboardsComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
}));
