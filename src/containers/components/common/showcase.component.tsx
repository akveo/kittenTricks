import React from 'react';
import {
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ShowcaseSection,
  ShowcaseSectionProps,
} from './showcaseSection.component';
import {
  ComponentShowcase,
  ComponentShowcaseSection,
} from '../common/type';

interface ComponentProps {
  showcase: ComponentShowcase;
}

export type ShowcaseProps = ThemedComponentProps & ComponentProps;

class ShowcaseComponent extends React.Component<ShowcaseProps> {

  private renderItem = (item: ComponentShowcaseSection, index: number): React.ReactElement<ShowcaseSectionProps> => {
    return (
      <ShowcaseSection
        key={index}
        section={item}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, showcase } = this.props;

    return (
      <ScrollView style={themedStyle.container}>
        {showcase.sections.map(this.renderItem)}
      </ScrollView>
    );
  }
}

export const Showcase = withStyles(ShowcaseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
}));
