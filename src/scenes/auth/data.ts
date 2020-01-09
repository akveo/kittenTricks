import { LayoutItem } from '../../model/layout-item.model';

export interface AuthData extends LayoutItem {
  route: string;
}

export const data: AuthData[] = [
  {
    title: 'Sign In',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-sign-in-1.jpg'),
    route: 'SignIn1',
  },
  {
    title: 'Sign In',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-sign-in-2.jpg'),
    route: 'SignIn2',
  },
  {
    title: 'Sign In',
    description: 'Option 3',
    image: require('../../assets/images/image-layout-sign-in-3.jpg'),
    route: 'SignIn3',
  },
  {
    title: 'Sign In',
    description: 'Option 4',
    image: require('../../assets/images/image-layout-sign-in-4.jpg'),
    route: 'SignIn4',
  },
  {
    title: 'Sign In',
    description: 'Option 5',
    image: require('../../assets/images/image-layout-sign-in-5.jpg'),
    route: 'SignIn5',
  },
  {
    title: 'Sign Up',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-sign-up-1.jpg'),
    route: 'SignUp1',
  },
  {
    title: 'Sign Up',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-sign-up-2.jpg'),
    route: 'SignUp2',
  },
  {
    title: 'Sign Up',
    description: 'Option 3',
    image: require('../../assets/images/image-layout-sign-up-3.jpg'),
    route: 'SignUp3',
  },
  {
    title: 'Sign Up',
    description: 'Option 4',
    image: require('../../assets/images/image-layout-sign-up-4.jpg'),
    route: 'SignUp4',
  },
  {
    title: 'Forgot Password',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-forgot-password.jpg'),
    route: 'ForgotPassword',
  },
];
