import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { LayoutMenu } from '@src/components/common';
import { WalkthroughData } from './type';

interface ComponentProps {
  data: WalkthroughData[];
  selectedLayoutIndex: number;
  onItemSelect: (index: number) => void;
  onLayoutSelect: (index: number) => void;
}

export type WalkthroughProps = ThemedComponentProps &  ComponentProps;

class WalkthroughComponent extends React.Component<WalkthroughProps> {

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

export const Walkthrough = withStyles(WalkthroughComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
