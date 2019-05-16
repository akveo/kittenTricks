import { Exercise } from '@src/core/model/exercise.model';
import {
  imageExercise1Bg,
  imageExercise2Bg,
  imageExercise3Bg,
  imageExercise4Bg,
  imageExercise5Bg,
  imageExercise6Bg,
  imageExercise7Bg,
} from '@src/assets/images';

export const exercises1: Exercise[] = [
  {
    name: 'Chest',
    image: imageExercise1Bg,
    duration: '55 min',
    level: 'Easy',
    energy: '150 kcal',
  },
  {
    name: 'Workout',
    image: imageExercise2Bg,
    duration: '25 min',
    level: 'Hard',
    energy: '50 kcal',
  },
  {
    name: 'Personalized Training',
    image: imageExercise3Bg,
    duration: '45 min',
    level: 'Medium',
    energy: '300 kcal',
  },
  {
    name: 'Biceps',
    image: imageExercise4Bg,
    duration: '30 min',
    level: 'Medium',
    energy: '150 kcal',
  },
];

export const exercises2: Exercise[] = [
  {
    name: 'Workout For Women',
    image: imageExercise5Bg,
    duration: '30 min',
    level: 'Easy',
    energy: '150 kcal',
  },
  {
    name: 'Group Workout',
    image: imageExercise6Bg,
    duration: '30 min',
    level: 'Hard',
    energy: '150 kcal',
  },
  {
    name: 'Gymnastics',
    image: imageExercise7Bg,
    duration: '30 min',
    level: 'Medium',
    energy: '150 kcal',
  },
];
