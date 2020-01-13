import { LayoutItem } from '../../model/layout-item.model';

export interface SocialData extends LayoutItem {
  route: string;
}

export const data: SocialData[] = [
  {
    title: 'Feed',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-feed-1.jpg'),
    route: 'Feed1',
  },
  {
    title: 'Feed',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-feed-2.jpg'),
    route: 'Feed2',
  },
  {
    title: 'Profile',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-profile-1.jpg'),
    route: 'Profile1',
  },
  {
    title: 'Profile',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-profile-2.jpg'),
    route: 'Profile2',
  },
  {
    title: 'Profile',
    description: 'Option 3',
    image: require('../../assets/images/image-layout-profile-3.jpg'),
    route: 'Profile3',
  },
  {
    title: 'Profile',
    description: 'Option 4',
    image: require('../../assets/images/image-layout-profile-4.jpg'),
    route: 'Profile4',
  },
  {
    title: 'Profile',
    description: 'Option 5',
    image: require('../../assets/images/image-layout-profile-5.jpg'),
    route: 'Profile5',
  },
  {
    title: 'Profile',
    description: 'Option 6',
    image: require('../../assets/images/image-layout-profile-6.jpg'),
    route: 'Profile6',
  },
  {
    title: 'Profile',
    description: 'Option 7',
    image: require('../../assets/images/image-layout-profile-7.jpg'),
    route: 'Profile7',
  },
  {
    title: 'Profile Settings',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-profile-settings-1.jpg'),
    route: 'ProfileSettings1',
  },
  {
    title: 'Profile Settings',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-profile-settings-2.jpg'),
    route: 'ProfileSettings2',
  },
  {
    title: 'Profile Settings',
    description: 'Option 3',
    image: require('../../assets/images/image-layout-profile-settings-3.jpg'),
    route: 'ProfileSettings3',
  },
];
