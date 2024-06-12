import React from 'react';
import { ViewProps, ViewStyle, LayoutEvent, ScrollViewProps } from 'react-native';

interface KeyboardAwareScrollViewContainerProps extends ScrollViewProps {
   onKeyboardDidShow: (event: LayoutEvent) => void;
   onKeyboardDidHide: (event: LayoutEvent) => void;
   onLayout: (event: LayoutEvent) => void;
   onLayoutContainer: (event: LayoutEvent) => void;
   containerStyle?: ViewStyle;
   children?: React.ReactNode | (() => React.ReactNode);
}

declare const KeyboardAwareScrollViewContainer: React.ForwardRefExoticComponent<KeyboardAwareScrollViewContainerProps & React.RefAttributes<any>>;

export default KeyboardAwareScrollViewContainer;
