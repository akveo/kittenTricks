import React from 'react';
import {
  Tab,
  TabView,
  TabViewProps,
  Text,
} from '@kitten/ui';
import { StarIconFill } from '@src/assets/icons';

type TabViewElement = React.ReactElement<TabViewProps>;

interface State {
  selectedIndex: number;
}

class IconTitleTabViewShowcase extends React.Component<TabViewProps, State> {

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
        <Tab
          title='TAB 1'
          icon={StarIconFill}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab
          title='TAB 2'
          icon={StarIconFill}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab
          title='TAB 3'
          icon={StarIconFill}>
          <Text>
            You're done
          </Text>
        </Tab>
      </TabView>
    );
  }
}

export const IconTitleTabView = (props?: any): TabViewElement => {
  return (
    <IconTitleTabViewShowcase {...props}/>
  );
};
