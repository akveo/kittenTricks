import React from 'react';
import {
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Avatar } from '@kitten/ui';
import { Text } from './text.component';

interface ComponentProps {
  photo: ImageSourcePropType;
  name: React.ReactText;
  date: React.ReactText;
}

export type ActivitiAuthoringProps = ThemedComponentProps & ViewProps & ComponentProps;

class ActivityAuthoringComponent extends React.Component<ActivitiAuthoringProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, photo, name, date, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Avatar
          style={themedStyle.authorPhoto}
          source={photo}
        />
        <View style={themedStyle.authorInfoContainer}>
          <Text style={themedStyle.authorNameLabel}>{name}</Text>
          <Text style={themedStyle.dateLabel}>{date}</Text>
        </View>
      </View>
    );
  }
}

export const ActivityAuthoring = withStyles(ActivityAuthoringComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorInfoContainer: {
    marginLeft: 16,
  },
  authorPhoto: {
    margin: 0,
  },
  authorNameLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: '#0D1C2E',
  },
  dateLabel: {
    color: '#8992A3',
    fontSize: 13,
  },
}));
