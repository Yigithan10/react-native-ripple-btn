import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"; 

const RippleButton = (props) => {
  let duration = props.duration;
  let opacityR = props.opacity;
  let opacityColor = props.opacityColor;
  let wd = props.width;
  let hg = props.height;
  let text = props.text;
  let textSize = props.textSize;
  let textColor = props.textColor;
  let borderRadius = props.borderRadius;
  let bgColor = props.bgColor;
  let onPress = props.onPress;

  if (duration == undefined) {
    duration = 800;
  }

  if (opacityR == undefined) {
    opacityR = 0.8;
  }

  if (opacityColor == undefined) {
    opacityColor = 'white';
  }

  if (wd == undefined) {
    wd = "70%";
  }

  if (hg == undefined) {
    hg = 50;
  }

  if (text == undefined) {
    text = "Text";
  }

  if (textSize == undefined) {
    textSize = 20;
  }

  if (textColor == undefined) {
    textColor = "white";
  }

  if (borderRadius == undefined) {
    borderRadius = 10;
  }

  if (bgColor == undefined) {
    bgColor = "purple";
  }

  if (onPress == undefined) {
    onPress = null;
  }

  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const scale = useSharedValue(0);

  const aRef = useAnimatedRef();
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const rippleOpacity = useSharedValue(opacityR);

  const tapGestureEvent = useAnimatedGestureHandler({
    onStart: (tapEvent) => {
      const layout = measure(aRef);
      width.value = layout.width;
      height.value = layout.height;

      centerX.value = tapEvent.x;
      centerY.value = tapEvent.y;

      rippleOpacity.value = opacityR;
      scale.value = 0;
      scale.value = withTiming(1, { duration: duration });
      rippleOpacity.value = withTiming(0, { duration: duration });
    },
    onActive: () => {
      //if (onTap) runOnJS(onTap)();
    },
    onEnd: () => {
      rippleOpacity.value = withTiming(0, { duration: duration });
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2);

    const translateX = centerX.value - circleRadius;
    const translateY = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      opacity: rippleOpacity.value,
      zIndex: -1,
      backgroundColor: opacityColor,
      position: "absolute",
      top: 0,
      left: 0,
      transform: [
        { translateX },
        { translateY },
        {
          scale: scale.value,
        },
      ],
    };
  });

  return (
    <Pressable
      onPress={onPress}
      ref={aRef}
      style={[styles.container, { height: hg }]}
    >
      <TapGestureHandler onGestureEvent={tapGestureEvent}>
        <Animated.View
          style={[
            styles.contain,
            {
              overflow: "hidden",
              width: wd,
              height: hg,
              borderRadius: borderRadius,
              backgroundColor: bgColor,
            },
          ]}
        >
          <Text style={{ color: textColor, fontSize: textSize }}>{text}</Text>
          <Animated.View style={rStyle} pointerEvents="none" />
        </Animated.View>
      </TapGestureHandler>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contain: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default RippleButton;
