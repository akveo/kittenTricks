import { ArticlesContainerData } from './type';
import {
  imageArticle1Layout,
  imageArticle2Layout,
  imageArticle3Layout,
  imageArticleList1Layout,
  imageArticleList2Layout,
  imageArticleList3Layout,
  imageArticleList4Layout,
} from '@src/assets/images';

export const routes: ArticlesContainerData[] = [
  {
    title: 'Article List',
    description: 'Option 1',
    image: imageArticleList1Layout.imageSource,
    route: 'Article List 1',
  },
  {
    title: 'Article List',
    description: 'Option 2',
    image: imageArticleList2Layout.imageSource,
    route: 'Article List 2',
  },
  {
    title: 'Article List',
    description: 'Option 3',
    image: imageArticleList3Layout.imageSource,
    route: 'Article List 3',
  },
  {
    title: 'Article List',
    description: 'Option 4',
    image: imageArticleList4Layout.imageSource,
    route: 'Article List 4',
  },
  {
    title: 'Article',
    description: 'Option 1',
    image: imageArticle1Layout.imageSource,
    route: 'Article 1',
  },
  {
    title: 'Article',
    description: 'Option 2',
    image: imageArticle2Layout.imageSource,
    route: 'Article 2',
  },
  {
    title: 'Article',
    description: 'Option 3',
    image: imageArticle3Layout.imageSource,
    route: 'Article 3',
  },
];
