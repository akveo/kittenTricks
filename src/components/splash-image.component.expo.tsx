import React from 'react';
import { Animated, Easing, ImageProps, StyleSheet } from 'react-native';

export interface LoadingAnimationProps extends ImageProps {
  loading: boolean;
}

const animationValue: Animated.Value = new Animated.Value(0);

export const SplashImage = (props: LoadingAnimationProps): React.ReactElement | undefined => {

  const [animationCompleted, setAnimationCompleted] = React.useState<boolean>(false);

  React.useEffect((): void => {
    !props.loading && startAnimation();
  }, [props.loading]);

  const startAnimation = (): void => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 700,
      easing: Easing.in(Easing.exp),
      useNativeDriver: true,
    }).start(onAnimationCompleted);
  };

  const onAnimationCompleted = (): void => {
    setAnimationCompleted(true);
  };

  const opacity: Animated.AnimatedInterpolation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const transform = [
    {
      scale: animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.5],
      }),
    },
  ];

  const renderAnimatedComponent = (): React.ReactElement => (
    <Animated.View style={[StyleSheet.absoluteFill, styles.container, { opacity }]}>
      <Animated.Image
        {...props}
        style={[StyleSheet.absoluteFill, styles.image, props.style, { transform }]}
      />
    </Animated.View>
  );

  return !animationCompleted && renderAnimatedComponent();
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
});

