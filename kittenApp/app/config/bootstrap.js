import {RkTheme} from 'react-native-ui-kitten';
import {KittenTheme} from './theme';
import {AvatarTypes} from '../components/avatar/types';
import {GradientButtonTypes} from '../components/gradientButton/types';
import {SwitchTypes} from '../components/switch/types';
import {SocialBarTypes} from '../components/socialBar/types';

export let bootstrap = () => {

  RkTheme.setTheme(KittenTheme);

  /*
   RkText types
   */

  RkTheme.setType('RkText', 'basic', {
    fontFamily: KittenTheme.fonts.family.bold,
  });

  RkTheme.setType('RkText', 'regular', {
    fontFamily: KittenTheme.fonts.family.regular,
  });

  RkTheme.setType('RkText', 'light', {
    fontFamily: KittenTheme.fonts.family.light,
  });

  RkTheme.setType('RkText', 'logo', {
    fontFamily: KittenTheme.fonts.family.logo,
  });

  RkTheme.setType('RkText', 'moon', {
    fontFamily: 'icomoon',
  });

  RkTheme.setType('RkText', 'awesome', {
    fontFamily: 'fontawesome',
  });

  RkTheme.setType('RkText', 'hero', {
    fontSize: 33
  });

  //all font sizes
  for (let key in KittenTheme.fonts.sizes) {
    RkTheme.setType('RkText', key, {
      fontSize: KittenTheme.fonts.sizes[key]
    });
  }

  //all text colors
  for (let key in KittenTheme.colors.text) {
    RkTheme.setType('RkText', `${key}Color`, {
      color: KittenTheme.colors.text[key]
    });
  }

  //all text line heights
  for (let key in KittenTheme.fonts.lineHeights) {
    RkTheme.setType('RkText', `${key}Line`, {
      text: {
        lineHeight: KittenTheme.fonts.lineHeights[key]
      }
    });
  }

  //theme text styles
  RkTheme.setType('RkText', 'header1', {
    fontSize: KittenTheme.fonts.sizes.h1,
    fontFamily: KittenTheme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header2', {
    fontSize: KittenTheme.fonts.sizes.h2,
    fontFamily: KittenTheme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header3', {
    fontSize: KittenTheme.fonts.sizes.h3,
    fontFamily: KittenTheme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header4', {
    fontSize: KittenTheme.fonts.sizes.h4,
    fontFamily: KittenTheme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header5', {
    fontSize: KittenTheme.fonts.sizes.h5,
    fontFamily: KittenTheme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header6', {
    fontSize: KittenTheme.fonts.sizes.h6,
    fontFamily: KittenTheme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'secondary1', {
    fontSize: KittenTheme.fonts.sizes.s1,
    fontFamily: KittenTheme.fonts.family.light
  });
  RkTheme.setType('RkText', 'secondary2', {
    fontSize: KittenTheme.fonts.sizes.s2,
    fontFamily: KittenTheme.fonts.family.light
  });
  RkTheme.setType('RkText', 'secondary3', {
    fontSize: KittenTheme.fonts.sizes.s3,
    fontFamily: KittenTheme.fonts.family.regular
  });
  RkTheme.setType('RkText', 'secondary4', {
    fontSize: KittenTheme.fonts.sizes.s4,
    fontFamily: KittenTheme.fonts.family.regular
  });
  RkTheme.setType('RkText', 'secondary5', {
    fontSize: KittenTheme.fonts.sizes.s5,
    fontFamily: KittenTheme.fonts.family.light
  });
  RkTheme.setType('RkText', 'secondary6', {
    fontSize: KittenTheme.fonts.sizes.s6,
    fontFamily: KittenTheme.fonts.family.light
  });
  RkTheme.setType('RkText', 'secondary7', {
    fontSize: KittenTheme.fonts.sizes.s7,
    fontFamily: KittenTheme.fonts.family.regular
  });
  RkTheme.setType('RkText', 'primary1', {
    fontSize: KittenTheme.fonts.sizes.p1,
    fontFamily: KittenTheme.fonts.family.light
  });
  RkTheme.setType('RkText', 'primary2', {
    fontSize: KittenTheme.fonts.sizes.p2,
    fontFamily: KittenTheme.fonts.family.regular
  });
  RkTheme.setType('RkText', 'primary3', {
    fontSize: KittenTheme.fonts.sizes.p3,
    fontFamily: KittenTheme.fonts.family.light
  });
  RkTheme.setType('RkText', 'primary4', {
    fontSize: KittenTheme.fonts.sizes.p4,
    fontFamily: KittenTheme.fonts.family.regular
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

  RkTheme.setType('RkButton', 'social', {
    height: 62,
    width: 62,
    borderRadius: 31,
    borderColor: KittenTheme.colors.border.base,
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

  RkTheme.setType('RkTextInput', 'rounded', {
    fontSize: KittenTheme.fonts.sizes.h6,
    borderWidth: 1,
    underlineWidth: 1,
    color: KittenTheme.colors.text.alter,
    input: {
      marginVertical: {
        ios: 15,
        android: 4
      },
    },
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

  RkTheme.setType('RkTextInput', 'row', {
    input: {
      marginVertical: 0,
      marginHorizontal: 0,
      marginTop: 0,
      paddingTop: {
        ios: 2,
        android: 0
      },
      paddingBottom: 0,
      textAlignVertical: 'center',
      includeFontPadding: false,
      fontFamily: KittenTheme.fonts.family.light,
      fontSize: KittenTheme.fonts.sizes.small,
      color: KittenTheme.colors.text.alter
    },
    container: {
      flex: 1,
      backgroundColor: KittenTheme.colors.back.base,
      marginVertical: 0,
      borderRadius: 20,
      paddingHorizontal: 16
    },
    labelColor: KittenTheme.colors.icon.base,
    placeholderTextColor: KittenTheme.colors.text.secondary
  });

  RkTheme.setType('RkTextInput', 'sticker', {
    input: {
      marginHorizontal: 14
    },
    container: {
      justifyContent: 'center',
      paddingHorizontal: 0
    },
    label: {
      position: 'absolute',
      right: 0
    }
  });

  /*
   RkCard types
   */

  RkTheme.setType('RkCard', 'basic', {
    container: {
      borderRadius: 3
    },
    header: {
      justifyContent: 'flex-start',
      paddingVertical: 14
    },
    content: {
      padding: 16
    },
    footer: {
      paddingBottom: 20,
      paddingTop: 7.5,
      paddingHorizontal: 0
    }
  });

  RkTheme.setType('RkCard', 'backImg', {
    container: {
      borderWidth: 0,
      borderRadius: 0
    },
    img: {
      height: 225
    },
    imgOverlay: {
      height: 225,
      backgroundColor: 'transparent'
    },
    content: {
      paddingHorizontal: 14
    },
    footer: {
      paddingTop: 15,
      paddingBottom: 0,
      paddingVertical: 7.5,
      paddingHorizontal: 0
    }
  });


  RkTheme.setType('RkCard', 'imgBlock', {
    img: {
      height: 235
    },
    header: {
      padding: 0,
      paddingVertical: 13,
      paddingHorizontal: 16
    },
    imgOverlay: {
      height: -1,
    },
    footer: {
      paddingTop: 18,
      paddingBottom: 15,
      paddingVertical: 0,
      paddingHorizontal: 0
    }
  });

  RkTheme.setType('RkCard', 'horizontal', {
    container: {
      flexDirection: 'row',
      height: 110
    },
    content: {
      flex: 1,
    },
    img: {
      height: null,
      flex: -1,
      width: 120
    }
  });

  RkTheme.setType('RkCard', 'blog', {
    header: {
      paddingHorizontal: 16,
      paddingVertical: 0,
      paddingTop: 16,
    },
    content: {
      padding: 0,
      paddingVertical: 0,
      paddingTop: 12
    },
    footer: {
      paddingHorizontal: 16,
      paddingTop: 15,
      paddingBottom: 16,
      alignItems: 'center'
    }
  });

  RkTheme.setType('RkCard', 'article', {
    container: {
      borderWidth: 0
    },
    header: {
      paddingVertical: 0,
      paddingTop: 20,
      paddingBottom: 16,
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: KittenTheme.colors.border.underline
    },
    content: {
      padding: 16,
      borderBottomWidth: 1,
      borderColor: KittenTheme.colors.border.underline
    },
    footer: {
      paddingHorizontal: 14,
      paddingTop: 15,
      paddingBottom: 16,
      alignItems: 'center'
    }
  });

  /*
   Register components
   */

  RkTheme.registerComponent('Avatar', AvatarTypes);
  RkTheme.registerComponent('GradientButton', GradientButtonTypes);
  RkTheme.registerComponent('RkSwitch', SwitchTypes);
  RkTheme.registerComponent('SocialBar', SocialBarTypes);
};