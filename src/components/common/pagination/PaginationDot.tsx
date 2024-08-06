import React, { useCallback, useEffect, useMemo } from 'react';

import { Animated, Easing, TouchableOpacity } from 'react-native';

import styles from 'components/common/pagination/Pagination.styles';
import { IPaginationDotProps } from 'components/common/pagination/pagination.interface';

const PaginationDot = <T extends Record<string, unknown>>(
  props: IPaginationDotProps<T>,
) => {
  const {
    inactiveDotOpacity,
    inactiveDotScale,
    active,
    activeOpacity,
    carouselRef,
    dotColor,
    dotContainerStyle,
    inactiveColor,
    inactiveDotStyle,
    index,
    dotStyle,
    tappableDots,
    animatedDuration,
    animatedFriction,
    animatedTension,
    delayPressInDot,
  } = props;

  const animColor = useMemo(() => new Animated.Value(0), []);
  const animOpacity = useMemo(() => new Animated.Value(0), []);
  const animTransform = useMemo(() => new Animated.Value(0), []);

  const isAnimateColor = useMemo(() => {
    return !!(dotColor && inactiveColor);
  }, [dotColor, inactiveColor]);

  const animate = useCallback(
    (toValue: number) => {
      const commonProperties = {
        toValue,
        duration: animatedDuration,
        isInteraction: false,
        useNativeDriver: isAnimateColor,
      };

      const animations = [
        Animated.timing(animOpacity, {
          easing: Easing.linear,
          ...commonProperties,
        }),

        Animated.spring(animTransform, {
          friction: animatedFriction,
          tension: animatedTension,
          ...commonProperties,
        }),
      ];

      if (isAnimateColor) {
        animations.push(
          Animated.timing(animColor, {
            easing: Easing.linear,
            ...commonProperties,
          }),
        );
      }

      Animated.parallel(animations).start();
    },
    [
      animColor,
      animOpacity,
      animTransform,
      animatedDuration,
      animatedFriction,
      animatedTension,
      isAnimateColor,
    ],
  );

  const animatedStyle = useMemo(
    () => ({
      opacity: animOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [inactiveDotOpacity, 1],
      }),
      transform: [
        {
          scale: animTransform.interpolate({
            inputRange: [0, 1],
            outputRange: [inactiveDotScale, 1],
          }),
        },
      ],
    }),
    [animOpacity, animTransform, inactiveDotOpacity, inactiveDotScale],
  );

  const animatedColor = useMemo(() => {
    if (inactiveColor && dotColor) {
      return {
        backgroundColor: animColor.interpolate({
          inputRange: [0, 1],
          outputRange: [inactiveColor, dotColor],
        }),
      };
    }
  }, [animColor, dotColor, inactiveColor]);

  const _dotContainerStyle = useMemo(
    () => [styles.sliderPaginationDotContainer, dotContainerStyle || {}],
    [dotContainerStyle],
  );

  const _dotStyle = useMemo(
    () => [
      styles.sliderPaginationDot,
      dotStyle || {},
      (!active && inactiveDotStyle) || {},
      animatedStyle,
      animatedColor,
    ],
    [active, animatedColor, animatedStyle, dotStyle, inactiveDotStyle],
  );

  const onPress = useCallback(() => {
    if (tappableDots && index !== undefined) {
      // TODO : forwardedRef로 변경해서 ref 받기
      carouselRef?.current?.snapToItem(index);
    }
  }, [carouselRef, index, tappableDots]);

  useEffect(() => {
    if (active) {
      animate(1);
      return;
    }

    animate(0);
  }, [active, animate]);

  return (
    <TouchableOpacity
      accessible={false}
      style={_dotContainerStyle}
      activeOpacity={tappableDots ? activeOpacity : 1}
      onPress={onPress}
      delayPressIn={delayPressInDot}
    >
      <Animated.View style={_dotStyle} />
    </TouchableOpacity>
  );
};

export default PaginationDot;
