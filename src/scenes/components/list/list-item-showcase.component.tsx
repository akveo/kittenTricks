import React from 'react';
import { Button, ListItem, ListItemElement, ListItemProps } from '@ui-kitten/components';
import { PersonIcon, StarIcon } from '../../../components/icons';

const FollowButton = (props) => (
  <Button size='tiny'>
    FOLLOW
  </Button>
);

export const ListItemShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} />
);

export const ListItemIconShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem
    {...props}
    accessoryLeft={StarIcon}
  />
);

export const ListItemAccessoryShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem
    {...props}
    accessoryRight={FollowButton}
  />
);

export const ListItemIconAccessoryShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem
    {...props}
    accessoryLeft={PersonIcon}
    accessoryRight={FollowButton}
  />
);
