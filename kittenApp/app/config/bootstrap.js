import {RkTheme} from 'react-native-ui-kitten';
import {KittenTheme} from './theme';
import {AvatarTypes} from '../components/avatar/types';

export let bootstrap = () => {

  RkTheme.setTheme(KittenTheme);

  /*
   RkText types
   */

  RkTheme.setType('RkText', 'basic', {
    text: {
      fontFamily: 'Roboto-Medium',
    }
  });

  RkTheme.setType('RkText', 'regular', {
    text: {
      fontFamily: 'Roboto-Regular',
    }
  });

  RkTheme.setType('RkText', 'light', {
    text: {
      fontFamily: 'Roboto-Light',
    }
  });

  RkTheme.setType('RkText', 'moon', {
    text: {
      fontFamily: 'icomoon',
    }
  });

  RkTheme.setType('RkText', 'awesome', {
    text: {
      fontFamily: 'fontawesome',
    }
  });

  RkTheme.setType('RkText', 'secondary', {
    color: KittenTheme.colors.text.secondary
  });

  RkTheme.setType('RkText', 'xsmall', {
    fontSize: KittenTheme.fonts.sizes.xsmall,
  });

  RkTheme.setType('RkText', 'icon', {
    color: KittenTheme.colors.text.icon
  });
  /*
   RkButton types
   */

  RkTheme.setType('RkButton', 'square', {
    borderRadius: 3,
    backgroundColor: KittenTheme.colors.back.background,
    container: {
      flexDirection: 'column',
      margin: 8
    },
  });

  RkTheme.setType('RkButton', 'tile', {
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: KittenTheme.colors.border.underline,
    container: {
      flexDirection: 'column'
    }
  });

  RkTheme.setType('RkButton', 'shadow', {
    //TODO: need fix for shadow
  });

  RkTheme.setType('RkButton', 'link', {
    color: KittenTheme.colors.primary,
  });

  RkTheme.setType('RkButton', 'contrast', {
    color: KittenTheme.colors.text.base,
  });

  RkTheme.setType('RkButton', 'icon', {
    height: 56,
    width: 56,
    borderColor: KittenTheme.colors.border.underline,
    borderWidth: 1,
    backgroundColor: 'transparent'
  });

  /*
   RkModalImg types
   */

  RkTheme.setType('RkModalImg', 'basic', {
    img: {
      margin: 1.5,
    },
    modal: {
      backgroundColor: KittenTheme.colors.back.background
    },
    footer: {
      backgroundColor: KittenTheme.colors.back.background,
      height: 50
    },
    header: {
      backgroundColor: KittenTheme.colors.back.background,
      paddingBottom: 6
    },
  });

  /*
   Register components
   */

  RkTheme.registerComponent('Avatar', AvatarTypes);
};