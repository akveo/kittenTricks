import React from 'react';
import { Animated, StyleSheet, ViewStyle } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomNavigationTab, Divider, StyleService } from '@ui-kitten/components';
import { BrandBottomNavigation } from '../../components/brand-bottom-navigation.component';
import { ColorPaletteIcon, LayoutIcon, StarOutlineIcon } from '../../components/icons';

const useVisibilityAnimation = (visible: boolean): ViewStyle => {

  const animation = React.useRef<Animated.Value>(new Animated.Value(visible ? 1 : 0));

  React.useEffect(() => {
    Animated.timing(animation.current, {
      duration: 200,
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return {
    transform: [
      {
        // @ts-ignore
        translateY: animation.current.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
    position: visible ? null : 'absolute',
  };
};

export const HomeBottomNavigation: React.FC<BottomTabBarProps> = ({ navigation, state, descriptors }) => {

  const focusedRoute = state.routes[state.index];
  const { tabBarVisible } = descriptors[focusedRoute.key].options;
  const safeAreaInsets = useSafeAreaInsets();

  const transforms = useVisibilityAnimation(tabBarVisible);

  const onSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <Animated.View style={[styles.container, transforms, { paddingBottom: tabBarVisible ? safeAreaInsets.bottom : 0 }]}>
      <Divider />
      <BrandBottomNavigation
        appearance='noIndicator'
        selectedIndex={state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          title='Layouts'
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title='Components'
          icon={StarOutlineIcon}
        />
        <BottomNavigationTab
          title='Themes'
          icon={ColorPaletteIcon}
        />
      </BrandBottomNavigation>
    </Animated.View>
  );
};

const styles = StyleService.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});
