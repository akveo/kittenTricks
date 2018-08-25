import { Analytics, PageHit } from 'expo-analytics';

const analytics = new Analytics('UA-112172761-2');

const track = screen => analytics.hit(new PageHit(screen));

export default track;
