import { ArticlesContainerData } from './type';
import {
  article1LayoutImage,
  article2LayoutImage,
  article3LayoutImage,
  articleList1LayoutImage,
  articleList2LayoutImage,
  articleList3LayoutImage,
  articleList4LayoutImage,
} from '@src/assets/images';

export const routes: ArticlesContainerData[] = [
  {
    title: 'Article List',
    description: 'Option 1',
    image: articleList1LayoutImage,
    route: 'Article List 1',
  },
  {
    title: 'Article List',
    description: 'Option 2',
    image: articleList2LayoutImage,
    route: 'Article List 2',
  },
  {
    title: 'Article List',
    description: 'Option 3',
    image: articleList3LayoutImage,
    route: 'Article List 3',
  },
  {
    title: 'Article List',
    description: 'Option 4',
    image: articleList4LayoutImage,
    route: 'Article List 4',
  },
  {
    title: 'Article',
    description: 'Option 1',
    image: article1LayoutImage,
    route: 'Article 1',
  },
  {
    title: 'Article',
    description: 'Option 2',
    image: article2LayoutImage,
    route: 'Article 2',
  },
  {
    title: 'Article',
    description: 'Option 3',
    image: article3LayoutImage,
    route: 'Article 3',
  },
];
