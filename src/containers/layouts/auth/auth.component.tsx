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

export type AuthProps = ThemedComponentProps & ComponentProps;

class AuthComponent extends React.Component<AuthProps> {

  private onItemSelect = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, items } = this.props;

    return (
      <LayoutList
        style={themedStyle.container}
        data={items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}

export const Auth = withStyles(AuthComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
