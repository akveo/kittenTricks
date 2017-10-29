import {
  StatusBar,
  StyleSheet
} from 'react-native';
import {RkTheme} from 'react-native-ui-kitten';
import {KittenTheme} from './theme';
import {AvatarTypes} from '../components/avatar/types';
import {GradientButtonTypes} from '../components/gradientButton/types';
import {SwitchTypes} from '../components/switch/types';
import {SocialBarTypes} from '../components/socialBar/types';
import {scale, scaleModerate, scaleVertical} from '../utils/scale';

export let bootstrap = () => {

  RkTheme.setTheme(KittenTheme, null);

  /*
   RkText types
   */

  RkTheme.setType('RkText', 'basic', {
    fontFamily: theme => theme.fonts.family.bold,
    backgroundColor: 'transparent'
  });

  RkTheme.setType('RkText', 'regular', {
    fontFamily: theme => theme.fonts.family.regular,
  });

  RkTheme.setType('RkText', 'light', {
    fontFamily: theme => theme.fonts.family.light,
  });

  RkTheme.setType('RkText', 'logo', {
    fontFamily: theme => theme.fonts.family.logo,
  });

  RkTheme.setType('RkText', 'moon', {
    fontFamily: 'icomoon',
  });

  RkTheme.setType('RkText', 'awesome', {
    fontFamily: 'fontawesome',
  });

  RkTheme.setType('RkText', 'hero', {
    fontSize: scale(33)
  });

  RkTheme.setType('RkText', 'menuIcon', {
    fontSize: 44
  });

  //all font sizes
  for (let key in RkTheme.current.fonts.sizes) {
    RkTheme.setType('RkText', key, {
      fontSize: theme => theme.fonts.sizes[key]
    });
  }

  //all text colors
  for (let key in RkTheme.current.colors.text) {
    RkTheme.setType('RkText', `${key}Color`, {
      color: theme => theme.colors.text[key]
    });
  }

  //all text line heights
  for (let key in RkTheme.current.fonts.lineHeights) {
    RkTheme.setType('RkText', `${key}Line`, {
      text: {
        lineHeight: theme => theme.fonts.lineHeights[key]
      }
    });
  }

  //theme text styles
  RkTheme.setType('RkText', 'header1', {
    fontSize: theme => theme.fonts.sizes.h1,
    fontFamily: theme => theme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header2', {
    fontSize: theme => theme.fonts.sizes.h2,
    fontFamily: theme => theme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header3', {
    fontSize: theme => theme.fonts.sizes.h3,
    fontFamily: theme => theme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header4', {
    fontSize: theme => theme.fonts.sizes.h4,
    fontFamily: theme => theme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header5', {
    fontSize: theme => theme.fonts.sizes.h5,
    fontFamily: theme => theme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'header6', {
    fontSize: theme => theme.fonts.sizes.h6,
    fontFamily: theme => theme.fonts.family.bold
  });
  RkTheme.setType('RkText', 'secondary1', {
    fontSize: theme => theme.fonts.sizes.s1,
    fontFamily: theme => theme.fonts.family.light
  });
  RkTheme.setType('RkText', 'secondary2', {
    fontSize: theme => theme.fonts.sizes.s2,
    fontFamily: theme => theme.fonts.family.light
  });
  RkTheme.setType('RkText', 'secondary3', {
    fontSize: theme => theme.fonts.sizes.s3,
    fontFamily: theme => theme.fonts.family.regular
  });
  RkTheme.setType('RkText', 'secondary4', {
    fontSize: theme => theme.fonts.sizes.s4,
    fontFamily: theme => theme.fonts.family.regular
  });
  RkTheme.setType('RkText', 'secondary5', {
    fontSize: theme => theme.fonts.sizes.s5,
    fontFamily: theme => theme.fonts.family.light
  });
  RkTheme.setType('RkText', 'secondary6', {
    fontSize: theme => theme.fonts.sizes.s6,
    fontFamily: theme => theme.fonts.family.light
  });
  RkTheme.setType('RkText', 'secondary7', {
    fontSize: theme => theme.fonts.sizes.s7,
    fontFamily: theme => theme.fonts.family.regular
  });
  RkTheme.setType('RkText', 'primary1', {
    fontSize: theme => theme.fonts.sizes.p1,
    fontFamily: theme => theme.fonts.family.light
  });
  RkTheme.setType('RkText', 'primary2', {
    fontSize: theme => theme.fonts.sizes.p2,
    fontFamily: theme => theme.fonts.family.regular
  });
  RkTheme.setType('RkText', 'primary3', {
    fontSize: theme => theme.fonts.sizes.p3,
    fontFamily: theme => theme.fonts.family.light
  });
  RkTheme.setType('RkText', 'primary4', {
    fontSize: theme => theme.fonts.sizes.p4,
    fontFamily: theme => theme.fonts.family.regular
  });

  RkTheme.setType('RkText', 'center', {
    text: {
      textAlign: 'center'
    }
  });

  RkTheme.setType('RkText', 'chat', {
    color: theme => theme.colors.chat.text
  });
  /*
   RkButton types
   */

  RkTheme.setType('RkButton', 'basic', {
    container: {
      alignSelf: 'auto',
    }
  });

  RkTheme.setType('RkButton', 'square', {
    borderRadius: 3,
    backgroundColor: theme => theme.colors.button.back,
    container: {
      flexDirection: 'column',
      margin: 8
    },
  });

  RkTheme.setType('RkButton', 'tile', {
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: theme => theme.colors.border.base,
    container: {
      flexDirection: 'column'
    }
  });

  RkTheme.setType('RkButton', 'link', {
    color: theme => theme.colors.primary,
  });

  RkTheme.setType('RkButton', 'contrast', {
    color: theme => theme.colors.text.base,
  });

  RkTheme.setType('RkButton', 'icon', {
    height: scale(56),
    width: scale(56),
    borderColor: theme => theme.colors.border.base,
    backgroundColor: theme => theme.colors.control.background,
    borderWidth: 1
  });

  RkTheme.setType('RkButton', 'highlight', {
    backgroundColor: theme => theme.colors.button.highlight
  });

  RkTheme.setType('RkButton', 'social', {
    height: scale(62),
    width: scale(62),
    borderRadius: scale(31),
    borderColor: theme => theme.colors.border.accent,
    borderWidth: 1,
    backgroundColor: theme => theme.colors.control.background
  });
  /*
   RkModalImg types
   */

  RkTheme.setType('RkModalImg', 'basic', {
    img: {
      margin: 1.5,
    },
    modal: {
      backgroundColor: theme => theme.colors.screen.base
    },
    footer: {
      backgroundColor: theme => theme.colors.screen.base,
      height: 50
    },
    header: {
      backgroundColor: theme => theme.colors.screen.base,
      paddingBottom: 6
    },
  });

  /*
   RkTextInput
   */

  RkTheme.setType('RkTextInput', 'basic', {
    input: {
      fontFamily: theme => theme.fonts.family.bold
    },
    color: theme => theme.colors.text.base,
    backgroundColor: theme => theme.colors.control.background,
    labelColor: theme => theme.colors.input.label,
    placeholderTextColor: theme => theme.colors.input.placeholder,
  });

  RkTheme.setType('RkTextInput', 'rounded', {
    fontSize: theme => theme.fonts.sizes.h6,
    borderWidth: 1,
    underlineWidth: 1,
    placeholderTextColor: theme => theme.colors.input.text,
    input: {
      marginVertical: {
        ios: scaleVertical(15),
        android: scaleVertical(4)
      },
    },
  });


  RkTheme.setType('RkTextInput', 'right', {
    input: {
      textAlign: 'right',
      marginTop: {
        ios: scaleVertical(18),
        android: scaleVertical(11)
      }
    },
    label: {
      fontFamily: theme => theme.fonts.family.light,
    },
    container: {
      marginVertical: 4
    },
    backgroundColor: 'transparent',
    labelFontSize: theme => theme.fonts.sizes.small,
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
      fontFamily: theme => theme.fonts.family.light,
      fontSize: theme => theme.fonts.sizes.small,
    },
    container: {
      flex: 1,
      backgroundColor: theme => theme.colors.input.background,
      marginVertical: 0,
      borderRadius: 20,
      paddingHorizontal: 16
    },

  });

  RkTheme.setType('RkTextInput', 'iconRight', {
    label: {
      position: 'absolute',
      right: 0
    },
    input: {
      marginRight: scale(46)
    },
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
      borderRadius: 3,
      backgroundColor: theme => theme.colors.control.background
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
      borderWidth: 0,
      backgroundColor: 'transparent'
    },
    header: {
      paddingVertical: 0,
      paddingTop: 20,
      paddingBottom: 16,
      justifyContent: 'space-between',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: theme => theme.colors.border.base
    },
    content: {
      padding: 16,
      borderBottomWidth: 1,
      borderColor: theme => theme.colors.border.base
    },
    footer: {
      paddingHorizontal: 14,
      paddingTop: 15,
      paddingBottom: 16,
      alignItems: 'center'
    }
  });

  RkTheme.setType('RkCard', 'credit', {
    container: {
      borderWidth: 0,
      borderRadius: 7
    },
    header: {
      justifyContent: 'space-between',
      paddingHorizontal: 14,
      alignItems: 'center',
      paddingBottom: scaleVertical(46)
    },
    content: {
      alignItems: 'center',
      paddingVertical: 0
    },
    footer: {
      paddingBottom: scaleVertical(14),
      paddingTop: scaleVertical(16),
      paddingHorizontal: 14,
      alignItems: 'flex-end'
    }
  });

  RkTheme.setType('RkPicker', 'highlight', {
    highlightBorderTopColor: theme => theme.colors.border.highlight,
    highlightBorderBottomColor: theme => theme.colors.border.highlight,
    windowBorderColor: theme => theme.colors.border.highlight,
  });

  /*
   Register components
   */

  RkTheme.registerComponent('Avatar', AvatarTypes);
  RkTheme.registerComponent('GradientButton', GradientButtonTypes);
  RkTheme.registerComponent('RkSwitch', SwitchTypes);
  RkTheme.registerComponent('SocialBar', SocialBarTypes);

  StatusBar.setBarStyle('dark-content', true);
};