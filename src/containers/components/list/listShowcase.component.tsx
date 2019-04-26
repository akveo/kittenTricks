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
  RadioGroup,
  RadioGroupProps,
  Radio,
  List,
  ListItem,
  ListItemProps,
  CheckBoxProps,
  CheckBox,
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
        <Radio style={themedStyle.radioItem} text='Plain'/>
        <Radio style={themedStyle.radioItem} text='Icon'/>
        <Radio style={themedStyle.radioItem} text='Accessory'/>
        <Radio style={themedStyle.radioItem} text='Icon & Accessory'/>
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

  private renderPlainListItem = (info: ListRenderItemInfo<ListItemModel>): ListItemElement => {
    return (
      <ListItem
        title={info.item.title}
        description={info.item.description}
        onPress={this.onListItemPress}
      />
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

  private renderListItem = (info: ListRenderItemInfo<ListItemModel>): React.ReactElement<ListItemProps | ViewProps> => {
    const { showcaseIndex } = this.props;

    switch (showcaseIndex) {
      case 0:
        return this.renderPlainListItem(info);
      case 1:
        return this.renderIconListItem(info);
      case 2:
        return this.renderAccessoryListItem(info);
      case 3:
        return this.renderIconAccessoryListItem(info);
    }
  };

  public render(): React.ReactNode {
    const { themedStyle, listItems } = this.props;

    return (
      <View style={themedStyle.container}>
        {this.renderRadioChooser()}
        <List
          contentContainerStyle={themedStyle.listContentContainer}
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
  },
  listContentContainer: {
    paddingVertical: 8,
  },
  radioGroup: {
    paddingHorizontal: 16,
  },
  radioItem: {
    marginVertical: 8,
  },
}));

