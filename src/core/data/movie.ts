import { Movie } from '@src/core/model';
import {
  CountryDetail,
  LengthDetail,
  YearDetail,
} from '@src/core/model/movie.model';

export const movie1: Movie = {
  name: 'How To Train Your Dragon\nThe Hidden World',
  part: 'Part III',
  description: 'When Hiccup discovers Toothless isn\'t the only Night Fury, he must seek "The Hidden World", ' +
    'a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.',
  preview: 'https://upload.wikimedia.org/wikipedia/en/f/fd/How_to_Train_Your_Dragon_3_poster.png',
  rating: 4,
  categories: ['Adventure', 'Family', 'Fantasy'],
  details: [
    new YearDetail(2019),
    new CountryDetail('USA'),
    new LengthDetail(112),
  ],
  screenshots: [
    'https://cdn.newsday.com/polopoly_fs/1.27712483.1551043709!/httpImage/image.jpg_gen/derivatives/landscape_768/' +
    'image.jpg',
    'http://cdn.collider.com/wp-content/uploads/2018/09/how-to-train-your-dragon-the-hidden-world-hiccup.jpg',
    'https://cdn.traileraddict.com/content/extra-thumbs/309962472-3.jpg',
    'https://www.iamag.co/wp-content/uploads/2018/10/HOW-TO-TRAIN-YOUR-DRAGON-THE-HIDDEN-WORLD-4-1-1024x430.jpg',
  ],
};
