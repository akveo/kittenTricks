import { StyleSheet } from 'react-native';
import { ComponentShowcase, ComponentShowcaseItem, ComponentShowcaseSection } from '../../../model/showcase.model';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#636e80',
    width: 200,
    height: 200,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  customPosition: {
    left: 100,
    top: 100,
  },
});

const defaultModal: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const styledModal: ComponentShowcaseItem = {
  title: 'Styled Modal',
  props: {
    ...defaultModal.props,
    style: styles.container,
  },
};

const customPositionModal: ComponentShowcaseItem = {
  title: 'Custom Position',
  props: {
    ...defaultModal.props,
    style: [styles.container, styles.customPosition],
  },
};

const styledBackdropModal: ComponentShowcaseItem = {
  title: 'Styled Backdrop',
  props: {
    ...styledModal.props,
    backdropStyle: styles.backdrop,
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default Modal',
  items: [
    defaultModal,
  ],
};

const stylingSection: ComponentShowcaseSection = {
  title: 'Styling',
  items: [
    styledModal,
    styledBackdropModal,
    customPositionModal,
  ],
};

export const modalShowcase: ComponentShowcase = {
  title: 'Modal',
  sections: [
    defaultSection,
    stylingSection,
  ],
};
