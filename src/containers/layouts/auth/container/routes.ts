import {
  imageArticleList2Layout,
  imageForgotPasswordLayout,
  imageSignIn1Layout,
  imageSignIn2Layout,
  imageSignIn3Layout,
  imageSignIn4Layout,
  imageSignIn5Layout,
  imageSignUp1Layout,
  imageSignUp2Layout,
  imageSignUp3Layout,
  imageSignUp4Layout,
} from '@src/assets/images';
import { AuthContainerData } from './type';

export const routes: AuthContainerData[] = [
  {
    title: 'Sign In',
    description: 'Option 1',
    image: imageSignIn1Layout.imageSource,
    route: 'Sign In 1',
  },
  {
    title: 'Sign In',
    description: 'Option 2',
    image: imageSignIn2Layout.imageSource,
    route: 'Sign In 2',
  },
  {
    title: 'Sign In',
    description: 'Option 3',
    image: imageSignIn3Layout.imageSource,
    route: 'Sign In 3',
  },
  {
    title: 'Sign In',
    description: 'Option 4',
    image: imageSignIn4Layout.imageSource,
    route: 'Sign In 4',
  },
  {
    title: 'Sign In',
    description: 'Option 5',
    image: imageSignIn5Layout.imageSource,
    route: 'Sign In 5',
  },
  {
    title: 'Sign Up',
    description: 'Option 1',
    image: imageSignUp1Layout.imageSource,
    route: 'Sign Up 1',
  },
  {
    title: 'Sign Up',
    description: 'Option 2',
    image: imageSignUp2Layout.imageSource,
    route: 'Sign Up 2',
  },
  {
    title: 'Sign Up',
    description: 'Option 3',
    image: imageSignUp3Layout.imageSource,
    route: 'Sign Up 3',
  },
  {
    title: 'Sign Up',
    description: 'Option 4',
    image: imageSignUp4Layout.imageSource,
    route: 'Sign Up 4',
  },
  {
    title: 'Forgot Password',
    description: 'Option 1',
    image: imageForgotPasswordLayout.imageSource,
    route: 'Forgot Password',
  },
];
