import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { RateBar } from './extra/rate-bar.component';
import { ProfileParameter } from './extra/profile-parameter.component';
import { ArrowIosBackIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Profile } from './extra/data';

const profile: Profile = Profile.jenAustin();

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const [rating, setRating] = React.useState<number>(profile.experience);

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
  );

  return (
    <ImageOverlay
      style={[styles.container, { paddingTop: safeArea.top }]}
      source={profile.photo}>
      <TopNavigation
        appearance='control'
        leftControl={renderBackAction()}
      />
      <View style={styles.profileDetailsContainer}>
        <Text
          style={styles.profileName}
          category='h1'
          status='control'>
          {profile.fullName}
        </Text>
        <Text
          style={styles.profileLocation}
          category='h6'
          status='control'>
          {profile.location}
        </Text>
        <RateBar
          hint='Experience'
          value={rating}
          onValueChange={setRating}
        />
        <View style={styles.profileParametersContainer}>
          <ProfileParameter
            hint='Height'
            value={`${profile.height} cm`}
          />
          <ProfileParameter
            hint='Age'
            value={`${profile.age}`}
          />
          <ProfileParameter
            hint='Inseam'
            value={`${profile.inseam} cm`}
          />
          <ProfileParameter
            hint='Weight'
            value={`${profile.weight} kg`}
          />
        </View>
      </View>
    </ImageOverlay>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileDetailsContainer: {
    position: 'absolute',
    paddingHorizontal: 24,
    paddingBottom: 32,
    left: 0,
    right: 0,
    bottom: 0,
  },
  profileName: {
    marginVertical: 16,
  },
  profileLocation: {
    marginVertical: 8,
  },
  profileParametersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 64,
  },
});
