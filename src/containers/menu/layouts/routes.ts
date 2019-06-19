import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  MenuIconAuth,
  MenuIconArticles,
  MenuIconDashboards,
  MenuIconEcommerce,
  MenuIconMessaging,
  MenuIconSocial,
  MenuIconAuthDark,
  MenuIconSocialDark,
  MenuIconArticlesDark,
  MenuIconMessagingDark,
  MenuIconDashboardsDark,
  MenuIconEcommerceDark,
} from '@src/assets/icons';
import {
  ThemeKey,
  ThemeService,
} from '@src/core/themes';
import { LayoutsContainerData } from './type';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Auth',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconAuth(style),
        'Eva Dark': MenuIconAuthDark(style),
      }, theme);
    },
    route: 'Auth',
  },
  {
    title: 'Social',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconSocial(style),
        'Eva Dark': MenuIconSocialDark(style),
      }, theme);
    },
    route: 'Social',
  },
  {
    title: 'Articles',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconArticles(style),
        'Eva Dark': MenuIconArticlesDark(style),
      }, theme);
    },
    route: 'Articles',
  },
  {
    title: 'Messaging',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconMessaging(style),
        'Eva Dark': MenuIconMessagingDark(style),
      }, theme);
    },
    route: 'Messaging',
  },
  {
    title: 'Dashboards',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconDashboards(style),
        'Eva Dark': MenuIconDashboardsDark(style),
      }, theme);
    },
    route: 'Dashboards',
  },
  {
    title: 'Ecommerce',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconEcommerce(style),
        'Eva Dark': MenuIconEcommerceDark(style),
      }, theme);
    },
    route: 'Ecommerce',
  },
];
