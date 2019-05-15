import {
  trainings1LayoutImage,
  trainings2LayoutImage,
} from '@src/assets/images';
import { DashboardsContainerData } from './type';

export const routes: DashboardsContainerData[] = [
  {
    title: 'Trainings',
    description: 'Option 1',
    image: trainings1LayoutImage,
    route: 'Trainings 1',
  },
  {
    title: 'Trainings',
    description: 'Option 2',
    image: trainings2LayoutImage,
    route: 'Trainings 2',
  },
];

