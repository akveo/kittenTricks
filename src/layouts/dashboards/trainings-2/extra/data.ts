import { ImageSourcePropType } from 'react-native';

export class Training {

  constructor(readonly title: string,
              readonly duration: number,
              readonly kcal: number,
              readonly image: ImageSourcePropType) {
  }

  get formattedDuration(): string {
    const hours: number = Math.floor(this.duration / 60);
    const minutes: number = this.duration % 60;

    return `${hours}:${minutes} min`;
  }

  get formattedKcal(): string {
    return `${this.kcal} kcal`;
  }

  static workoutForWomen(): Training {
    return new Training(
      'Workout For Women',
      30,
      150,
      require('../assets/image-training-1.jpg'),
    );
  }

  static groupWorkout(): Training {
    return new Training(
      'Group Workout',
      110,
      150,
      require('../assets/image-training-3.jpg'),
    );
  }

  static gymnastics(): Training {
    return new Training(
      'Gymnastics',
      30,
      100,
      require('../assets/image-training-2.jpg'),
    );
  }
}
