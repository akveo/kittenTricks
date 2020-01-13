import { ImageSourcePropType } from 'react-native';

export enum TrainingLevel {
  EASY = 'Easy',
  MIDDLE = 'Middle',
  HARD = 'Hard',
}

export class Training {

  constructor(readonly title: string,
              readonly duration: number,
              readonly level: TrainingLevel,
              readonly image: ImageSourcePropType) {
  }

  get formattedLevel(): string {
    return `${this.level} Level`;
  }

  get formattedDuration(): string {
    return `${this.duration} min`;
  }

  static chestEasy(): Training {
    return new Training(
      'Chest',
      55,
      TrainingLevel.EASY,
      require('../assets/image-training-1.jpg'),
    );
  }

  static workoutEasy(): Training {
    return new Training(
      'Chest',
      55,
      TrainingLevel.EASY,
      require('../assets/image-training-2.jpg'),
    );
  }

  static personalizedEasy(): Training {
    return new Training(
      'Personalized Training',
      55,
      TrainingLevel.EASY,
      require('../assets/image-training-3.jpg'),
    );
  }

  static chestMiddle(): Training {
    return new Training(
      'Chest',
      55,
      TrainingLevel.MIDDLE,
      require('../assets/image-training-4.jpg'),
    );
  }

  static bicepsMiddle(): Training {
    return new Training(
      'Biceps',
      55,
      TrainingLevel.MIDDLE,
      require('../assets/image-training-5.jpg'),
    );
  }

  static personalizedMiddle(): Training {
    return new Training(
      'Personalized Training',
      55,
      TrainingLevel.MIDDLE,
      require('../assets/image-training-1.jpg'),
    );
  }

  static chestHard(): Training {
    return new Training(
      'Chest',
      55,
      TrainingLevel.HARD,
      require('../assets/image-training-2.jpg'),
    );
  }

  static bicepsHard(): Training {
    return new Training(
      'Biceps',
      55,
      TrainingLevel.HARD,
      require('../assets/image-training-3.jpg'),
    );
  }

  static workoutHard(): Training {
    return new Training(
      'Workout',
      55,
      TrainingLevel.HARD,
      require('../assets/image-training-4.jpg'),
    );
  }
}
