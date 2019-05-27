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
import { ThemeKey } from '@src/core/themes';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Auth',
    icon: (style: StyleType, currentTheme: ThemeKey) =>
      currentTheme === 'Eva Light' ? MenuIconAuth(style) : MenuIconAuthDark(style),
    route: 'Auth',
  },
  {
    title: 'Social',
    icon: (style: StyleType, currentTheme: ThemeKey) =>
      currentTheme === 'Eva Light' ? MenuIconSocial(style) : MenuIconSocialDark(style),
    route: 'Social',
  },
  {
    title: 'Articles',
    icon: (style: StyleType, currentTheme: ThemeKey) =>
      currentTheme === 'Eva Light' ? MenuIconArticles(style) : MenuIconArticlesDark(style),
    route: 'Articles',
  },
  {
    title: 'Messaging',
    icon: (style: StyleType, currentTheme: ThemeKey) =>
      currentTheme === 'Eva Light' ? MenuIconMessaging(style) : MenuIconMessagingDark(style),
    route: 'Messaging',
  },
  {
    title: 'Dashboards',
    icon: (style: StyleType, currentTheme: ThemeKey) =>
      currentTheme === 'Eva Light' ? MenuIconDashboards(style) : MenuIconDashboardsDark(style),
    route: 'Dashboards',
  },
  {
    title: 'Ecommerce',
    icon: (style: StyleType, currentTheme: ThemeKey) =>
      currentTheme === 'Eva Light' ? MenuIconEcommerce(style) : MenuIconEcommerceDark(style),
    route: 'Ecommerce',
  },
];
