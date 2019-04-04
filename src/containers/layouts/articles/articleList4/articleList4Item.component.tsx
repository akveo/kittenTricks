import React from 'react';
import {
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
import { ArticleActivityBar } from '@src/components/articles';
import {
  ImageOverlay,
  Text,
} from '@src/components/common';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps, ListDerivedProps {
  photo: ImageSourcePropType;
  title: React.ReactText;
  comments: React.ReactText;
  likes: React.ReactText;
  onPress: (index: number) => void;
  onCommentPress: (index: number) => void;
  onLikePress: (index: number) => void;
}

export type ArticleList4ItemProps = ThemedComponentProps & ComponentProps;

class ArticleList4ItemComponent extends React.Component<ArticleList4ItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  private onCommentButtonPress = () => {
    this.props.onCommentPress(this.props.index);
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, photo, title, comments, likes, ...restProps } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.photo}
          source={photo}
        />
        <View style={themedStyle.infoContainer}>
          <Text style={themedStyle.titleLabel}>{title}</Text>
          <ArticleActivityBar
            style={themedStyle.activityContainer}
            buttonStyle={themedStyle.reactionButton}
            comments={comments}
            likes={likes}
            onCommentPress={this.onCommentButtonPress}
            onLikePress={this.onLikeButtonPress}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export const ArticleList4Item = withStyles(ArticleList4ItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    minHeight: 188,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  activityContainer: {
    marginTop: 24,
  },
  photo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleLabel: {
    fontFamily: 'anton-regular',
    fontSize: 24,
    color: '#0D1C2E',
  },
}));

