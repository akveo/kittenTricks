import React from 'react';
import {
  Image,
  ImageProps,
  View,
  ListRenderItemInfo,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  RadioGroup,
  RadioGroupProps,
  Radio,
  List,
  ListItem,
  ListItemProps,
  CheckBoxProps,
  CheckBox,
  Text,
} from '@kitten/ui';
import { ListItemModel } from './listShowcase.container';

type ListItemElement = React.ReactElement<ListItemProps>;

interface ComponentProps {
  showcaseIndex: number;
  listItems: ListItemModel[];
  onShowcaseIndexChange: (index: number) => void;
  onListItemPress: (index: number) => void;
}

export type ListShowcaseComponentProps = ThemedComponentProps & ComponentProps;

class ListShowcaseComponent extends React.Component<ListShowcaseComponentProps> {

  private onShowcaseIndexChange = (index: number): void => {
    this.props.onShowcaseIndexChange(index);
  };

  private onListItemPress = (index: number): void => {
    this.props.onListItemPress(index);
  };

  private renderRadioChooser = (): React.ReactElement<RadioGroupProps> => {
    const { themedStyle, showcaseIndex } = this.props;

    return (
      <RadioGroup
        style={themedStyle.radioGroup}
        selectedIndex={showcaseIndex}
        onChange={this.onShowcaseIndexChange}>
        <Radio style={themedStyle.radioItem} text='With Icon'/>
        <Radio style={themedStyle.radioItem} text='With Accessory'/>
        <Radio style={themedStyle.radioItem} text='With Icon + Accessory'/>
        <Radio style={themedStyle.radioItem} text='Custom'/>
      </RadioGroup>
    );
  };

  private renderIcon = (style: StyleType, index: number): React.ReactElement<ImageProps> => {
    return (
      <Image source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/star.png' }}/>
    );
  };

  private renderAccessory = (style: StyleType, index: number): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={index % 2 === 0}/>
    );
  };

  private renderIconListItem = (info: ListRenderItemInfo<ListItemModel>): ListItemElement => {
    return (
      <ListItem
        title={info.item.title}
        description={info.item.description}
        icon={this.renderIcon}
        onPress={this.onListItemPress}
      />
    );
  };

  private renderAccessoryListItem = (info: ListRenderItemInfo<ListItemModel>): ListItemElement => {
    return (
      <ListItem
        title={info.item.title}
        description={info.item.description}
        accessory={this.renderAccessory}
        onPress={this.onListItemPress}
      />
    );
  };

  private renderIconAccessoryListItem = (info: ListRenderItemInfo<ListItemModel>): ListItemElement => {
    return (
      <ListItem
        title={info.item.title}
        description={info.item.description}
        icon={this.renderIcon}
        accessory={this.renderAccessory}
        onPress={this.onListItemPress}
      />
    );
  };

  private renderCustomListItem = (info: ListRenderItemInfo<ListItemModel>): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.customListItemContainer(info.index)}>
        <Image
          style={themedStyle.customListItemIcon}
          source={{ uri: 'https://akveo.github.io/eva-icons/outline/png/128/play-circle-outline.png' }}
        />
        <View style={themedStyle.customListItemContentContainer}>
          <Text style={themedStyle.customListItemTitle}>Welcome to the Jungle</Text>
          <Text style={themedStyle.customListItemDescription}>Guns N'Roses</Text>
        </View>
        <Button
          style={themedStyle.customListItemButton}
          status='success'
          onPress={() => this.onListItemPress(info.index)}>
          $2.99
        </Button>
      </View>
    );
  };

  private renderListItem = (info: ListRenderItemInfo<ListItemModel>): React.ReactElement<ListItemProps | ViewProps> => {
    const { showcaseIndex } = this.props;

    switch (showcaseIndex) {
      case 0:
        return this.renderIconListItem(info);
      case 1:
        return this.renderAccessoryListItem(info);
      case 2:
        return this.renderIconAccessoryListItem(info);
      case 3:
        return this.renderCustomListItem(info);
    }
  };

  public render(): React.ReactNode {
    const { themedStyle, listItems } = this.props;

    return (
      <View style={themedStyle.container}>
        {this.renderRadioChooser()}
        <List
          showsVerticalScrollIndicator={false}
          data={listItems}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}

export const ListShowcase = withStyles(ListShowcaseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  radioGroup: {
    paddingVertical: 8,
  },
  radioItem: {
    marginVertical: 8,
  },
  customListItemContainer: (index: number) => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: index % 2 === 0 ? theme['color-basic-100'] : theme['color-basic-400'],
    padding: 4,
  }),
  customListItemContentContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  customListItemIcon: {
    width: 42,
    height: 42,
    marginHorizontal: 4,
  },
  customListItemTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  customListItemDescription: {
    fontSize: 12,
    color: 'gray',
  },
  customListItemButton: {
    marginHorizontal: 4,
    width: 100,
  },
}));

