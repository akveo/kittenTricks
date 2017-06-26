const Colors = {
  accent: '#ffffff',
  primary: '#ffffff',
  success: '#3bd555',
  disabled: '#686894',
  danger: '#f53d56',

  foreground: '#ffffff',
  alterForeground: '#acacd2',
  inverseForeground: '#ffffff',
  secondaryForeground: '#bcbcbc',
  hintForeground: '#969696',
  fadedForeground: '#ffffffdd',

  boldBackground: '#090f3f',
  background: '#0a1142',
  alterBackground: '#12194d',
  overlayBackground: '#00000057',
  neutralBackground: '#2f396b',
  fadedBackground: '#28305a',
  brandBackground: '#6b35e4',

  border: '#080e36',

  twitter: '#ffffff',
  google: '#ffffff',
  facebook: '#ffffff',

  gradientBaseBegin: '#6b35e4',
  gradientBaseEnd: '#6b35e4',
  gradientVisaBegin: '#63e2ff',
  gradientVisaEnd: '#712ec3',
  gradientMasterBegin: '#febb5b',
  gradientMasterEnd: '#f24645',
  gradientAxpBegin: '#42e695',
  gradientAxpEnd: '#3bb2bb',

  // -----
  faded: '#e5e5e5',
  icon: '#c2c2c2',
  neutral: '#f2f2f2',


  info: '#2942ff',
  warning: '#feb401',

  doughnutFirst: '#d500f9',
  doughnutSecond: '#7c4dff',
  doughnutThird: '#40c4ff',
  doughnutFourth: '#2962ff',

  followersProgress: '#d500f9',

  followersFirst: '#2942ff',
  followersSecond: '#1b2ba6',
  followersThird: '#081c6e',
  followersFourth: '#09103f',

  chartsAreaStroke:'#2942ff',
  chartsAreaFill: '#0d1238'

};

const Fonts = {
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  bold: 'Roboto-Medium',
  logo: 'Righteous-Regular',
};

const FontBaseValue = 18;

export const DarkKittenTheme = {
  name: 'dark',
  colors: {
    accent: Colors.accent,
    primary: Colors.primary,
    disabled: Colors.disabled,
    twitter: Colors.twitter,
    google: Colors.google,
    facebook: Colors.facebook,
    brand: Colors.brandBackground,
    info: Colors.info,
    infoActive: Colors.info,
    text: {
      base: Colors.foreground,
      secondary: Colors.foreground,
      accent: Colors.accent,
      inverse: Colors.inverseForeground,
      hint: Colors.alterForeground
    },
    screen: {
      base: Colors.background,
      alter: Colors.alterBackground,
      scroll: Colors.background,
      bold: Colors.boldBackground,
      overlay: Colors.overlayBackground
    },
    button: {
      back: Colors.alterBackground,
      underlay: Colors.neutralBackground,
      highlight: Colors.brandBackground
    },
    input: {
      text: Colors.alterForeground,
      background: Colors.alterBackground,
      label: Colors.alterForeground,
      placeholder: Colors.alterForeground,
    },
    border: {
      base: Colors.border,
      accent: Colors.alterBackground,
      secondary: Colors.secondaryForeground
    },
    control: {
      background: Colors.alterBackground
    },
    badge: {
      likeBackground: Colors.foreground,
      likeForeground: Colors.danger,
      plusBackground: Colors.foreground,
      plusForeground: Colors.success,
    },
    chat: {
      messageInBackground: Colors.fadedBackground,
      messageOutBackground: Colors.neutralBackground,
      text: Colors.fadedForeground
    },
    gradients: {
      base: [Colors.gradientBaseBegin, Colors.gradientBaseEnd],
      visa: [Colors.gradientVisaBegin, Colors.gradientVisaEnd],
      mastercard: [Colors.gradientMasterBegin, Colors.gradientMasterEnd],
      axp: [Colors.gradientAxpBegin, Colors.gradientAxpEnd],
    },
    dashboard: {
      stars: Colors.alterBackground,
      tweets: Colors.alterBackground,
      likes: Colors.alterBackground,
    },
    charts: {
      followersProgress: Colors.followersProgress,
      doughnut: [Colors.doughnutFirst, Colors.doughnutSecond, Colors.doughnutThird, Colors.doughnutFourth],
      followersArea: [Colors.followersFirst, Colors.followersSecond, Colors.followersThird, Colors.followersFourth],
      area: {
        stroke: Colors.chartsAreaStroke,
        fill: Colors.chartsAreaFill
      }
    }
  },
  fonts: {
    sizes: {
      h0: 32,
      h1: 26,
      h2: 24,
      h3: 20,
      h4: 18,
      h5: 16,
      h6: 15,
      p1: 16,
      p2: 15,
      p3: 15,
      p4: 13,
      s1: 15,
      s2: 14,
      s3: 14,
      s4: 12,
      s5: 12,
      s6: 13,
      s7: 10,
      base: FontBaseValue,
      small: FontBaseValue * .8,
      medium: FontBaseValue,
      large: FontBaseValue * 1.2,
      xlarge: FontBaseValue / 0.75,
      xxlarge: FontBaseValue * 1.6,
    },
    lineHeights: {
      medium: 18,
      big: 24
    },
    family: {
      regular: Fonts.regular,
      light: Fonts.light,
      bold: Fonts.bold,
      logo: Fonts.logo
    }
  }
};