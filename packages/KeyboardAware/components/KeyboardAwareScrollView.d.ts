import React from 'react';
import { ViewStyle, ScrollViewProps } from 'react-native';

interface KeyboardAwareScrollViewProps extends ScrollViewProps{
   children?: React.ReactNode  | (() => React.ReactNode);
   style?: ViewStyle;
}

declare const KeyboardAwareScrollView: React.MemoExoticComponent<(props: KeyboardAwareScrollViewProps) => JSX.Element>;

export default KeyboardAwareScrollView;