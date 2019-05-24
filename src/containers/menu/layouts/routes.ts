import { StyleType } from '@kitten/theme';
import {
  MenuIconAuth,
  MenuIconAuthDark,
  MenuIconSocialDark,
  MenuIconArticles,
  MenuIconDashboards,
  MenuIconEcommerce,
  MenuIconMessaging,
  MenuIconNavigation,
  MenuIconSocial,
  MenuIconWalkthrough,
  MenuIconArticlesDark,
  MenuIconMessagingDark,
  MenuIconDashboardsDark,
  MenuIconWalkthroughDark,
  MenuIconEcommerceDark,
  MenuIconNavigationDark,
} from '@src/assets/icons';
import { LayoutsContainerData } from './type';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Auth',
    icon: (style: StyleType, currentTheme: 'light' | 'dark') =>
      currentTheme === 'light' ? MenuIconAuth(style) : MenuIconAuthDark(style),
    route: 'Auth',
  },
  {
    title: 'Social',
    icon: (style: StyleType, currentTheme: 'light' | 'dark') =>
      currentTheme === 'light' ? MenuIconSocial(style) : MenuIconSocialDark(style),
    route: 'Social',
  },
  {
    title: 'Articles',
    icon: (style: StyleType, currentTheme: 'light' | 'dark') =>
      currentTheme === 'light' ? MenuIconArticles(style) : MenuIconArticlesDark(style),
    route: 'Articles',
  },
  {
    title: 'Messaging',
    icon: (style: StyleType, currentTheme: 'light' | 'dark') =>
      currentTheme === 'light' ? MenuIconMessaging(style) : MenuIconMessagingDark(style),
    route: 'Messaging',
  },
  {
    title: 'Dashboards',
    icon: (style: StyleType, currentTheme: 'light' | 'dark') =>
      currentTheme === 'light' ? MenuIconDashboards(style) : MenuIconDashboardsDark(style),
    route: 'Dashboards',
  },
  {
    title: 'Ecommerce',
    icon: (style: StyleType, currentTheme: 'light' | 'dark') =>
      currentTheme === 'light' ? MenuIconEcommerce(style) : MenuIconEcommerceDark(style),
    route: 'Ecommerce',
  },
];
