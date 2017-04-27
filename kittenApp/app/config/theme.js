export const Colors = {
  primary: '#f53d56',
  success: '#3bd555',
  foreground: '#212121',
  alterForeground: '#707070',
  iconForeground: '#bcbcbc',
  background: '#fff',
  faded: '#e5e5e5',
  alterBackground: '#f2f2f2',
  chatIcon: '#c2c2c2',
  neutral: '#f2f2f2',
  icon: '#969696',
  overlay: '#00000057',
  //unused
  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',
  fontSize: 18
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
      primary: Colors.primary,
      secondary: Colors.alterForeground,
      icon: Colors.iconForeground
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
      neutral: Colors.neutral,
      disabled: Colors.neutral
    },
    border: {
      base: Colors.primary,
      underline: Colors.neutral,
      solid: '#0000003B',
      material: Colors.warning,
      disabled: Colors.neutral,
      card: '#00000014'
    }
  },
  fonts: {
    sizes: {
      base: Colors.fontSize,
      xsmall: 13,
      small: 15,
      medium: Colors.fontSize,
      large: 24,
      xlarge: 34,
      xxlarge: 40,
    }
  }
};