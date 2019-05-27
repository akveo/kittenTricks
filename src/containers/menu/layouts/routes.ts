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
import { MenuImage } from '../menuImage';
import { CurrentTheme } from '@src/core/model';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Auth',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: MenuIconAuth(style),
        dark: MenuIconAuthDark(style),
      }, currentTheme),
    route: 'Auth',
  },
  {
    title: 'Social',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: MenuIconSocial(style),
        dark: MenuIconSocialDark(style),
      }, currentTheme),
    route: 'Social',
  },
  {
    title: 'Articles',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: MenuIconArticles(style),
        dark: MenuIconArticlesDark(style),
      }, currentTheme),
    route: 'Articles',
  },
  {
    title: 'Messaging',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: MenuIconMessaging(style),
        dark: MenuIconMessagingDark(style),
      }, currentTheme),
    route: 'Messaging',
  },
  {
    title: 'Dashboards',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: MenuIconDashboards(style),
        dark: MenuIconDashboardsDark(style),
      }, currentTheme),
    route: 'Dashboards',
  },
  {
    title: 'Ecommerce',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: MenuIconEcommerce(style),
        dark: MenuIconEcommerceDark(style),
      }, currentTheme),
    route: 'Ecommerce',
  },
];
