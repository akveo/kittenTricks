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
import { textStyle } from '@src/components/common';
import { ListItem } from './components.container';
import { ComponentsListItem } from './componentsListItem.component';

interface ComponentProps {
  items: ListItem[];
  onQueryChange: (query: string) => void;
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<ListItemProps>;

class ComponentsComponent extends React.Component<Props> {

  private onSearchInputTextChange = (query: string) => {
    this.props.onQueryChange(query);
  };

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  private renderItemElement = (item: ListItem): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <ComponentsListItem
        style={themedStyle.item}
        activeOpacity={0.75}
        title={item.title}
        onPress={this.onItemPress}>
        {item.view()}
      </ComponentsListItem>
    );
  };

  private renderItem = (info: ListRenderItemInfo<ListItem>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  public render(): React.ReactNode {
    const { themedStyle, items } = this.props;

    return (
      <View style={themedStyle.container}>
        <Input
          style={themedStyle.searchInput}
          textStyle={textStyle.paragraph}
          placeholder='Search'
          icon={SearchIconOutline}
          onChangeText={this.onSearchInputTextChange}
        />
        <List
          contentContainerStyle={themedStyle.listContentContainer}
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
    flex: 1,
    paddingTop: 24,
    backgroundColor: theme['color-basic-100'],
  },
  searchInput: {
    marginHorizontal: 24,
    backgroundColor: theme['color-white'],
  },
  listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    flex: 1,
    height: 160,
    marginHorizontal: 8,
    marginVertical: 8,
  },
}));
