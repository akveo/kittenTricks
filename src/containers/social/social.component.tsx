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

interface SocialComponentProps {
  routes: ListItemProps[];
  onCategorySelect?: (category: string) => void;
}

type Props = ThemedComponentProps & SocialComponentProps;

class Social extends React.Component<Props> {

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
    const { themedStyle, routes } = this.props;

    return (
      <List
        style={themedStyle.container}
        data={routes}
        renderItem={this.renderItem}
      />
    );
  }
}

export const SocialComponent = withStyles(Social, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
