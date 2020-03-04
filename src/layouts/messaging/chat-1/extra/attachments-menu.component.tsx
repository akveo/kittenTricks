import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Button, Divider, Layout, List, Menu, MenuItem } from '@ui-kitten/components';
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

export const AttachmentsMenu = (props: AttachmentsMenuProps): React.ReactElement => {

  const renderActionAttachment = (): React.ReactElement => (
    <Button
      style={styles.attachmentsAction}
      appearance='outline'
      accessoryLeft={CameraIcon}
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
    <Layout level='1'>
      <Divider style={styles.divider}/>
      <List
        style={styles.attachmentsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.attachments}
        renderItem={renderAttachment}
        ListHeaderComponent={renderActionAttachment}
      />
      <Menu scrollEnabled={false}>
        <MenuItem
          title='Photo or Video'
          accessoryRight={ImageIcon}
          onPress={props.onSelectPhoto}
        />
        <MenuItem
          title='File'
          accessoryRight={FileIcon}
          onPress={props.onSelectFile}
        />
        <MenuItem
          title='Location'
          accessoryRight={PinIcon}
          onPress={props.onSelectLocation}
        />
        <MenuItem
          title='Contact'
          accessoryRight={PeopleIcon}
          onPress={props.onSelectContact}
        />
      </Menu>
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
  divider: {
    marginBottom: 24,
  },
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
