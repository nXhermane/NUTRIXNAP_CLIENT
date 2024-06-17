import { View, TextInput, UIManager, findNodeHandle, Platform } from "react-native";
import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import KeyboardAwareScrollViewContainer from "./KeyboardAwareScrollViewContainer";

const KEYBOARD_EXTRA_HEIGHT = 60;
const KeyboardAwareScrollView = (props) => {
   const { children, style } = props;
   const scrollView = useRef(null);
   const scrollViewTarget = useRef(null);
   const containerScrollViewTarget = useRef(null);
   // const [scrollViewHeight, setScrollViewHeight] = useState({ h: 0, p: 0 });
   const [keyboardSpace, setkeyboardSpace] = useState(0);
   const [containerHeight, setContainerHeight] = useState(0);
   function updateKeyboadSpace(e) {
      if (true) {
         let keyboardSpace = e.endCoordinates.height + KEYBOARD_EXTRA_HEIGHT;
         setkeyboardSpace(keyboardSpace);
         UIManager.measureInWindow(scrollViewTarget.current, (x, y, width, height) => {
            setContainerHeight(e.endCoordinates.screenY - y);
         });
         const currentlyFocusedInput = TextInput.State.currentlyFocusedInput()
            ? findNodeHandle(TextInput.State.currentlyFocusedInput())
            : TextInput.State.currentlyFocusedField();
         const responder = scrollView.current?.getScrollResponder();
         if (!currentlyFocusedInput || !responder || !containerScrollViewTarget.current) return;
         // when global.RN$Bridgeless === true .. BridgelessUIManager
         UIManager.viewIsDescendantOf(currentlyFocusedInput, responder.getInnerViewNode(), (isAncestor) => {
            if (isAncestor) {
               // Voir si le textInput peut etre cacher par le keyboard
               UIManager.measureInWindow(currentlyFocusedInput, (x, y, width, height) => {
                  const textInputBottomPosition = y + height;
                  const keyboardPosition = e.endCoordinates.screenY;
                  if (textInputBottomPosition > keyboardPosition) {
                     responder.scrollTo({
                        x: 0,
                        y: textInputBottomPosition,
                        animated: true,
                     });
                  }
               });
            }
         });
      }
   }

   function onKeyboardDidShow(e) {
      updateKeyboadSpace(e);
      //setkeyboardSpace(500);
   }
   function onKeyboardDidHide(e) {
      setContainerHeight(0);
   }

   return (
      <KeyboardAwareScrollViewContainer
         {...props}
         ref={scrollView}
         onKeyboardDidShow={(e) => onKeyboardDidShow(e)}
         onKeyboardDidHide={onKeyboardDidHide}
         onLayout={(e) => {
            e.persist();
            scrollViewTarget.current = e.nativeEvent.target;
         }}
         onLayoutContainer={(e) => {
            e.persist();
            containerScrollViewTarget.current = e.nativeEvent.target;
         }}
         style={
            {
               // paddingBottom: 30
            }
         }
         containerStyle={{
            maxHeight: containerHeight != 0 ? containerHeight : "100%",
         }}
      >
         <View
            style={{
               width: "100%",
               ...style,
            }}
         >
            {typeof children === "function" ? children() : children}
         </View>
      </KeyboardAwareScrollViewContainer>
   );
};

export default React.memo(KeyboardAwareScrollView);

