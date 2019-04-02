import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  List,
  ListItemProps,
} from '@kitten/ui';
import { ListItem } from './layouts.container';
import { LayoutsListItem } from './layoutsListItem.component';

interface ComponentProps {
  items: ListItem[];
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class LayoutsComponent extends React.Component<Props> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  private renderItem = (info: ListRenderItemInfo<ListItem>): React.ReactElement<ListItemProps> => {
    const { title, icon } = info.item;
    return (
      <LayoutsListItem
        style={this.props.themedStyle.item}
        title={title}
        icon={icon}
        onPress={() => this.onItemPress(info.index)}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, items } = this.props;

    return (
      <List
        style={themedStyle.container}
        contentContainerStyle={themedStyle.contentContainer}
        numColumns={2}
        data={items}
        renderItem={this.renderItem}
      />
    );
  }
}

export const Layouts = withStyles(LayoutsComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: '#F7F8FA',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  item: {
    flex: 1,
    height: 160,
    marginHorizontal: 8,
    marginVertical: 8,
  },
}));
