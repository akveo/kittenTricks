import { ThemeType } from '@ui-kitten/components';
import { Theme } from '../../services/theme.service';

export interface ThemeItem {
  mapping: string;
  name: Theme;
  theme: ThemeType;
}
