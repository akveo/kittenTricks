import React from 'react';
import { StyleType } from '@kitten/theme';
import {
  ImageProps,
  StyleSheet,
} from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  TopNavigationBarActionProps,
} from '@kitten/ui';
import { SafeAreaView } from 'react-navigation';

export interface TopNavigationBarProps {
  title?: string;
  backIcon?: BackIconProp;
  onBackPress?: () => void;
}

type BackIconProp = (style: StyleType) => React.ReactElement<ImageProps>;
type BackButtonElement = React.ReactElement<TopNavigationBarActionProps>;

export class TopNavigationBar extends React.Component<TopNavigationBarProps> {

  private onBackButtonPress = () => {
    if (this.props.onBackPress) {
      this.props.onBackPress();
    }
  };

  private renderBackButton = (source: BackIconProp): BackButtonElement => {
    return (
      <TopNavigationAction
        icon={source}
        onPress={this.onBackButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { title, backIcon } = this.props;

    const leftControlElement: BackButtonElement | null = backIcon ? this.renderBackButton(backIcon) : null;

    return (
      <SafeAreaView style={styles.safeArea}>
        <TopNavigation
          alignment='center'
          title={title}
          leftControl={leftControlElement}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
});
