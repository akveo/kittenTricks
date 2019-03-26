import React from 'react';
import { default as mapping } from '@eva/eva';
import { theme } from '@eva/theme-eva';
import { ApplicationProvider } from '@kitten/theme';
import { Router } from './core/navigation/routes';

export default class App extends React.Component {

  public render(): React.ReactNode {
    return (
      <ApplicationProvider
        mapping={mapping}
        theme={theme}>
        <Router/>
      </ApplicationProvider>
    );
  }
}
