import React from 'react';
import {
  Image,
  ImageSourcePropType,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ViewPager,
  ViewPagerProps,
} from '@kitten/ui';

// @ts-ignore (`contentWidth` and `children` props override)
interface ComponentProps extends ViewPagerProps {
  data: ImageSourcePropType[];
  contentWidth?: number;
  children?: React.ReactNode;
}

export type MovieScreenshotListProps = ThemedComponentProps & ComponentProps & ComponentProps;

class MovieScreenshotListComponent extends React.Component<MovieScreenshotListProps> {

  private renderItem = (item: ImageSourcePropType, index: number) => {
    const { themedStyle } = this.props;

    return (
      <Image
        key={index}
        style={themedStyle.item}
        source={item}
      />
    );
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, data, ...restProps } = this.props;

    return (
      <ViewPager
        {...restProps}
        contentWidth={180}
        contentContainerStyle={[themedStyle.container, contentContainerStyle]}>
        {data.map(this.renderItem)}
      </ViewPager>
    );
  }
}

export const MovieScreenshotList = withStyles(MovieScreenshotListComponent, (theme: ThemeType) => ({
  container: {
    overflow: 'hidden',
  },
  item: {
    width: 180,
    height: 120,
    borderRadius: 12,
    marginHorizontal: 8,
  },
}));
