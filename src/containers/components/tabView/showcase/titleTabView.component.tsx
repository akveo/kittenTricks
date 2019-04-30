import React from 'react';
import {
  Tab,
  TabView,
  TabViewProps,
  Text,
} from '@kitten/ui';

type TabViewElement = React.ReactElement<TabViewProps>;

interface State {
  selectedIndex: number;
}

export class TitleTabViewShowcase extends React.Component<TabViewProps, State> {

  public state: State = {
    selectedIndex: this.props.selectedIndex,
  };

  private onTabSelect = (selectedIndex: number) => {
    this.setState({ selectedIndex });
  };

  public render() {
    return (
      <TabView
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onTabSelect}>
        <Tab title='TAB 1'>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab title='TAB 2'>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab title='TAB 3'>
          <Text>
            You're done
          </Text>
        </Tab>
      </TabView>
    );
  }
}

export const TitleTabView = (props?: any): TabViewElement => {
  return (
    <TitleTabViewShowcase {...props}/>
  );
};
