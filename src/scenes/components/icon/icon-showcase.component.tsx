import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconProps, Input } from '@ui-kitten/components';

const DEFAULT_ICON: string = 'star';

export const IconShowcase = (props: IconProps): React.ReactElement => {

  const iconRef = React.useRef();
  const [currentIcon, setCurrentIcon] = React.useState<string>(DEFAULT_ICON);
  let inputValue: string = DEFAULT_ICON;

  React.useEffect(() => {
    const animationTimeout = setTimeout(startAnimation, 500);
    return () => clearTimeout(animationTimeout);
  });

  const onInputChangeText = (text: string): void => {
    inputValue = text;
  };

  const onInputBlur = (): void => {
    // @ts-ignore
    iconRef.current.startAnimation();
    setCurrentIcon(inputValue.length > 0 ? inputValue : DEFAULT_ICON);
  };

  const startAnimation = (): void => {
    // @ts-ignore
    iconRef.current.startAnimation();
  };

  const renderIcon = (style: ImageStyle): React.ReactElement => (
    <Icon
      {...props}
      {...style}
      ref={iconRef}
      name={currentIcon}
    />
  );

  return (
    <Input
      style={{ flex: 1 }}
      placeholder='Type icon name'
      autoCapitalize='none'
      autoCorrect={false}
      caption='Unfocus to change icon'
      captionIcon={renderIcon}
      accessoryRight={renderIcon}
      onChangeText={onInputChangeText}
      onBlur={onInputBlur}
    />
  );
};
