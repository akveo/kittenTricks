import {
  Analytics,
  ScreenHit,
} from 'expo-analytics';

// TODO: replace with react tracking id
const analytics: Analytics = new Analytics('UA-61945105-8');

export function trackScreenTransition(routeName: string): Promise<void> {
  return analytics.hit(new ScreenHit(routeName));
}
