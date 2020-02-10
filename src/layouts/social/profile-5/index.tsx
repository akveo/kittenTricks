import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { RateBar } from './extra/rate-bar.component';
import { ProfileParameter } from './extra/profile-parameter.component';
import { Profile } from './extra/data';

const profile: Profile = Profile.jenAustin();

export default (): React.ReactElement => {

  const [rating, setRating] = React.useState<number>(profile.experience);

  return (
    <ImageOverlay
      style={styles.container}
      source={profile.photo}>
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
