import React from 'react';
import { View } from 'react-native';
import { Button, CheckBox, Input, useStyleSheet } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ProfileAvatar } from './extra/profile-avatar.component';
import { EmailIcon, EyeIcon, EyeOffIcon, PersonIcon, PlusIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  const [userName, setUserName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const styles = StyleSheet.create();

  const onSignUpButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onSignInButtonPress = (): void => {
    navigation && navigation.navigate('SignIn3');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderEditAvatarButton = (): React.ReactElement => (
    <Button
      style={styles.editAvatarButton}
      status='basic'
      icon={PlusIcon}
    />
  );

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/image-background.jpg')}>
        <View style={styles.headerContainer}>
          <ProfileAvatar
            style={styles.profileAvatar}
            resizeMode='center'
            source={require('./assets/image-person.png')}
            editButton={renderEditAvatarButton}
          />
        </View>
        <View style={styles.formContainer}>
          <Input
            status='control'
            autoCapitalize='none'
            placeholder='User Name'
            icon={PersonIcon}
            value={userName}
            onChangeText={setUserName}
          />
          <Input
            style={styles.formInput}
            status='control'
            autoCapitalize='none'
            placeholder='Email'
            icon={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.formInput}
            status='control'
            autoCapitalize='none'
            secureTextEntry={!passwordVisible}
            placeholder='Password'
            icon={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <CheckBox
            style={styles.termsCheckBox}
            textStyle={styles.termsCheckBoxText}
            text='I read and agree to Terms & Conditions'
            checked={termsAccepted}
            onChange={(checked: boolean) => setTermsAccepted(checked)}
          />
        </View>
        <Button
          style={styles.signUpButton}
          size='giant'
          onPress={onSignUpButtonPress}>
          SIGN UP
        </Button>
        <Button
          style={styles.signInButton}
          appearance='ghost'
          status='control'
          onPress={onSignInButtonPress}>
          Already have an account? Sign In
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const StyleSheet = useStyleSheet({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
  },
  profileAvatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
    backgroundColor: 'background-basic-color-1',
    tintColor: 'text-hint-color',
  },
  editAvatarButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: 'text-control-color',
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});

