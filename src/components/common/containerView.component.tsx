import React from 'react';
import {
  ScrollView,
  ScrollViewProps,
} from 'react-native';

export type ContainerViewProps = ScrollViewProps;

/**
 * React Native ScrollView component, but modified to remove bounces by default
 *
 * Used everywhere per app, where content needs to be scrollable to fit layout to device screen
 */
export class ContainerView extends React.Component<ContainerViewProps> {

  public render(): React.ReactElement<ScrollViewProps> {
    return (
      <ScrollView
        bounces={false}
        bouncesZoom={false}
        alwaysBounceVertical={false}
        alwaysBounceHorizontal={false}
        {...this.props}
      />
    );
  }
}
