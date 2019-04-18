import React from 'react';
import {
  ImageProps,
  View,
  ViewProps,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  MediaLibrary,
  Camera,
} from 'expo';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ListItem,
  ListItemProps,
  Button,
  ViewPager,
  ViewPagerProps,
} from '@kitten/ui';
import { Text } from '@src/components/common';
import {
  CameraIcon,
  ImageIcon,
  FileTextIcon,
  MapIcon,
  PeopleIcon,
} from '@src/assets/icons';

interface ComponentProps {
  galleryFiles: MediaLibrary.Asset[];
  onCancelButtonPress: () => void;
  onPhotoOrVideoButtonPress: () => void;
  onFileButtonPress: () => void;
  onLocationButtonPress: () => void;
  onContactButtonPress: () => void;
  onTakePhotoButtonPress: () => void;
  onGalleryItemPress: (item: MediaLibrary.Asset) => void;
}

interface AddActionType {
  title: string;
  icon: React.ReactElement<ImageProps>;
}

interface State {
  addActions: AddActionType[];
}

export type Chat2FileSectionComponentProps = ThemedComponentProps & ComponentProps;

class Chat2FileSectionComponent extends React.Component<Chat2FileSectionComponentProps, State> {

  public state: State = {
    addActions: [
      {
        title: 'Photo or Video',
        icon: ImageIcon(this.props.themedStyle.actionIcon),
      },
      {
        title: 'File',
        icon: FileTextIcon(this.props.themedStyle.actionIcon),
      },
      {
        title: 'Location',
        icon: MapIcon(this.props.themedStyle.actionIcon),
      },
      {
        title: 'Contact',
        icon: PeopleIcon(this.props.themedStyle.actionIcon),
      },
    ],
  };

  private onTakePhotoPress = (): void => {
    this.props.onTakePhotoButtonPress();
  };

  private onGalleryItemPress = (item: MediaLibrary.Asset): void => {
    this.props.onGalleryItemPress(item);
  };

  private onAddActionItemPress = (index: number): void => {
    const {
      onPhotoOrVideoButtonPress,
      onFileButtonPress,
      onLocationButtonPress,
      onContactButtonPress,
    } = this.props;

    switch (index) {
      case 0:
        onPhotoOrVideoButtonPress();
        break;
      case 1:
        onFileButtonPress();
        break;
      case 2:
        onLocationButtonPress();
        break;
      case 3:
        onContactButtonPress();
        break;
    }
  };

  private onCancelPress = (): void => {
    this.props.onCancelButtonPress();
  };

  private renderPhotoItemIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return CameraIcon({ ...style, ...themedStyle.cameraIcon });
  };

  private renderPhotoItem = (): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.pagerItem} key={0}>
        <Camera
          type={Camera.Constants.Type.back}
          style={themedStyle.cameraView}>
          <View style={themedStyle.cameraContentContainer}>
            <Button
              appearance='ghost'
              icon={this.renderPhotoItemIcon}
              onPress={this.onTakePhotoPress}
            />
          </View>
        </Camera>
      </View>
    );
  };

  private renderGalleryItem = (item: MediaLibrary.Asset,
                               index: number): React.ReactElement<TouchableOpacityProps> => {

    const { themedStyle, galleryFiles } = this.props;
    const isLastItem: boolean = index === galleryFiles.length - 1;

    return (
      <TouchableOpacity
        key={index + 1}
        activeOpacity={0.95}
        style={themedStyle.galleryItemContainer(isLastItem)}
        onPress={() => this.onGalleryItemPress(item)}>
        <Image
          source={{ uri: item.uri }}
          style={themedStyle.pagerItem}
        />
      </TouchableOpacity>
    );
  };

  private renderPagerContent = (): React.ReactElement<ViewProps>[] => {
    const { galleryFiles } = this.props;

    return [
      this.renderPhotoItem(),
      ...galleryFiles.map(this.renderGalleryItem),
    ];
  };

  private renderGallery = (): React.ReactElement<ViewPagerProps> => {
    const { themedStyle } = this.props;

    return (
      <ViewPager contentWidth={72} style={themedStyle.pager}>
        {this.renderPagerContent()}
      </ViewPager>
    );
  };

  private renderAddAction = (item: AddActionType, index: number): React.ReactElement<ListItemProps> => {
    const { themedStyle } = this.props;

    return (
      <ListItem
        key={index}
        index={index}
        style={themedStyle.actionItemContainer}
        onPress={this.onAddActionItemPress}>
        <Text style={themedStyle.addActionLabel}>{item.title}</Text>
        {item.icon}
      </ListItem>
    );
  };

  private renderAddActions = (): React.ReactElement<ListItemProps>[] => {
    const { addActions } = this.state;

    return addActions.map(this.renderAddAction);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        {this.renderGallery()}
        {this.renderAddActions()}
        <Button
          style={themedStyle.cancelButton}
          appearance='ghost'
          onPress={this.onCancelPress}>
          Cancel
        </Button>
      </View>
    );
  }
}

export const Chat2FileSection = withStyles(Chat2FileSectionComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-white'],
  },
  pager: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  pagerItem: {
    width: 72,
    height: 72,
    borderRadius: 20,
    marginRight: 16,
  },
  cameraView: {
    flex: 1,
    borderRadius: 20,
  },
  cameraContentContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  cameraIcon: {
    tintColor: theme['color-white'],
    width: 25,
    height: 25,
  },
  galleryItemContainer: (isLastItem: boolean) => ({
    marginRight: isLastItem ? 0 : 16,
  }),
  actionIcon: {
    width: 20,
    height: 20,
    tintColor: theme['color-basic-500'],
  },
  actionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme['color-basic-200'],
  },
  addActionLabel: {
    color: theme['color-black'],
    fontSize: 13,
    fontWeight: '600',
  },
  cancelButton: {
    color: theme['color-primary-500'],
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    marginTop: 32,
  },
}));

