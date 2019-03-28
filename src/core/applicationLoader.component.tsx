import React from 'react';
import { Font } from 'expo';

interface Props {
  fonts: Font.FontMap;
  children: React.ReactNode;
}

interface State {
  loaded: boolean;
}

/**
 * Loads child component after asynchronous tasks are done
 */
export class ApplicationLoader extends React.Component<Props, State> {

  public state: State = {
    loaded: false,
  };

  public componentDidMount() {
    this.load().then(this.onLoaded);
  }

  private onLoaded = () => {
    this.setState({ loaded: true });
  };

  private load = (): Promise<void> => {
    return Font.loadAsync(this.props.fonts);
  };

  public render(): React.ReactNode {
    return this.state.loaded ? this.props.children : null;
  }
}
