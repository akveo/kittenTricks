import { StyleType } from '@kitten/theme';
import {
  MenuIconAuth,
  MenuIconAuthDark,
  MenuIconSocialDark,
  MenuIconArticles,
  MenuIconDashboards,
  MenuIconEcommerce,
  MenuIconMessaging,
  MenuIconSocial,
  MenuIconArticlesDark,
  MenuIconMessagingDark,
  MenuIconDashboardsDark,
  MenuIconEcommerceDark,
} from '@src/assets/icons';
import { LayoutsContainerData } from './type';
import {
  ThemeKey,
  ThemeService,
} from '@src/core/themes';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Auth',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconAuth(style),
        'Eva Dark': MenuIconAuthDark(style),
      }, currentTheme);
    },
    route: 'Auth',
  },
  {
    title: 'Social',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return  ThemeService.select({
        'Eva Light': MenuIconSocial(style),
        'Eva Dark': MenuIconSocialDark(style),
      }, currentTheme);
    },
    route: 'Social',
  },
  {
    title: 'Articles',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconArticles(style),
        'Eva Dark': MenuIconArticlesDark(style),
      }, currentTheme);
    },
    route: 'Articles',
  },
  {
    title: 'Messaging',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconMessaging(style),
        'Eva Dark': MenuIconMessagingDark(style),
      }, currentTheme);
    },
    route: 'Messaging',
  },
  {
    title: 'Dashboards',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconDashboards(style),
        'Eva Dark': MenuIconDashboardsDark(style),
      }, currentTheme);
    },
    route: 'Dashboards',
  },
  {
    title: 'Ecommerce',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconEcommerce(style),
        'Eva Dark': MenuIconEcommerceDark(style),
      }, currentTheme);
    },
    route: 'Ecommerce',
  },
];
