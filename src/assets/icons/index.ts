import {
  StyleProp,
  ImageStyle,
} from 'react-native';
import {
  Icon,
  IconElement,
  IconSource,
  RemoteIcon,
} from './icon.component';

export const MenuIconAuth = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./icon-auth.png'),
  };

  return Icon(source, style);
};

export const MenuIconSocial = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./icon-social.png'),
  };

  return Icon(source, style);
};

export const MenuIconArticles = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./icon-articles.png'),
  };

  return Icon(source, style);
};

export const MenuIconMessaging = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./icon-messaging.png'),
  };

  return Icon(source, style);
};

export const MenuIconDashboards = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./icon-dashboards.png'),
  };

  return Icon(source, style);
};

export const MenuIconWalkthrough = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./icon-walkthrough.png'),
  };

  return Icon(source, style);
};

export const MenuIconEcommerce = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./icon-ecommerce.png'),
  };

  return Icon(source, style);
};

export const MenuIconNavigation = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./icon-navigation.png'),
  };

  return Icon(source, style);
};

export const ArrowHeadDownIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.arrowHeadDownOutline, style);
};

export const ArrowHeadUpIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.arrowHeadUpOutline, style);
};

export const BackArrowIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.backArrowFill, style);
};

export const BulbIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.bulbFill, style);
};

export const CameraIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.cameraFill, style);
};

export const CartIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.cartOutline, style);
};

export const CartIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.cartOutline, style);
};

export const ClockIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.clockOutline, style);
};

export const EmailIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.emailFill, style);
};

export const EyeOffIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.eyeOffFill, style);
};

export const ColorPaletteIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.colorPaletteOutline, style);
};

export const ForwardArrowIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.arrowForwardOutline, style);
};

export const ForwardIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.arrowForwardOutline, style);
};

export const GridIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.gridOutline, style);
};

export const HeartIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.heartFill, style);
};

export const LayoutIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.layoutOutline, style);
};

export const LockIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.lockFill, style);
};

export const MessageCircleIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.messageCircleFill, style);
};

export const MessageCircleIconOutline = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.messageCircleOutline, style);
};

export const MoreIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.moreFill, style);
};

export const PersonIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.personFill, style);
};

export const PhoneIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.phoneFill, style);
};

export const PersonAddIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.personAddFill, style);
};

export const PinIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.pinFill, style);
};

export const PinIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.pinOutline, style);
};

export const PlusIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.plusOutline, style);
};

export const MinusIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.minusOutline, style);
};

export const SearchIconOutline = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.searchOutline, style);
};

export const StarIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.starFill, style);
};

export const StarIconOutline = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.starOutline, style);
};

export const FlashIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.flashOutline, style);
};

export const DoneAllIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.doneAllFill, style);
};

export const MoreVerticalIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.moreVerticalFill, style);
};

export const CreditCardIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.creditCardFill, style);
};

export const CloseIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.closeFill, style);
};

export const MicIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.micFill, style);
};

export const PaperPlaneIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.paperPlaneFill, style);
};

export const ImageIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.image, style);
};

export const FileTextIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.fileTextFill, style);
};

export const MapIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.mapFill, style);
};

export const PeopleIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.peopleFill, style);
};

export const PlayCircleIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.playCircleFill, style);
};

export const ShareIcon = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.shareOutline, style);
};

export const ListIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.listFill, style);
};

export const GoogleIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.googleFill, style);
};

export const FacebookIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.facebookFill, style);
};

export const TwitterIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  return Icon(evaIcons.twitterFill, style);
};

const evaIcons: { [key: string]: IconSource } = {
  arrowForwardFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png'),
  backArrowFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-back.png'),
  bulbFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/bulb.png'),
  cameraFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/camera.png'),
  cartFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/shopping-cart.png'),
  emailFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/email.png'),
  eyeOffFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/eye-off.png'),
  facebookFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/facebook.png'),
  googleFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/google.png'),
  heartFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/heart.png'),
  listFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/list.png'),
  lockFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/lock.png'),
  messageCircleFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/message-circle.png'),
  moreFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/more-horizontal.png'),
  personFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/person.png'),
  phoneFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/phone.png'),
  personAddFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/person-add.png'),
  pinFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/pin.png'),
  settingsFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/settings.png'),
  starFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/star.png'),
  starOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/star-outline.png'),
  twitterFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/twitter.png'),
  doneAllFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/done-all.png'),
  moreVerticalFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/more-vertical.png'),
  creditCardFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/credit-card.png'),
  closeFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/close.png'),
  micFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/mic.png'),
  paperPlaneFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/paper-plane.png'),
  imageFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/image.png'),
  fileTextFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/file-text.png'),
  mapFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/map.png'),
  peopleFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/people.png'),
  playCircleFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/play-circle.png'),
  moveFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/move.png'),
  menuFill: new RemoteIcon('https://akveo.github.io/eva-icons/fill/png/128/menu.png'),
  arrowForwardOutline: new RemoteIcon(
    'https://akveo.github.io/eva-icons/outline/png/128/arrow-forward-outline.png'),
  arrowHeadDownOutline: new RemoteIcon(
    'https://akveo.github.io/eva-icons/outline/png/128/arrowhead-down-outline.png'),
  arrowHeadUpOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/arrowhead-up-outline.png'),
  cartOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/shopping-cart-outline.png'),
  clockOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/clock-outline.png'),
  edit2Outline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/edit-2-outline.png'),
  colorPaletteOutline: new RemoteIcon(
    'https://akveo.github.io/eva-icons/outline/png/128/color-palette-outline.png'),
  gridOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/grid-outline.png'),
  heartOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/heart-outline.png'),
  layoutOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/layout-outline.png'),
  lockOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/lock-outline.png'),
  messageCircleOutline: new RemoteIcon(
    'https://akveo.github.io/eva-icons/outline/png/128/message-circle-outline.png'),
  personOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/person-outline.png'),
  pinOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/pin-outline.png'),
  plusOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/plus-outline.png'),
  minusOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/minus-outline.png'),
  shareOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/share-outline.png'),
  searchOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/search-outline.png'),
  smartphoneOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/smartphone-outline.png'),
  flashOutline: new RemoteIcon('https://akveo.github.io/eva-icons/outline/png/128/flash-outline.png'),
};
