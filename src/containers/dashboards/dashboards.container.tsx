import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { DashboardsComponent } from './dashboards.component';

export class DashboardsContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <DashboardsComponent/>
    );
  }
}
