import React from 'react';

export interface ComponentShowcase {
  sections: ComponentShowcaseSection[];
}

export interface ComponentShowcaseSection {
  title: string;
  items: ComponentShowcaseItem[];
}

export interface ComponentShowcaseItem {
  title: string;
  view: () => React.ReactElement<any>;
}
