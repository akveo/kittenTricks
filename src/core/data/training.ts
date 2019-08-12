import { Training } from '@src/core/model';
import {
  imageTraining1Bg,
  imageTraining2Bg,
  imageTraining3Bg,
} from '@src/assets/images';

/* tslint:disable */

export const trainings: Training[] = [
  {
    photo: imageTraining1Bg,
    icon: require('../../assets/icons/eva/activity-outline.png'),
    category: 'Basketball',
    time: 16,
    styx: 55,
    description: 'Team sport in which two teams, most commonly of five players.',
  },
  {
    photo: imageTraining2Bg,
    icon: require('../../assets/icons/eva/activity-outline.png'),
    category: 'Running',
    time: 2,
    styx: 55,
    description: 'Great way to get fit and even form new relationships with other runners.',
  },
  {
    photo: imageTraining3Bg,
    icon: require('../../assets/icons/eva/activity-outline.png'),
    category: 'Workout',
    time: 16,
    styx: 55,
    description: 'Workout of the Week: STYX! Our Ultimate cardio pyramid.',
  },
];
