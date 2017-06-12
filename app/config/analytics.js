import {
  GoogleAnalyticsTracker,
} from 'react-native-google-analytics-bridge';

let google_analytics_id = 'UA-100868948-1';

let tracker = new GoogleAnalyticsTracker(google_analytics_id);

let track = screen => tracker.trackScreenView(screen);

export default track;