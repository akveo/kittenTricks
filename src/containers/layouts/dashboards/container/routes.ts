import {
  imageTrainings1Layout,
  imageTrainings2Layout,
} from '@src/assets/images';
import { DashboardsContainerData } from './type';

export const routes: DashboardsContainerData[] = [
  {
    title: 'Trainings',
    description: 'Option 1',
    image: imageTrainings1Layout.imageSource,
    route: 'Trainings 1',
  },
  {
    title: 'Trainings',
    description: 'Option 2',
    image: imageTrainings2Layout.imageSource,
    route: 'Trainings 2',
  },
];

