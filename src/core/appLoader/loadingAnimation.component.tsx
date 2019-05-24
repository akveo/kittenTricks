import React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';
import { splash } from '@src/assets/images';

interface Props {
  isLoaded: boolean;
}

interface State {
  animationValue: Animated.Value;
  animationCompleted: boolean;
}

export class LoadingAnimationComponent extends React.Component<Props, State> {

  public state: State = {
    animationValue: new Animated.Value(0),
    animationCompleted: false,
  };

  public componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
    if (nextProps.isLoaded && nextProps.isLoaded !== this.props.isLoaded) {
      this.triggerAnimation();
    }
  }

  private triggerAnimation(): void {
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.in(Easing.exp),
    }).start(() => this.onAnimationCompleted());
  }

  private onAnimationCompleted(): void {
    this.setState({ animationCompleted: true });
  }

  public renderAnimatedComponent(): React.ReactNode {
    const opacity: Animated.AnimatedInterpolation = this.state.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
    const transform: Object[] = [
      {
        scale: this.state.animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ];

    return (
      <Animated.View
        style={[styles.container, { opacity }]}>
        <Animated.Image
          source={splash.imageSource}
          style={[styles.image, { transform }]}
        />
      </Animated.View>
    );
  }

  public render(): React.ReactNode {
    const { animationCompleted } = this.state;
    return animationCompleted ? null : this.renderAnimatedComponent();
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: undefined,
    height: undefined,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});
