import React from 'react';
import { StyleSheet, TransformsStyle, View, ViewProps, ViewStyle } from 'react-native';

export interface ChatMessageIndicatorProps extends ViewProps {
  reverse: boolean;
}

export type ChatMessageIndicatorElement = React.ReactElement<ChatMessageIndicatorProps>;

export const ChatMessageIndicator = (props: ChatMessageIndicatorProps): React.ReactElement => {

  const { style, ...viewProps } = props;
  const flatStyle: ViewStyle = StyleSheet.flatten(style);

  const transformsStyle: TransformsStyle = {
    transform: [
      { rotate: props.reverse ? `90deg` : `-90deg` },
      // @ts-ignore
      { translateY: flatStyle.width / 2 },
    ],
  };

  const viewStyle: ViewStyle = {
    // @ts-ignore
    borderLeftWidth: flatStyle.width,
    // @ts-ignore
    borderRightWidth: flatStyle.width,
    // @ts-ignore
    borderBottomWidth: flatStyle.height,
    borderBottomColor: flatStyle.backgroundColor,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    backgroundColor: 'transparent',
  };

  return (
    <View
      {...viewProps}
      style={[style, viewStyle, transformsStyle]}
    />
  );
};
