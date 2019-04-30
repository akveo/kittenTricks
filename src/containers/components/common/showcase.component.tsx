import React from 'react';
import {
  FlexStyle,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ShowcaseSectionProps } from './showcaseSection.component';

interface ComponentProps {
  children?: ChildrenProp;
}

type ChildrenProp = ShowcaseSectionElement | ShowcaseSectionElement[];

export type ShowcaseProps = ThemedComponentProps & ComponentProps & ScrollViewProps;

type ShowcaseSectionElement = React.ReactElement<ShowcaseSectionProps>;

class ShowcaseComponent extends React.Component<ShowcaseProps> {

  private isLastItem = (index: number): boolean => {
    const { children } = this.props;

    return React.Children.count(children) - 1 === index;
  };

  private renderSection = (section: ShowcaseSectionElement, index: number): ShowcaseSectionElement => {
    const { themedStyle } = this.props;

    const additionalStyle: FlexStyle = this.isLastItem(index) ? null : themedStyle.itemBorder;

    return React.cloneElement(section, {
      style: [themedStyle.item, section.props.style, additionalStyle],
    });
  };

  private renderSections = (source: ChildrenProp): ShowcaseSectionElement[] => {
    return React.Children.map(source, this.renderSection);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, children, ...restProps } = this.props;

    return (
      <ScrollView
        style={[themedStyle.container, style]}
        {...restProps}>
        {this.renderSections(children)}
      </ScrollView>
    );
  }
}

export const Showcase = withStyles(ShowcaseComponent, (theme: ThemeType) => ({
  container: {},
  item: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme['color-basic-200'],
  },
}));
