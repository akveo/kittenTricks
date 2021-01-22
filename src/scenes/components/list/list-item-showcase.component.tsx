import React from 'react';
import {
  CheckBox,
  CheckBoxProps,
  ListItem,
  ListItemElement,
  ListItemProps,
  StyleType,
} from '@ui-kitten/components';
import { StarIcon } from '../../../components/icons';

const AccessoryElement = (style: StyleType): React.ReactElement<CheckBoxProps> => {
  const [checked, setChecked] = React.useState<boolean>(true);

  const onChange = (nextChecked: boolean): void => {
    setChecked(nextChecked);
  };

  return (
    <CheckBox
      checked={checked}
      onChange={onChange}
    />
  );
};

export const ListItemShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} />
);

export const ListItemIconShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem accessoryLeft={StarIcon} {...props} />
);

export const ListItemAccessoryShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} accessoryRight={AccessoryElement}/>
);

export const ListItemIconAccessoryShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} accessoryLeft={StarIcon}
            accessoryRight={(style) => AccessoryElement(style)}/>
);
