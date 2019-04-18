import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface TouchableProps extends TouchableOpacityProps {
  onPress: (index: number) => void;
}

interface ComponentProps extends ListDerivedProps, TouchableProps {
  source: ImageSourcePropType;
}

export type ApartmentPhotoListItemProps = ThemedComponentProps & TouchableProps & ComponentProps;

class ApartmentPhotoListItemComponent extends React.Component<ApartmentPhotoListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, source, ...restProps } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Image
          style={themedStyle.image}
          source={source}
        />
      </TouchableOpacity>
    );
  }
}

export const ApartmentPhotoListItem = withStyles(ApartmentPhotoListItemComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  description: {},
}));
