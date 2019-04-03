import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  LayoutList,
  ListItem,
} from '@src/components/common';

interface ComponentProps {
  items: ListItem[];
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class ArticlesComponent extends React.Component<Props> {

  private onItemSelect = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, items } = this.props;

    return (
      <LayoutList
        style={themedStyle.container}
        items={items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}

export const Articles = withStyles(ArticlesComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
