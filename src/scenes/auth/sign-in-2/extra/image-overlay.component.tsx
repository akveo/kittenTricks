import React from 'react';
import { ImageBackground, ImageBackgroundProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface OverlayImageStyle extends ViewStyle {
  overlayColor?: string;
}

export interface ImageOverlayProps extends ImageBackgroundProps {
  style?: StyleProp<OverlayImageStyle>;
  children?: React.ReactNode;
}

export const ImageOverlay = (props?: ImageOverlayProps): React.ReactElement<ImageBackgroundProps> => {

  const { style, children, ...restProps } = props;
  const { overlayColor: derivedOverlayColor, ...containerStyle } = StyleSheet.flatten(style);

  // @ts-ignore: overlayColor (additional style property)
  const overlayColor: string = derivedOverlayColor || styles.overlay.backgroundColor;

  return (
    <ImageBackground
      style={containerStyle}
      {...restProps}>
      <View style={[styles.overlay, { backgroundColor: overlayColor }]}/>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    ...StyleSheet.absoluteFillObject,
  },
});
