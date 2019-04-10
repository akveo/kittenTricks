import { Exercise } from '@src/core/model/exercise.model';

export const exercises: Exercise[] = [
  {
    name: 'Chest',
    image: 'https://www.bodybuilding.com/images/2016/june/5-chest-workouts-for-mass-v2-1-700xh.jpg',
    duration: '55 min',
    level: 'Easy',
    energy: '150 kcal',
  },
  {
    name: 'Workout',
    image: 'https://media1.popsugar-assets.com/files/thumbor/1sGY_d5IMkShgP1nfSXNf9BbwWI/fit-in/550x550/' +
      'filters:format_auto-!!-:strip_icc-!!-/2018/10/17/833/n/1922729/0a9b9e035bc786a8aefb45.93765790_/i/' +
      '30-Minute-CrossFit-Workout.jpg',
    duration: '25 min',
    level: 'Hard',
    energy: '50 kcal',
  },
  {
    name: 'Personalized Training',
    image: 'https://media.self.com/photos/57617a01ecb631d76745ce73/master/pass/trainer-to-go-abs-workout.jpg',
    duration: '45 min',
    level: 'Medium',
    energy: '300 kcal',
  },
  {
    name: 'Biceps',
    image: 'https://usercontent2.hubstatic.com/13649219_f520.jpg',
    duration: '30 min',
    level: 'Medium',
    energy: '150 kcal',
  },
];
