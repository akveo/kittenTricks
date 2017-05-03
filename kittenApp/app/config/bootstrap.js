import {RkTheme} from 'react-native-ui-kitten';
import {KittenTheme} from './theme';
import {AvatarTypes} from '../components/avatar/types';
import {GradientButtonTypes} from '../components/gradientButton/types';
import {SwitchTypes} from '../components/switch/types';

export let bootstrap = () => {

  RkTheme.setTheme(KittenTheme);

  /*
   RkText types
   */

  RkTheme.setType('RkText', 'basic', {
    text: {
      fontFamily: KittenTheme.fonts.family.bold,
    }
  });

  RkTheme.setType('RkText', 'regular', {
    text: {
      fontFamily: KittenTheme.fonts.family.regular,
    }
  });

  RkTheme.setType('RkText', 'light', {
    text: {
      fontFamily: KittenTheme.fonts.family.light,
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
   RkTextInput
   */

  RkTheme.setType('RkTextInput', 'basic', {
    input: {
      fontFamily: KittenTheme.fonts.family.bold
    }
  });

  RkTheme.setType('RkTextInput', 'right', {
    input: {
      textAlign: 'right',
      marginTop: {
        ios: 18,
        android: 11
      }
    },
    label: {
      fontFamily: KittenTheme.fonts.family.light,
    },
    container: {
      marginVertical: 4

    },
    labelFontSize: KittenTheme.fonts.sizes.small
  });

  RkTheme.setType('RkTextInput', 'search', {
    input: {
      marginVertical: 0,
      marginHorizontal: 0,
      marginTop:0,
      paddingTop:{
        ios:2,
        android:0
      },
      paddingBottom:0,
      textAlignVertical:'center',
      includeFontPadding:false,
      fontFamily: KittenTheme.fonts.family.light,
      fontSize: KittenTheme.fonts.sizes.small
    },
    container: {
      backgroundColor: KittenTheme.colors.back.base,
      marginVertical: 0,
      borderRadius: 20,
      paddingHorizontal: 16
    },
    labelColor: KittenTheme.colors.text.icon,
    placeholderTextColor: KittenTheme.colors.text.hint
  });

  /*
   Register components
   */

  RkTheme.registerComponent('Avatar', AvatarTypes);
  RkTheme.registerComponent('GradientButton', GradientButtonTypes);
  RkTheme.registerComponent('RkSwitch', SwitchTypes);
};