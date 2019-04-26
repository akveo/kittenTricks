import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';

const styles = {
  headline: {
    fontFamily: 'raleway-extra-bold',
  },
  subtitle: {
    fontFamily: 'opensans-semibold',
  },
  paragraph: {
    fontFamily: 'opensans-regular',
  },
  caption: {
    fontFamily: 'opensans-semibold',
  },
  overline: {
    fontFamily: 'opensans-bold',
  },
  label: {
    fontFamily: 'opensans-bold',
  },
};

const h1Text: ComponentShowcaseItem = {
  title: 'H1 Headline',
  props: {
    category: 'h1',
    style: styles.headline,
  },
};

const h2Text: ComponentShowcaseItem = {
  title: 'H2 Headline',
  props: {
    category: 'h2',
    style: styles.headline,
  },
};

const h3Text: ComponentShowcaseItem = {
  title: 'H3 Headline',
  props: {
    category: 'h3',
    style: styles.headline,
  },
};

const h4Text: ComponentShowcaseItem = {
  title: 'H4 Headline',
  props: {
    category: 'h4',
    style: styles.headline,
  },
};

const h5Text: ComponentShowcaseItem = {
  title: 'H5 Headline',
  props: {
    category: 'h5',
    style: styles.headline,
  },
};

const h6Text: ComponentShowcaseItem = {
  title: 'H6 Headline',
  props: {
    category: 'h6',
    style: styles.headline,
  },
};

const s1Text: ComponentShowcaseItem = {
  title: 'S1 Subtitle',
  props: {
    category: 's1',
    style: styles.subtitle,
  },
};

const s2Text: ComponentShowcaseItem = {
  title: 'S2 Subtitle',
  props: {
    category: 's2',
    style: styles.subtitle,
  },
};

const p1Text: ComponentShowcaseItem = {
  title: 'P1 Paragraph',
  props: {
    category: 'p1',
    style: styles.paragraph,
  },
};

const p2Text: ComponentShowcaseItem = {
  title: 'P2 Paragraph',
  props: {
    category: 'p2',
    style: styles.paragraph,
  },
};

const c1Text: ComponentShowcaseItem = {
  title: 'C1 Caption',
  props: {
    category: 'c1',
    style: styles.caption,
  },
};

const c2Text: ComponentShowcaseItem = {
  title: 'C2 Caption',
  props: {
    category: 'c2',
    style: styles.caption,
  },
};

const overlineText: ComponentShowcaseItem = {
  title: 'Overline',
  props: {
    category: 'overline',
    style: styles.overline,
  },
};

const labelText: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    category: 'label',
    style: styles.label,
  },
};

const primaryText: ComponentShowcaseItem = {
  title: 'Primary',
  props: {
    status: 'primary',
    style: styles.paragraph,
  },
};

const successText: ComponentShowcaseItem = {
  title: 'Success',
  props: {
    status: 'success',
    style: styles.paragraph,
  },
};

const infoText: ComponentShowcaseItem = {
  title: 'Info',
  props: {
    status: 'info',
    style: styles.paragraph,
  },
};

const warningText: ComponentShowcaseItem = {
  title: 'Warning',
  props: {
    status: 'warning',
    style: styles.paragraph,
  },
};

const dangerText: ComponentShowcaseItem = {
  title: 'Danger',
  props: {
    status: 'danger',
    style: styles.paragraph,
  },
};

const statusSection: ComponentShowcaseSection = {
  title: 'Status',
  items: [
    primaryText,
    successText,
    infoText,
    warningText,
    dangerText,
  ],
};


const categorySection: ComponentShowcaseSection = {
  title: 'Category',
  items: [
    h1Text,
    h2Text,
    h3Text,
    h4Text,
    h5Text,
    h6Text,
    s1Text,
    s2Text,
    p1Text,
    p2Text,
    c1Text,
    c2Text,
    overlineText,
    labelText,
  ],
};

export const textShowcase: ComponentShowcase = {
  sections: [
    categorySection,
    statusSection,
  ],
};

