import React from 'react';
import {
  ListRenderItemInfo,
  View,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  Input,
  List,
  ListItemProps,
} from '@kitten/ui';
import { SearchIconOutline } from '@src/assets/icons';
import { ListItem } from './components.container';
import { ComponentsListItem } from './componentsListItem.component';

interface ComponentProps {
  items: ListItem[];
  onQueryChange: (query: string) => void;
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class ComponentsComponent extends React.Component<Props> {

  private onSearchInputTextChange = (query: string) => {
    this.props.onQueryChange(query);
  };

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  private renderItem = (info: ListRenderItemInfo<ListItem>): React.ReactElement<ListItemProps> => {
    const { title, view } = info.item;

    return (
      <ComponentsListItem
        style={this.props.themedStyle.item}
        title={title}
        onPress={() => this.onItemPress(info.index)}>
        {view()}
      </ComponentsListItem>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, items } = this.props;

    return (
      <View style={themedStyle.container}>
        <Input
          style={themedStyle.searchInput}
          placeholder='Search'
          icon={SearchIconOutline}
          onChangeText={this.onSearchInputTextChange}
        />
        <List
          contentContainerStyle={themedStyle.list}
          contentInset={themedStyle.listContentInset}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={items}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export const Components = withStyles(ComponentsComponent, (theme: ThemeType) => ({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: theme['color-basic-100'],
  },
  searchInput: {
    marginHorizontal: 8,
    backgroundColor: theme['color-white'],
  },
  list: {
    paddingVertical: 24,
  },
  listContentInset: {
    bottom: 24,
  },
  item: {
    flex: 1,
    height: 160,
    marginHorizontal: 8,
    marginVertical: 8,
  },
}));
