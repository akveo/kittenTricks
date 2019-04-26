import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps, ListDerivedProps {
  title: string;
  children: React.ReactElement<any>;
  onPress: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class ComponentsListItemComponent extends React.Component<Props> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, title, children, ...restProps } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        {children}
        <Text
          style={themedStyle.title}
          appearance='dark'
          category='s2'>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export const ComponentsListItem = withStyles(ComponentsListItemComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 4,
    borderColor: theme['color-basic-300'],
  },
  icon: {
    width: 48,
    height: 48,
    tintColor: theme['color-primary-500'],
  },
  title: textStyle.subtitle,
}));
