import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  Button,
} from '@kitten/ui';
import { ContextType } from '@src/core/utils/themeContext';
import { TrainingCard2 } from '@src/components/trainings/trainingCard2.component';
import { exercises1 } from '@src/core/data/exercise';

interface ThemesContentComponentProps {
  context: ContextType;
}

type Props = ThemedComponentProps & ThemesContentComponentProps;

class ThemesContentComponent extends React.Component<Props> {

  private onLightThemePress = (): void => {
    this.props.context.toggleTheme('light');
  };
  private onDarkThemePress = (): void => {
    this.props.context.toggleTheme('dark');
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        {/*<TouchableOpacity style={themedStyle.card}>*/}
        {/*<View style={[themedStyle.cardContent, themedStyle.leftLightContent]}>*/}
        {/*<Text category='h5'>Eva Light</Text>*/}
        {/*</View>*/}
        {/*<View style={[themedStyle.cardContent, themedStyle.rightLightContent]}>*/}
        {/*<TrainingCard2*/}
        {/*style={themedStyle.firstTraining}*/}
        {/*training={exercises1[0]}*/}
        {/*index={0}*/}
        {/*onDetails={() => {}}*/}
        {/*/>*/}
        {/*<TrainingCard2*/}
        {/*style={themedStyle.training}*/}
        {/*training={exercises1[0]}*/}
        {/*index={0}*/}
        {/*onDetails={() => {}}*/}
        {/*/>*/}
        {/*</View>*/}
        {/*</TouchableOpacity>*/}
        <Button
          style={themedStyle.firstTraining}
          onPress={this.onLightThemePress}>Eva Light</Button>
        <Button onPress={this.onDarkThemePress}>Eva Dark</Button>
      </View>
    );
  }
}

export const ThemesContent = withStyles(ThemesContentComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: theme['color-basic-100'],
  },
  card: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
  },
  leftLightContent: {
    backgroundColor: theme['color-white'],
    alignItems: 'center',
    paddingTop: 24,
  },
  rightLightContent: {
    backgroundColor: '#F0F2F5',
    padding: 8,
  },
  firstTraining: {
    marginBottom: 16,
  },
}));
