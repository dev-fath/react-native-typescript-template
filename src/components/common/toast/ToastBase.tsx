import React, { useEffect, useRef } from 'react';

import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import IconBase from 'components/common/icons';
import { IconKindType } from 'components/common/icons/icon.interface';
import { Typography } from 'components/common/typography/Typography';

import { widthCalculator } from 'utils/widthCalculator';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

interface IToastBaseProps {
  duration: 'long' | 'short';
  iconName?: IconKindType;
  iconColor?: string;
  top?: number;
  text?: string;

  isToastShowed: boolean;
  closeToastShowed: () => void;
}

const showToastMessage = (
  fadeAnim: React.MutableRefObject<Animated.Value>,
  displayDuration: 'short' | 'long',
  onCloseToast: () => void,
) => {
  const animationDuration = 500;
  let currentValue: number;
  fadeAnim.current.addListener(({ value }) => {
    currentValue = value;
  });
  Animated.sequence([
    Animated.timing(fadeAnim.current, {
      useNativeDriver: false,
      toValue: 10,
      duration: animationDuration,
    }),
    Animated.timing(fadeAnim.current, {
      useNativeDriver: false,
      toValue: 1,
      duration: displayDuration === 'short' ? 2000 : 2500,
    }),
    Animated.timing(fadeAnim.current, {
      useNativeDriver: false,
      toValue: 0,
      duration: animationDuration,
    }),
  ]).start(() => {
    if (currentValue === 0) {
      onCloseToast();
      fadeAnim.current.removeAllListeners();
    }
  });
};

const ToastBase = ({
  isToastShowed,
  closeToastShowed,
  duration,
  iconName,
  iconColor,
  top: _top,
  text,
}: IToastBaseProps) => {
  const { top } = useSafeAreaInsets();
  const toastOpacity = useRef(new Animated.Value(0));

  const defaultStyles = styles(isToastShowed, _top ? _top + top : top);

  useEffect(() => {
    if (isToastShowed) {
      showToastMessage(toastOpacity, duration, closeToastShowed);
    }
  }, [closeToastShowed, duration, isToastShowed]);

  return (
    <View style={defaultStyles.rootContainer}>
      <Animated.View
        style={{
          ...defaultStyles.animationContainer,
          opacity: toastOpacity.current,
        }}
      >
        {iconName ? (
          <View style={defaultStyles.iconContainer}>
            <IconBase color={iconColor} icon={iconName} width={24} height={24} />
          </View>
        ) : (
          <></>
        )}
        <View style={defaultStyles.textContainer}>
          <Typography.TextRegular1 color={ColorCodes.white} width={widthCalculator(270)}>
            {text}
          </Typography.TextRegular1>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = (isShowed: boolean, top?: number) =>
  StyleSheet.create({
    rootContainer: {
      zIndex: 10,
      position: 'absolute',
      display: isShowed ? 'flex' : 'none',
      width: '100%',
      top: top + 64,
      paddingHorizontal: SPACE_SIZE[16],
      alignItems: 'center',
    },

    animationContainer: {
      position: 'absolute',
      maxHeight: 128,
      minHeight: 56,
      width: Dimensions.get('window').width - SPACE_SIZE[16] * 2,
      top: top ?? SPACE_SIZE['40'],
      backgroundColor: ColorCodes.gray3 + 'dd',
      padding: SPACE_SIZE['16'],
      borderRadius: 100,
      alignItems: 'flex-start',
      flexDirection: 'row',
    },

    textContainer: {
      flex: 1,
    },

    iconContainer: {
      marginRight: SPACE_SIZE['8'],
    },
  });

export default React.memo(ToastBase);
