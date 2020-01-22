import React from 'react';
import { ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import { ShowcaseSection } from './showcase-section.component';
import { ComponentShowcase, ComponentShowcaseSection } from '../model/showcase.model';

export interface ShowcaseProps {
  showcase: ComponentShowcase;
  settings?: { [prop: string]: any };
  renderItem: (props: any) => React.ReactElement;
}

export const Showcase = (props: ShowcaseProps): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const { showcase } = props;

  const renderShowcaseElement = (showcaseProps: any): React.ReactElement => {
    return props.renderItem({
      ...showcaseProps,
      ...props.settings,
    });
  };

  const renderSectionElement = (item: ComponentShowcaseSection): React.ReactElement => (
    <ShowcaseSection
      section={item}
      renderItem={renderShowcaseElement}
    />
  );

  const renderSectionItem = (item: ComponentShowcaseSection, index: number): React.ReactElement => {
    const listItemElement: React.ReactElement = renderSectionElement(item);

    const borderStyle: ViewStyle | null = index === showcase.sections.length - 1 ? null : styles.itemBorder;

    return React.cloneElement(listItemElement, {
      key: index,
      style: [styles.item, borderStyle, listItemElement.props.style],
    });
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={true}
      bounces={false}>
      {showcase.sections.map(renderSectionItem)}
    </KeyboardAwareScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  item: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'border-basic-color-3',
  },
});

