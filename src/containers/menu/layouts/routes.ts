import {
  MenuIconArticles,
  MenuIconAuth,
  MenuIconDashboards,
  MenuIconEcommerce,
  MenuIconMessaging,
  MenuIconNavigation,
  MenuIconSocial,
  MenuIconWalkthrough,
} from '@src/assets/icons';
import { LayoutsContainerData } from './type';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Auth',
    icon: MenuIconAuth,
    route: 'Auth',
  },
  {
    title: 'Social',
    icon: MenuIconSocial,
    route: 'Social',
  },
  {
    title: 'Articles',
    icon: MenuIconArticles,
    route: 'Articles',
  },
  {
    title: 'Messaging',
    icon: MenuIconMessaging,
    route: 'Messaging',
  },
  {
    title: 'Dashboards',
    icon: MenuIconDashboards,
    route: 'Dashboards',
  },
  {
    title: 'Walkthrough',
    icon: MenuIconWalkthrough,
    route: '',
  },
  {
    title: 'Ecommerce',
    icon: MenuIconEcommerce,
    route: 'Ecommerce',
  },
  {
    title: 'Navigation',
    icon: MenuIconNavigation,
    route: '',
  },
];
