import { StyleSheet } from 'react-native';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../../../model/showcase.model';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#8F9BB3',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  customPosition: {
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
