import { LayoutItem } from '../../model/layout-item.model';

export interface DashboardData extends LayoutItem {
  route: string;
}

export const data: DashboardData[] = [
  {
    title: 'Trainings',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-training-1.jpg'),
    route: 'Trainings1',
  },
  {
    title: 'Trainings',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-training-2.jpg'),
    route: 'Trainings2',
  },
  {
    title: 'Settings',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-settings.jpg'),
    route: 'Settings',
  },
];
