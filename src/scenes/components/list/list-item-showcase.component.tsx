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
  <ListItem icon={StarIcon} {...props} />
);

export const ListItemAccessoryShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} accessory={AccessoryElement}/>
);

export const ListItemIconAccessoryShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} icon={StarIcon}
            accessory={(style, index) => <AccessoryElement style={style} index={index}/>}/>
);
