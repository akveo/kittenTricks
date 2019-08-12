import React from 'react';
import {
  ImageProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ActivityAuthoring,
  textStyle,
} from '@src/components/common';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@kitten/ui';
import { MoreHorizontalIconFill } from '@src/assets/icons';
import { Comment } from '@src/core/model';

interface ComponentProps {
  data: Comment;
  onMorePress: (index: number) => void;
}

export type CommentList2ItemProps = ThemedComponentProps & ListItemProps & ComponentProps;

class CommentList2ItemComponent extends React.Component<CommentList2ItemProps> {

  private onMorePress = () => {
    this.props.onMorePress(this.props.index);
  };

  private renderMoreIcon = (): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return MoreHorizontalIconFill(themedStyle.moreIcon);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, data, ...restProps } = this.props;

    return (
      <ListItem
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.authorContainer}>
          <ActivityAuthoring
            style={themedStyle.activityAuthoring}
            photo={data.author.photo.imageSource}
            name={`${data.author.firstName} ${data.author.lastName}`}
            date={data.date}
          />
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={this.onMorePress}>
            {this.renderMoreIcon()}
          </TouchableOpacity>
        </View>
        <Text
          style={themedStyle.commentLabel}
          category='s1'>
          {data.text}
        </Text>
      </ListItem>
    );
  }
}

export const CommentList2Item = withStyles(CommentList2ItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: theme['background-basic-color-1'],
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityAuthoring: {
    flex: 1,
  },
  moreIcon: {
    width: 18,
    height: 18,
    tintColor: theme['text-hint-color'],
  },
  commentLabel: {
    marginTop: 14,
    ...textStyle.paragraph,
  },
}));
