import React from 'react';
import { View } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { Input } from '@kitten/ui';
import {
  ComponentsList,
  ComponentsListItemData,
} from '@src/components/menu';
import { textStyle } from '@src/components/common';
import { SearchIconOutline } from '@src/assets/icons';

interface ComponentProps {
  data: ComponentsListItemData[];
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

  public render(): React.ReactNode {
    const { themedStyle, data } = this.props;

    return (
      <View style={themedStyle.container}>
        <Input
          style={themedStyle.searchInput}
          textStyle={textStyle.paragraph}
          placeholder='Search'
          icon={SearchIconOutline}
          onChangeText={this.onSearchInputTextChange}
        />
        <ComponentsList
          contentContainerStyle={themedStyle.contentContainer}
          data={data}
          onItemPress={this.onItemPress}
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
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchInput: {
    marginHorizontal: 24,
    backgroundColor: theme['color-white'],
  },
}));
