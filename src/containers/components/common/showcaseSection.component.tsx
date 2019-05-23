import React from 'react';
import {
  View,
  FlexStyle,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  title: string;
  children: ChildrenProp;
}

type ChildrenProp = ShowcaseSectionItem | ShowcaseSectionItem[];
type ShowcaseSectionItem = React.ReactElement<any>;

export type ShowcaseSectionProps = ThemedComponentProps & ViewProps & ComponentProps;

class ShowcaseSectionComponent extends React.Component<ShowcaseSectionProps> {

  private renderItem = (item: ShowcaseSectionItem): ShowcaseSectionItem => {
    const { themedStyle } = this.props;

    const additionalStyle: FlexStyle = themedStyle.item;

    return React.cloneElement(item, {
      style: [item.props.style, additionalStyle],
    });
  };

  private renderItems = (source: ChildrenProp): ShowcaseSectionItem[] => {
    return React.Children.map(source, this.renderItem);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, title, children, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Text
          style={themedStyle.titleLabel}
          category='h6'>
          {title}
        </Text>
        {this.renderItems(children)}
      </View>
    );
  }
}

export const ShowcaseSection = withStyles(ShowcaseSectionComponent, (theme: ThemeType) => ({
  container: {},
  titleLabel: {
    marginVertical: 8,
    ...textStyle.headline,
  },
  item: {
    marginVertical: 8,
  },
}));
