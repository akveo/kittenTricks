import {
  forgotPasswordLayoutImage,
  signIn1LayoutImage,
  signIn2LayoutImage,
  signIn3LayoutImage,
  signIn4LayoutImage,
  signIn5LayoutImage,
  signUp1LayoutImage,
  signUp2LayoutImage,
  signUp3LayoutImage,
  signUp4LayoutImage,
} from '@src/assets/images';
import { AuthContainerData } from './type';

export const routes: AuthContainerData[] = [
  {
    title: 'Sign In',
    description: 'Option 1',
    image: signIn1LayoutImage,
    route: 'Sign In 1',
  },
  {
    title: 'Sign In',
    description: 'Option 2',
    image: signIn2LayoutImage,
    route: 'Sign In 2',
  },
  {
    title: 'Sign In',
    description: 'Option 3',
    image: signIn3LayoutImage,
    route: 'Sign In 3',
  },
  {
    title: 'Sign In',
    description: 'Option 4',
    image: signIn4LayoutImage,
    route: 'Sign In 4',
  },
  {
    title: 'Sign In',
    description: 'Option 5',
    image: signIn5LayoutImage,
    route: 'Sign In 5',
  },
  {
    title: 'Sign Up',
    description: 'Option 1',
    image: signUp1LayoutImage,
    route: 'Sign Up 1',
  },
  {
    title: 'Sign Up',
    description: 'Option 2',
    image: signUp2LayoutImage,
    route: 'Sign Up 2',
  },
  {
    title: 'Sign Up',
    description: 'Option 3',
    image: signUp3LayoutImage,
    route: 'Sign Up 3',
  },
  {
    title: 'Sign Up',
    description: 'Option 4',
    image: signUp4LayoutImage,
    route: 'Sign Up 4',
  },
  {
    title: 'Forgot Password',
    description: 'Option 1',
    image: forgotPasswordLayoutImage,
    route: 'Forgot Password',
  },
];
