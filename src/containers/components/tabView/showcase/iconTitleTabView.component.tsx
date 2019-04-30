import React from 'react';
import {
  Tab,
  TabView,
  TabViewProps,
  Text,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

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
          icon={StarIcon}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab
          title='TAB 2'
          icon={StarIcon}>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab
          title='TAB 3'
          icon={StarIcon}>
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
