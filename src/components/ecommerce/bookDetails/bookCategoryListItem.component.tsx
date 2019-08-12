import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import {
  Chips,
  ChipsProps,
  textStyle,
} from '@src/components/common';

// @ts-ignore (`children` prop override)
interface ComponentProps extends ChipsProps {
  children?: string;
}

export type BookCategoryListItemProps = ThemedComponentProps & ComponentProps;

class BookCategoryListItemComponent extends React.Component<BookCategoryListItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, children, ...restProps } = this.props;

    return (
      <Chips
        {...restProps}
        style={[themedStyle.container, style]}>
        <Text
          style={themedStyle.label}
          category='c1'>
          {children}
        </Text>
      </Chips>
    );
  }
}

export const BookCategoryListItem = withStyles(BookCategoryListItemComponent, (theme: ThemeType) => ({
  container: {},
  label: {
    color: 'white',
    ...textStyle.caption1,
  },
}));
