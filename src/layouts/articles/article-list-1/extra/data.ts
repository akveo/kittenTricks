import { ImageSourcePropType } from 'react-native';

export class Article {

  constructor(readonly title: string,
              readonly description: string,
              readonly content: string,
              readonly image: ImageSourcePropType,
              readonly date: string,
              readonly author: Profile,
              readonly likes: Like[],
              readonly comments: Comment[]) {
  }

  static howToEatHealthy(): Article {
    return new Article(
      'How To Eat Healthy',
      '10 useful Tips',
      'There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
      require('../assets/image-article-background-1.jpg'),
      '19 Sep, 2018',
      Profile.markVolter(),
      [
        Like.byMarkVolter(),
        Like.byHubertFranck(),
      ],
      [
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
      ],
    );
  }

  static whyWorkoutImportant(): Article {
    return new Article(
      'Why Is The Workout Important?',
      'Some Tips',
      'There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
      require('../assets/image-article-background-2.jpg'),
      '19 Sep, 2018',
      Profile.hubertFranck(),
      [
        Like.byMarkVolter(),
        Like.byHubertFranck(),
      ],
      [
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
      ],
    );
  }

  static morningWorkouts(): Article {
    return new Article(
      '5 Rules Of Morning Workouts',
      '5 Useful Exercises',
      'There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
      require('../assets/image-article-background-3.jpg'),
      '19 Sep, 2018',
      Profile.markVolter(),
      [
        Like.byMarkVolter(),
        Like.byHubertFranck(),
      ],
      [
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
      ],
    );
  }
}

export class Like {

  constructor(readonly author: Profile) {

  }

  static byMarkVolter(): Like {
    return new Like(
      Profile.markVolter(),
    );
  }

  static byHubertFranck(): Like {
    return new Like(
      Profile.hubertFranck(),
    );
  }
}

export class Comment {

  constructor(readonly text: string,
              readonly date: string,
              readonly author: Profile,
              readonly comments: Comment[],
              readonly likes: Like[]) {
  }

  static byHubertFranck(): Comment {
    return new Comment(
      'This very useful information for me Thanks for your article!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [
        Comment.byMarkVolter(),
      ],
      [
        Like.byMarkVolter(),
      ],
    );
  }

  static byMarkVolter(): Comment {
    return new Comment(
      'Thanks!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [],
      [],
    );
  }

}

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static markVolter(): Profile {
    return new Profile(
      'Mark',
      'Volter',
      require('../assets/image-profile.jpg'),
    );
  }

  static hubertFranck(): Profile {
    return new Profile(
      'Hubert',
      'Franck',
      require('../assets/image-profile.jpg'),
    );
  }
}

