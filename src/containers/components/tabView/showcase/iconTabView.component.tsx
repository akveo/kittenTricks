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

class IconTabViewShowcase extends React.Component<TabViewProps, State> {

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
        <Tab icon={StarIconFill}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab icon={StarIconFill}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab icon={StarIconFill}>
          <Text>
            You're done
          </Text>
        </Tab>
      </TabView>
    );
  }
}

export const IconTabView = (props?: any): TabViewElement => {
  return (
    <IconTabViewShowcase {...props}/>
  );
};
