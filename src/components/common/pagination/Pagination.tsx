import React, { ReactNode, RefObject, useMemo } from 'react';
import { I18nManager } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import PaginationView from 'components/common/pagination/Pagination.view';
import { IPaginationProps } from 'components/common/pagination/pagination.interface';

const IS_RTL = I18nManager.isRTL;

const Pagination = <T extends Record<string, unknown>>(props: IPaginationProps<T>) => {
  const {
    activeDotIndex,
    dotsLength,
    activeOpacity,
    carouselRef,
    containerStyle,
    dotColor,
    dotContainerStyle,
    dotStyle,
    inactiveDotColor,
    dotElement,
    inactiveDotElement,
    inactiveDotOpacity,
    inactiveDotScale,
    inactiveDotStyle,
    renderDots,
    tappableDots,
    ...residualProps
  } = props;

  warn<T>(dotColor, inactiveDotColor, dotElement, inactiveDotElement, tappableDots, carouselRef);

  const isNeededRTLAdaptations = useMemo(() => {
    return IS_RTL;
  }, []);

  const _activeDotIndex = useMemo(() => {
    return isNeededRTLAdaptations ? dotsLength - activeDotIndex - 1 : activeDotIndex;
  }, [activeDotIndex, dotsLength, isNeededRTLAdaptations]);

  return (
    <PaginationView
      activeDotIndex={_activeDotIndex}
      dotsLength={dotsLength}
      dotColor={dotColor}
      inactiveDotColor={inactiveDotColor}
      activeOpacity={activeOpacity}
      carouselRef={carouselRef}
      containerStyle={containerStyle}
      dotContainerStyle={dotContainerStyle}
      dotStyle={dotStyle}
      inactiveDotOpacity={inactiveDotOpacity ? inactiveDotOpacity : 0.5}
      inactiveDotScale={inactiveDotScale ? inactiveDotScale : 0.5}
      inactiveDotStyle={inactiveDotStyle}
      renderDots={renderDots}
      tappableDots={tappableDots}
      {...residualProps}
    />
  );
};

const warn = <T extends Record<string, unknown>>(
  dotColor?: string,
  inactiveDotColor?: string,
  dotElement?: ReactNode,
  inactiveDotElement?: ReactNode,
  tappableDots?: boolean,
  carouselRef?: RefObject<Carousel<T>>,
) => {
  if ((dotColor && !inactiveDotColor) || (!dotColor && inactiveDotColor)) {
    console.warn(
      'react-native-snap-carousel | Pagination: ' +
        'You need to specify both `dotColor` and `inactiveDotColor`',
    );
  }

  if ((dotElement && !inactiveDotElement) || (!dotElement && inactiveDotElement)) {
    console.warn(
      'react-native-snap-carousel | Pagination: ' +
        'You need to specify both `dotElement` and `inactiveDotElement`',
    );
  }

  if (tappableDots && carouselRef === undefined) {
    console.warn(
      'react-native-snap-carousel | Pagination: ' +
        'You must specify prop `carouselRef` when setting `tappableDots` to `true`',
    );
  }
};

export default Pagination;
