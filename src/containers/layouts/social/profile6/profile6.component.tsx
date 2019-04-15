import React from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  ProfileActivityList1,
  ProfileActivityList1Props,
  ProfileInfo2,
  ProfileSocials,
} from '@src/components/social';
import {
  MessageCircleIconFill,
  PersonAddIconFill,
} from '@src/assets/icons';
import {
  Profile as ProfileModel,
  ProfileSocials as ProfileSocialsModel,
  ProfileActivity as ProfileActivityModel,
  CategorisedProfileActivity as CategorisedProfileActivityModel,
} from '@src/core/model';

interface ComponentProps {
  profile: ProfileModel;
  socials: ProfileSocialsModel;
  activity: CategorisedProfileActivityModel;
  onFollowPress: () => void;
  onMessagePress: () => void;
  onFollowersPress: () => void;
  onFollowingPress: () => void;
  onPostsPress: () => void;
  onPhotoPress: (index: number) => void;
}

type ProfileActivityElement = React.ReactElement<ProfileActivityList1Props>;

export type Profile6Props = ThemedComponentProps & ComponentProps;

class Profile6Component extends React.Component<Profile6Props> {

  private onFollowPress = () => {
    this.props.onFollowPress();
  };

  private onMessagePress = () => {
    this.props.onMessagePress();
  };

  private onFollowersPress = () => {
    this.props.onFollowersPress();
  };

  private onFollowingPress = () => {
    this.props.onFollowingPress();
  };

  private onPostsPress = () => {
    this.props.onPostsPress();
  };

  private onPhotoPress = (index: number) => {
    this.props.onPhotoPress(index);
  };

  private createImageSource = (activity: ProfileActivityModel): ImageSourcePropType => {
    return { uri: activity.source };
  };

  private renderActivityElement = (category: string, activities: ProfileActivityModel[]): ProfileActivityElement => {
    return (
      <View key={category}>
        <Text style={this.props.themedStyle.categoryLabel}>{category}</Text>
        <ProfileActivityList1
          contentContainerStyle={this.props.themedStyle.activityList}
          data={activities.map(this.createImageSource)}
          onItemPress={this.onPhotoPress}
        />
      </View>
    );
  };

  private renderActivitiesElement = (source: CategorisedProfileActivityModel): React.ReactNode => {
    return Object.keys(source).map((category: string): ProfileActivityElement => {
      const categoryActivities: ProfileActivityModel[] = source[category];

      return this.renderActivityElement(category, categoryActivities);
    });
  };

  public render(): React.ReactNode {
    const { themedStyle, profile, socials, activity } = this.props;

    return (
      <View style={themedStyle.container}>
        <ProfileInfo2
          style={themedStyle.profileInfo}
          photo={{ uri: profile.photo }}
          name={`${profile.firstName} ${profile.lastName}`}
          location={profile.location}
        />
        <View style={themedStyle.actionContainer}>
          <Button
            style={themedStyle.followButton}
            icon={PersonAddIconFill}
            onPress={this.onFollowPress}>
            Follow
          </Button>
          <Button
            style={themedStyle.messageButton}
            appearance='outline'
            icon={MessageCircleIconFill}
            onPress={this.onMessagePress}>
            Message
          </Button>
        </View>
        <ProfileSocials
          style={themedStyle.profileSocials}
          followers={socials.followers}
          following={socials.following}
          posts={socials.posts}
          onFollowersPress={this.onFollowersPress}
          onFollowingPress={this.onFollowingPress}
          onPostsPress={this.onPostsPress}
        />
        <ScrollView style={themedStyle.activityContainer}>
          {this.renderActivitiesElement(activity)}
        </ScrollView>
      </View>
    );
  }
}

export const Profile6 = withStyles(Profile6Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  profileInfo: {
    paddingHorizontal: 24,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  profileSocials: {
    justifyContent: 'space-evenly',
    marginTop: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: theme['color-basic-200'],
  },
  followButton: {
    flex: 1,
    marginRight: 4,
    textTransform: 'uppercase',
  },
  messageButton: {
    flex: 1,
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  activityContainer: {
    paddingVertical: 16,
    backgroundColor: theme['color-basic-100'],
  },
  activityList: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  categoryLabel: {
    marginHorizontal: 24,
    marginTop: 8,
    color: theme['font-primary-color'],
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    textTransform: 'capitalize',
  },
}));
