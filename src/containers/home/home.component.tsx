import React from 'react';
import {
  View,
  ListRenderItemInfo,
  GestureResponderEvent,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  List,
  ListItem,
  ListItemProps,
} from '@kitten/ui';

interface HomeComponentProps {
  routes: ListItemProps[];
  onCategorySelect?: (category: string) => void;
}

type Props = ThemedComponentProps & HomeComponentProps;

class Home extends React.Component<Props> {

  private onPress = (event: GestureResponderEvent, index: number): void => {
    if (this.props.onCategorySelect) {
      const { routes } = this.props;

      this.props.onCategorySelect(routes[index].title);
    }
  };

  private renderItem = (info: ListRenderItemInfo<ListItemProps>): React.ReactElement<ListItemProps> => {
    const { item } = info;

    return (
      <ListItem
        title={item.title}
        description={item.description}
        icon={item.icon}
        accessory={item.accessory}
        onPress={this.onPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { routes, themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        <List
          data={routes}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export const HomeComponent = withStyles(Home, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
