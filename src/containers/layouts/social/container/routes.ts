import {
  imageArticleList2Layout,
  imageFeed1Layout,
  imageFeed2Layout,
  imageProfile1Layout,
  imageProfile2Layout,
  imageProfile3Layout,
  imageProfile4Layout,
  imageProfile5Layout,
  imageProfile6Layout,
  imageProfile7Layout,
  imageProfileSettings1Layout,
  imageProfileSettings2Layout,
  imageProfileSettings3Layout,
  imageSettingsLayout,
} from '@src/assets/images';
import { SocialContainerData } from './type';

export const routes: SocialContainerData[] = [
  {
    title: 'Profile',
    description: 'Option 1',
    image: imageProfile1Layout.imageSource,
    route: 'Profile 1',
  },
  {
    title: 'Profile',
    description: 'Option 2',
    image: imageProfile2Layout.imageSource,
    route: 'Profile 2',
  },
  {
    title: 'Profile',
    description: 'Option 3',
    image: imageProfile3Layout.imageSource,
    route: 'Profile 3',
  },
  {
    title: 'Profile',
    description: 'Option 4',
    image: imageProfile4Layout.imageSource,
    route: 'Profile 4',
  },
  {
    title: 'Profile',
    description: 'Option 5',
    image: imageProfile5Layout.imageSource,
    route: 'Profile 5',
  },
  {
    title: 'Profile',
    description: 'Option 6',
    image: imageProfile6Layout.imageSource,
    route: 'Profile 6',
  },
  {
    title: 'Profile',
    description: 'Option 7',
    image: imageProfile7Layout.imageSource,
    route: 'Profile 7',
  },
  {
    title: 'Profile Settings',
    description: 'Option 1',
    image: imageProfileSettings1Layout.imageSource,
    route: 'Profile Settings 1',
  },
  {
    title: 'Profile Settings',
    description: 'Option 2',
    image: imageProfileSettings2Layout.imageSource,
    route: 'Profile Settings 2',
  },
  {
    title: 'Profile Settings',
    description: 'Option 3',
    image: imageProfileSettings3Layout.imageSource,
    route: 'Profile Settings 3',
  },
  {
    title: 'Feed',
    description: 'Option 1',
    image: imageFeed1Layout.imageSource,
    route: 'Feed 1',
  },
  {
    title: 'Feed',
    description: 'Option 2',
    image: imageFeed2Layout.imageSource,
    route: 'Feed 2',
  },
  {
    title: 'Settings',
    description: 'Option 1',
    image: imageSettingsLayout.imageSource,
    route: 'Settings',
  },
];
