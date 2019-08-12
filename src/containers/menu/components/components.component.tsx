import React from 'react';
import { View } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  ComponentsList,
  ComponentsListItemData,
} from '@src/components/menu';

interface ComponentProps {
  data: ComponentsListItemData[];
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class ComponentsComponent extends React.Component<Props> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data } = this.props;

    return (
      <View style={themedStyle.container}>
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
    backgroundColor: theme['background-basic-color-2'],
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
}));
