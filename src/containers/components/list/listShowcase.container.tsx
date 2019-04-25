import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListShowcase } from './listShowcase.component';

export interface ListItemModel {
  title: string;
  description: string;
}

const listItems: ListItemModel[] = new Array(15).fill({
  title: `Item`,
  description: [
    'Once upon a time when pigs spoke rhyme',
    'and monkeys chewed tobacco,',
    'and hens took snuff to make them tough,',
    'and ducks went quack, quack, quack, O!',
  ].join(' '),
});

interface State {
  listItemShowcaseIndex: number;
  listItems: ListItemModel[];
}

export class ListShowcaseContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    listItemShowcaseIndex: 0,
    listItems: listItems,
  };

  private onShowcaseIndexChange = (listItemShowcaseIndex: number): void => {
    this.setState({ listItemShowcaseIndex });
  };

  private onListItemPress = (index: number): void => {

  };

  public render(): React.ReactNode {
    return (
      <ListShowcase
        listItems={this.state.listItems}
        showcaseIndex={this.state.listItemShowcaseIndex}
        onShowcaseIndexChange={this.onShowcaseIndexChange}
        onListItemPress={this.onListItemPress}
      />
    );
  }
}
