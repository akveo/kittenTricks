import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Chips,
  ChipsProps,
  Text,
} from '@src/components/common';

// @ts-ignore (`children` prop override)
interface ComponentProps extends ChipsProps {
  children?: React.ReactText;
}

export type MovieCategoryListItemProps = ThemedComponentProps & ComponentProps;

class MovieCategoryListItemComponent extends React.Component<MovieCategoryListItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, children, ...restProps} = this.props;

    return (
      <Chips
        {...restProps}
        style={[themedStyle.container, style]}>
        <Text style={themedStyle.label}>{children}</Text>
      </Chips>
    );
  }
}

export const MovieCategoryListItem = withStyles(MovieCategoryListItemComponent, (theme: ThemeType) => ({
  container: {},
  label: {
    fontSize: 11,
    lineHeight: 16,
  },
}));
