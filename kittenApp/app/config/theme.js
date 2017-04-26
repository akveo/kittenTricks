 export const Colors = {
  primary: '#f53d56',
  success: '#3bd555',
  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',
  foreground: '#212121',
  background: '#fff',
  alterBackground:'#efefef',
  neutral:'#f2f2f2',
  overlay: '#00000057',
  fontSize: 18,
};

export const KittenTheme = {
  colors: {
    primary: Colors.primary,
    primaryActive: Colors.primaryActive,
    success: Colors.success,
    successActive: Colors.successActive,
    info: Colors.info,
    infoActive: Colors.infoActive,
    warning: Colors.warning,
    warningActive: Colors.warningActive,
    danger: Colors.danger,
    dangerActive: Colors.dangerActive,
    foreground: Colors.foreground,
    background: Colors.background,
    overlay: Colors.overlay,

    text: {
      base: Colors.foreground,
      additional: Colors.background,
      subtitle: Colors.foreground,
      hint: '#00000059',
      primary:Colors.primary,
    },
    back: {
      base: Colors.background,
      primary: Colors.primary,
      primaryActive: Colors.neutral,
      success: Colors.success,
      successActive: Colors.successActive,
      info: Colors.info,
      infoActive: Colors.infoActive,
      warning: Colors.warning,
      warningActive: Colors.warningActive,
      danger: Colors.danger,
      dangerActive: Colors.dangerActive,
      foreground: Colors.foreground,
      background: Colors.background,
      outline: 'transparent',
      material: Colors.primary,
      disabled: Colors.neutral
    },
    border: {
      base: Colors.primary,
      underline: Colors.neutral,
      solid: '#0000003B',
      material: Colors.warning,
      disabled:Colors.neutral,
      card: '#00000014'
    }
  },
  fonts: {
    sizes: {
      base: Colors.fontSize,
      small: Colors.fontSize * .8,
      medium: Colors.fontSize,
      large: Colors.fontSize * 1.2,
      xlarge: 34,
      xxlarge: 40,
    }
  }
};