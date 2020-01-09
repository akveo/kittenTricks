import { Analytics, Event, ScreenHit } from 'expo-analytics';

export interface AnalyticsEventConfig {
  category: string;
  action: string;
  label?: string;
}

export class AnalyticsService {

  private analytics: Analytics;

  constructor(private trackingId: string) {
    this.analytics = new Analytics(trackingId);
  }

  trackScreen = (name: string): Promise<void> => {
    return this.analytics.hit(new ScreenHit(name));
  };

  fireEvent = (event: AnalyticsEventConfig): Promise<void> => {
    return this.analytics.event(new Event(
      event.category,
      event.action,
      event.label,
    ));
  };
}
