import React from 'react';
import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import { theme } from 'eva/packages/theme/eva';
import {
  Avatar,
  AvatarProps,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
  CheckBox,
  CheckBoxProps,
  Input,
  InputProps,
  Radio,
  RadioProps,
  Text,
  TextProps,
  Toggle,
  ToggleProps,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

export const ButtonShowcase = (props?: ButtonProps): React.ReactElement<ButtonProps> => {
  return (
    <Button
      {...props}>
      BUTTON
    </Button>
  );
};

export const ButtonGroupShowcase = (props?: ButtonGroupProps): React.ReactElement<ButtonGroupProps> => {
  return (
    <ButtonGroup {...props}>
      <Button icon={StarIcon}/>
      <Button icon={StarIcon}/>
    </ButtonGroup>
  );
};

export const CheckBoxShowcase = (props?: CheckBoxProps): React.ReactElement<CheckBoxProps> => {
  return (
    <CheckBox
      {...props}
      checked={true}
    />
  );
};

export const ToggleShowcase = (props?: ToggleProps): React.ReactElement<ToggleProps> => {
  return (
    <Toggle
      {...props}
      value={true}
    />
  );
};

export const RadioShowcase = (props?: RadioProps): React.ReactElement<RadioProps> => {
  return (
    <Radio
      {...props}
      checked={true}
    />
  );
};

export const InputShowcase = (props?: InputProps): React.ReactElement<InputProps> => {
  return (
    <Input
      {...props}
      placeholder='Text'
    />
  );
};

export const AvatarShowcase = (props?: AvatarProps): React.ReactElement<AvatarProps> => {
  return (
    <Avatar
      {...props}
      source={{ uri: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7790309/cena.jpg' }}
    />
  );
};

export const TextShowcase = (props?: TextProps): React.ReactElement<TextProps> => {
  return (
    <Text
      {...props}
      style={{ fontFamily: 'opensans-regular' }}>
      Read Me!
    </Text>
  );
};

export const ComplexComponentShowcase = () => {
  const style: StyleProp<ImageStyle> = {
    width: 32,
    height: 32,
    tintColor: theme['color-primary-500'],
  };

  return StarIcon(style);
};



