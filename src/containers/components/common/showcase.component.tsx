import React from 'react';
import {
  FlexStyle,
  Platform,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ShowcaseSectionProps } from './showcaseSection.component';
import {
  ScrollableAvoidKeyboard,
  ScrollableAvoidKeyboardProps,
} from '@src/components/common';

interface ComponentProps {
  children?: ChildrenProp;
}

type ChildrenProp = ShowcaseSectionElement | ShowcaseSectionElement[];

export type ShowcaseProps = ThemedComponentProps & ComponentProps & ScrollableAvoidKeyboardProps;

type ShowcaseSectionElement = React.ReactElement<ShowcaseSectionProps>;

class ShowcaseComponent extends React.Component<ShowcaseProps> {

  private keyboardOffset: number = Platform.select({
    ios: 0,
    android: 228,
  });

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
      <ScrollableAvoidKeyboard
        style={[themedStyle.container, style]}
        extraScrollHeight={this.keyboardOffset}
        {...restProps}>
        {this.renderSections(children)}
      </ScrollableAvoidKeyboard>
    );
  }
}

export const Showcase = withStyles(ShowcaseComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  item: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
}));
