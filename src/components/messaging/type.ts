import { StyleType } from '@kitten/theme';

export enum Alignments {
  'ROW-LEFT' = 'row-left',
  'ROW-RIGHT' = 'row-right',
}

const containerRow: StyleType = {
  flexDirection: 'row',
  alignItems: 'center',
};

export interface Placement {
  style(): StyleType;
}

const placements: { [key in Alignments]: Placement } = {
  [Alignments['ROW-LEFT']]: {
    style(): StyleType {
      return {
        ...containerRow,
        justifyContent: 'flex-start',
      };
    },
  },

  [Alignments['ROW-RIGHT']]: {
    style(): StyleType {
      return {
        ...containerRow,
        justifyContent: 'flex-end',
      };
    },
  },
};

export function getContentAlignment(value: Alignments) {
  return placements[value];
}

export enum ChatFileMessageAppearance {
  full = 'full',
  preview = 'preview',
}
