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
  onPress?: (route: string) => void;
}

type Props = ThemedComponentProps & SocialComponentProps;

class Social extends React.Component<Props> {

  private onPress = (event: GestureResponderEvent, index: number): void => {
    if (this.props.onPress) {
      this.props.onPress(this.props.routes[index].title);
    }
  };

  private renderItem = (info: ListRenderItemInfo<ListItemProps>): React.ReactElement<ListItemProps> => {
    const { item, index } = info;

    return (
      <ListItem
        title={item.title}
        description={item.description}
        icon={item.icon}
        accessory={item.accessory}
        onPress={this.onPress}>
      </ListItem>
    );
  };

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        <List
          data={this.props.routes}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

export const SocialComponent = withStyles(Social, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
