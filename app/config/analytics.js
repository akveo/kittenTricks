import { Analytics, PageHit } from 'expo-analytics';

const google_analytics_id = 'UA-112172761-2';

const analytics = new Analytics(google_analytics_id);

const track = screen => analytics.hit(new PageHit(screen));

export default track;
