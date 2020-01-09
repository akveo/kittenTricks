import { LayoutItem } from '../../model/layout-item.model';

export interface AuthData extends LayoutItem {
  route: string;
}

export const data: AuthData[] = [
  {
    title: 'Article',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-article-1.jpg'),
    route: 'Article1',
  },
  {
    title: 'Article',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-article-2.jpg'),
    route: 'Article2',
  },
  {
    title: 'Article',
    description: 'Option 3',
    image: require('../../assets/images/image-layout-article-3.jpg'),
    route: 'Article3',
  },
  {
    title: 'Article List',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-article-list-1.jpg'),
    route: 'ArticleList1',
  },
  {
    title: 'Article List',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-article-list-2.jpg'),
    route: 'ArticleList2',
  },
  {
    title: 'Article List',
    description: 'Option 3',
    image: require('../../assets/images/image-layout-article-list-3.jpg'),
    route: 'ArticleList3',
  },
  {
    title: 'Article List',
    description: 'Option 4',
    image: require('../../assets/images/image-layout-article-list-4.jpg'),
    route: 'ArticleList4',
  },
];
