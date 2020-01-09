import React from 'react';
import { Image, ImageSourcePropType, ListRenderItemInfo, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Layout, List, Menu } from '@ui-kitten/components';
import { CameraIcon, FileIcon, ImageIcon, PeopleIcon, PinIcon } from './icons';

export interface AttachmentsMenuProps {
  attachments: ImageSourcePropType[];
  onSelectPhoto: () => void;
  onSelectFile: () => void;
  onSelectLocation: () => void;
  onSelectContact: () => void;
  onCameraPress: () => void;
  onAttachmentSelect: (index: number) => void;
  onDismiss: () => void;
}

export type AttachmentsMenuElement = React.ReactElement<AttachmentsMenuProps>;

const menu = [
  { title: 'Photo or Video', accessory: ImageIcon },
  { title: 'File', accessory: FileIcon },
  { title: 'Location', accessory: PinIcon },
  { title: 'Contact', accessory: PeopleIcon },
];

export const AttachmentsMenu = (props: AttachmentsMenuProps): React.ReactElement => {

  const onAttachmentsMenuItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        props.onSelectPhoto();
        return;
      }
      case 1: {
        props.onSelectFile();
        return;
      }
      case 2: {
        props.onSelectLocation();
        return;
      }
      case 3: {
        props.onSelectContact();
        return;
      }
    }
  };

  const renderActionAttachment = (): React.ReactElement => (
    <Button
      style={styles.attachmentsAction}
      appearance='outline'
      icon={CameraIcon}
      onPress={props.onCameraPress}
    />
  );

  const renderAttachment = (info: ListRenderItemInfo<ImageSourcePropType>): React.ReactElement => (
    <TouchableOpacity onPress={() => props.onAttachmentSelect(info.index)}>
      <Image
        style={styles.attachmentItem}
        source={info.item}
      />
    </TouchableOpacity>
  );

  return (
    <Layout>
      <List
        style={styles.attachmentsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.attachments}
        renderItem={renderAttachment}
        ListHeaderComponent={renderActionAttachment}
      />
      <Menu
        data={menu}
        scrollEnabled={false}
        onSelect={onAttachmentsMenuItemSelect}
      />
      <Button
        appearance='ghost'
        size='giant'
        onPress={props.onDismiss}>
        CANCEL
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  attachmentsContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginBottom: 8,
    maxHeight: 72,
    backgroundColor: 'transparent',
  },
  attachmentsAction: {
    aspectRatio: 1.0,
    height: '100%',
    marginHorizontal: 8,
  },
  attachmentItem: {
    width: 72,
    height: 72,
    marginHorizontal: 8,
    borderRadius: 4,
  },
});
