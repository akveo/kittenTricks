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
import { Text } from '@src/components/common';

interface ListDerivedProps {
  index: number;
}

interface ComponentProps extends ListDerivedProps {
  title: string;
  description: string;
  onPress: (index: number) => void;
}

export type LayoutListItemProps = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

class LayoutListItemComponent extends React.Component<LayoutListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, title, description, ...restProps } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.65}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Text style={themedStyle.title}>{title}</Text>
        <Text style={themedStyle.description}>{description}</Text>
      </TouchableOpacity>
    );
  }
}

export const LayoutListItem = withStyles(LayoutListItemComponent, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DDE1EB',
  },
  title: {
    fontSize: 15,
    color: '#8992A3',
  },
  description: {
    marginTop: 8,
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: '#0D1C2E',
  },
}));
