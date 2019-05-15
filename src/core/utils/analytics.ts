import {
  Analytics,
  PageHit,
} from 'expo-analytics';

// TODO: replace with react tracking id
const analytics: Analytics = new Analytics('UA-140228300-1');

export function trackScreenTransition(routeName: string): Promise<void> {
  return analytics.hit(new PageHit(routeName));
}
