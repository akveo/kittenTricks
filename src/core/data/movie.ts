import { Movie } from '@src/core/model';
import {
  CountryDetail,
  LengthDetail,
  YearDetail,
} from '@src/core/model/movie.model';
import {
  movieImage1,
  movieImage2,
  movieImage3,
  movieImage4,
  movieImage5,
} from '@src/assets/images';

export const movie1: Movie = {
  name: 'How To Train Your Dragon\nThe Hidden World',
  part: 'Part III',
  description: 'When Hiccup discovers Toothless isn\'t the only Night Fury, he must seek "The Hidden World", ' +
    'a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.',
  preview: movieImage1,
  rating: 4,
  categories: ['Adventure', 'Family', 'Fantasy'],
  details: [
    new YearDetail(2019),
    new CountryDetail('USA'),
    new LengthDetail(112),
  ],
  screenshots: [
    movieImage2,
    movieImage3,
    movieImage4,
    movieImage5,
  ],
};
