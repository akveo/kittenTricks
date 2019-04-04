import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Avatar,
  ButtonAlignments,
} from '@kitten/ui';
import {
  LikeButton,
  Text,
} from '@src/components/common';

interface ListDerivedProps {
  index: number;
}

interface ComponentProps extends ListDerivedProps {
  photo: ImageSourcePropType;
  profilePhoto: ImageSourcePropType;
  authorName: React.ReactText;
  date: React.ReactText;
  likes: React.ReactText;
  onPress: (index: number) => void;
  onLikePress: (index: number) => void;
}

export type Profile1ListItemProps = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

class Profile1ListItemComponent extends React.Component<Profile1ListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress(this.props.index);
  };

  public render(): React.ReactNode {
    const {
      style,
      themedStyle,
      onPress,
      photo,
      profilePhoto,
      authorName,
      date,
      likes,
      ...restProps
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.65}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Image
          style={themedStyle.photo}
          source={photo}
        />
        <View style={themedStyle.infoContainer}>
          <View style={themedStyle.authorContainer}>
            <Avatar
              style={themedStyle.authorPhoto}
              source={profilePhoto}
            />
            <View style={themedStyle.detailsContainer}>
              <Text style={themedStyle.authorNameLabel}>{authorName}</Text>
              <Text style={themedStyle.dateLabel}>{date}</Text>
            </View>
          </View>
          <LikeButton
            style={themedStyle.likeButton}
            alignment={ButtonAlignments.RIGHT}
            onPress={this.onLikeButtonPress}>
            {likes}
          </LikeButton>
        </View>
      </TouchableOpacity>
    );
  }
}

export const Profile1ListItem = withStyles(Profile1ListItemComponent, (theme: ThemeType) => ({
  container: {
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    marginLeft: 16,
  },
  photo: {
    minHeight: 220,
  },
  authorPhoto: {
    width: 40,
    height: 40,
  },
  authorNameLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 13,
    color: '#0D1C2E',
  },
  dateLabel: {
    fontSize: 11,
    color: '#8992A3',
  },
  likeButton: {
    fontSize: 13,
    color: '#0D1C2E',
  },
}));
