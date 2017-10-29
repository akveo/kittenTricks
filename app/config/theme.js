import {scale, scaleVertical} from '../utils/scale'

const Colors = {
  accent: '#ff2824',
  primary: '#f64e59',
  success: '#3bd555',
  disabled: '#cacaca',

  foreground: '#212121',
  alterForeground: '#707070',
  inverseForeground: '#ffffff',
  secondaryForeground: '#bcbcbc',
  hintForeground: '#969696',
  highlight: '#bcbcbc',

  background: '#ffffff',
  alterBackground: '#f2f2f2',
  overlayBackground: '#00000057',
  neutralBackground: '#f2f2f2',
  fadedBackground:'#e5e5e5',

  border: '#f2f2f2',

  twitter: '#41abe1',
  google: '#e94335',
  facebook: '#3b5998',

  gradientBaseBegin: '#ff9147',
  gradientBaseEnd: '#ff524c',
  gradientVisaBegin:'#63e2ff',
  gradientVisaEnd:'#712ec3',
  gradientMasterBegin:'#febb5b',
  gradientMasterEnd:'#f24645',
  gradientAxpBegin:'#42e695',
  gradientAxpEnd:'#3bb2bb',

  // -----
  faded: '#e5e5e5',
  icon: '#c2c2c2',
  neutral: '#f2f2f2',


  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',

  starsStat: '#2ab5fa',
  tweetsStat: '#ffc61c',
  likesStat: '#5468ff',

  doughnutFirst: '#8a98ff',
  doughnutSecond: '#ffd146',
  doughnutThird: '#c2d521',
  doughnutFourth: '#ff6b5c',

  followersProgress: '#c2d521',

  followersFirst: '#b3e5fc',
  followersSecond: '#81d4fa',
  followersThird: '#4fc3f7',
  followersFourth: '#42a5f5',

  chartsAreaStroke:'#097fe5',
  chartsAreaFill: '#d6ecff'

};

const Fonts = {
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  bold: 'Roboto-Medium',
  logo: 'Righteous-Regular',
};

const FontBaseValue = scale(18);

export const KittenTheme = {
  name: 'light',
  colors: {
    accent: Colors.accent,
    primary: Colors.primary,
    disabled: Colors.disabled,
    twitter: Colors.twitter,
    google: Colors.google,
    facebook: Colors.facebook,
    brand: Colors.accent,
    text: {
      base: Colors.foreground,
      secondary: Colors.secondaryForeground,
      accent: Colors.accent,
      inverse: Colors.inverseForeground,
      hint: Colors.alterForeground,
    },
    input: {
      text: Colors.alterForeground,
      background: Colors.background,
      label: Colors.secondaryForeground,
      placeholder: Colors.secondaryForeground,
    },
    screen: {
      base: Colors.background,
      alter: Colors.alterBackground,
      scroll: Colors.alterBackground,
      bold: Colors.alterBackground,
      overlay: Colors.overlayBackground
    },
    button: {
      back: Colors.background,
      underlay: Colors.neutralBackground,
      highlight: Colors.primary
    },
    border: {
      base: Colors.border,
      accent: Colors.accent,
      secondary: Colors.secondaryForeground,
      highlight: Colors.highlight,
    },
    control: {
      background: Colors.background
    },
    badge:{
      likeBackground: Colors.primary,
      likeForeground: Colors.inverseForeground,
      plusBackground: Colors.success,
      plusForeground: Colors.inverseForeground,
    },
    chat:{
      messageInBackground: Colors.neutralBackground,
      messageOutBackground: Colors.fadedBackground,
      text: Colors.foreground
    },
    gradients: {
      base: [Colors.gradientBaseBegin, Colors.gradientBaseEnd],
      visa: [Colors.gradientVisaBegin, Colors.gradientVisaEnd],
      mastercard: [Colors.gradientMasterBegin, Colors.gradientMasterEnd],
      axp: [Colors.gradientAxpBegin, Colors.gradientAxpEnd],
    },
    dashboard: {
      stars: Colors.starsStat,
      tweets: Colors.tweetsStat,
      likes: Colors.likesStat,
    },
    charts:{
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
      h0: scale(32),
      h1: scale(26),
      h2: scale(24),
      h3: scale(20),
      h4: scale(18),
      h5: scale(16),
      h6: scale(15),
      p1: scale(16),
      p2: scale(15),
      p3: scale(15),
      p4: scale(13),
      s1: scale(15),
      s2: scale(13),
      s3: scale(13),
      s4: scale(12),
      s5: scale(12),
      s6: scale(13),
      s7: scale(10),
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
