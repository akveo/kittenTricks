import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ListRenderItemInfo,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
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

  private renderItem = (info: ListRenderItemInfo<ImageSourcePropType>) => {
    const { themedStyle } = this.props;

    return (
      <Image
        style={themedStyle.item}
        source={info.item}
      />
    );
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, data, ...restProps } = this.props;

    return (
      <List
        {...restProps}
        contentContainerStyle={[themedStyle.container, contentContainerStyle]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={this.renderItem}
      />
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