/**
 * import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView,
    KeyboardEvent,
    TextInput,
    UIManager,
    findNodeHandle,
    Platform,
    ViewStyle,
    type ScrollResponderMixin,
    LayoutChangeEvent as LayoutEvent
} from "react-native";
import React, {
    useEffect,
    useState,
    useMemo,
    useCallback,
    useRef,
    PropsWithChildren
} from "react";
import KeyboardAwareScrollViewContainer from "./KeyboardAwareScrollViewContainer";
interface Props {
    style?: ViewStyle;
}
type UIManagerNewType = typeof UIManager & {
    viewIsDescendantOf?: (
        reactTag: number,
        ancestorReactTag: number,
        callback: (result: boolean) => void
    ) => void;
};
type ScrollResponderMixinNew = ScrollResponderMixin & {
    getInnerViewNode?: () => number;
    scrollTo?: (params: { x: number; y: number; animated: boolean }) => void;
};
const KEYBOARD_EXTRA_HEIGHT = 60;
const KeyboardAwareScrollView = (props: PropsWithChildren<Props>) => {
    const { children, style } = props;
    const scrollView = useRef<ScrollView>(null);
    const scrollViewTarget = useRef(null);
    const containerScrollViewTarget = useRef<View>(null);
    // const [scrollViewHeight, setScrollViewHeight] = useState({ h: 0, p: 0 });
    const [keyboardSpace, setkeyboardSpace] = useState<number>(0);
    const [containerHeight, setContainerHeight] = useState<number>(0);
    function updateKeyboadSpace(e: KeyboardEvent) {
        if (true) {
            let keyboardSpace = e.endCoordinates.height + KEYBOARD_EXTRA_HEIGHT;
            setkeyboardSpace(keyboardSpace);
            UIManager.measureInWindow(
                scrollViewTarget.current as unknown as number,
                (x: number, y: number, width: number, height: number) => {
                    setContainerHeight(e.endCoordinates.screenY - y);
                }
            );
            const currentlyFocusedInput =
                TextInput.State.currentlyFocusedInput()
                    ? findNodeHandle(TextInput.State.currentlyFocusedInput())
                    : TextInput.State.currentlyFocusedField();
            const responder = scrollView.current?.getScrollResponder();
            if (
                !currentlyFocusedInput ||
                !responder ||
                !containerScrollViewTarget.current
            )
                return;
            // when global.RN$Bridgeless === true .. BridgelessUIManager
            (UIManager as UIManagerNewType)?.viewIsDescendantOf!(
                currentlyFocusedInput,
                (responder as ScrollResponderMixinNew)
                    ?.getInnerViewNode!() as number,
                (isAncestor: boolean) => {
                    if (isAncestor) {
                        // Voir si le textInput peut etre cacher par le keyboard
                        UIManager.measureInWindow(
                            currentlyFocusedInput,
                            (
                                x: number,
                                y: number,
                                width: number,
                                height: number
                            ) => {
                                const textInputBottomPosition = y + height;
                                const keyboardPosition =
                                    e.endCoordinates.screenY;
                                if (
                                    textInputBottomPosition > keyboardPosition
                                ) {
                                    (responder as ScrollResponderMixinNew)
                                        .scrollTo!({
                                        x: 0,
                                        y: textInputBottomPosition,
                                        animated: true
                                    });
                                } else {
                                }
                            }
                        );
                    } else {
                        console.log("Is not Cached By scrollView");
                    }
                }
            )!;
        }
    }

    function onKeyboardDidShow(e: KeyboardEvent) {
        updateKeyboadSpace(e);
        //setkeyboardSpace(500);
    }
    function onKeyboardDidHide(e: KeyboardEvent) {
        setContainerHeight(0);
    }

    return (
        <KeyboardAwareScrollViewContainer
            ref={scrollView}
            onKeyboardDidShow={e => onKeyboardDidShow(e)}
            onKeyboardDidHide={onKeyboardDidHide}
            onLayout={e => {
                e.persist();
                scrollViewTarget.current = e.nativeEvent?.target!;
            }}
            onLayoutContainer={e => {
                e.persist();
                containerScrollViewTarget.current = e.nativeEvent.target;
            }}
            style={
                {
                    // paddingBottom: 30
                }
            }
            containerStyle={{
                maxHeight: containerHeight != 0 ? containerHeight : "100%"
            }}
        >
            <View
                style={{
                    width: "100%",
                    ...style
                }}
            >
                {typeof children === "function" ? children() : children}
            </View>
        </KeyboardAwareScrollViewContainer>
    );
};

export default React.memo(KeyboardAwareScrollView);

const styles = StyleSheet.create({});

 */
