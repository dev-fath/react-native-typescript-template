import React, { useLayoutEffect } from 'react';

import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  ISwitchBaseProps,
  ISwitchBaseStyleProps,
} from 'components/common/switch/switchBase.interface';

import { ColorCodes } from 'constants/colors';

const getOffsetValue = (props: ISwitchBaseStyleProps) => {
  const { isOn, width, size } = props;
  if (size === 'sm') {
    return isOn ? (width - 3) / 2 : 2;
  }

  return isOn ? (width + 2) / 2 : 2;
};

export default function SwitchBase(props: ISwitchBaseProps) {
  const { onToggle = () => {}, size, canToggle = true, isOn } = props;

  const switchWidth = size === 'sm' ? 33 : 55;

  const switchStyle = styles({ width: switchWidth, size });

  //Thumb
  const thumbOffset: SharedValue<number> = useSharedValue(2);

  const switchThumb = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(thumbOffset.value),
        },
      ],
    };
  });

  //Background
  const switchTrackBackground = useSharedValue(0);

  const backgroundProgress = useDerivedValue(() => {
    return withTiming(switchTrackBackground.value);
  });

  const animatedBackground = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        backgroundProgress.value,
        [0, 1],
        [ColorCodes.blueGray2, ColorCodes.mintGreen],
      ),
    };
  });

  const onPressSwitch = () => {
    if (canToggle) {
      thumbOffset.value = getOffsetValue({ isOn, width: switchWidth, size });
      switchTrackBackground.value = isOn ? 1 : 0;
      onToggle(!isOn);
    }
  };

  useLayoutEffect(() => {
    thumbOffset.value = getOffsetValue({ isOn, width: switchWidth, size });
    switchTrackBackground.value = isOn ? 1 : 0;
  }, [isOn, size, switchTrackBackground, switchWidth, thumbOffset]);

  return (
    <Pressable onPress={onPressSwitch}>
      <Animated.View style={[switchStyle.container, animatedBackground]}>
        <Animated.View style={[switchStyle.thumb, switchThumb]} />
      </Animated.View>
    </Pressable>
  );
}

const styles = (props: ISwitchBaseStyleProps) => {
  const { width, size } = props;

  return StyleSheet.create({
    container: {
      height: size === 'sm' ? 20 : 28,
      width: width,
      borderRadius: 100,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    thumb: {
      backgroundColor: ColorCodes.white,
      borderRadius: 100,
      width: size === 'sm' ? 16 : 24,
      height: size === 'sm' ? 16 : 24,
    },
  });
};
