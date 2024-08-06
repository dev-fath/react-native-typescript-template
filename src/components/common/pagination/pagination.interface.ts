import { MutableRefObject, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface IPaginationCommonProps<T extends Record<string, unknown>> {
  carouselRef?: MutableRefObject<Carousel<T>>;
  tappableDots?: boolean;
  dotColor?: string;
  dotStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
  inactiveDotOpacity?: number;
  inactiveDotScale?: number;
  inactiveDotStyle?: StyleProp<ViewStyle>;
  dotContainerStyle?: StyleProp<ViewStyle>;

  accessibilityLabel?: string;
  animatedDuration?: number;
  animatedFriction?: number;
  animatedTension?: number;
  delayPressInDot?: number;
}

export interface IPaginationProps<T extends Record<string, unknown>>
  extends IPaginationCommonProps<T> {
  activeDotIndex: number;
  dotsLength: number;
  inactiveDotColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  dotElement?: ReactNode;
  inactiveDotElement?: ReactNode;
  renderDots?: (_activeDotIndex: number, dotsLength: number) => JSX.Element;
}

export interface IPaginationViewProps<T extends Record<string, unknown>>
  extends IPaginationCommonProps<T> {
  inactiveDotOpacity: number; // required
  inactiveDotScale: number; // required
  activeDotIndex: number;
  dotsLength: number;
  inactiveDotColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  renderDots?: (_activeDotIndex: number, dotsLength: number) => JSX.Element;
}

export interface IPaginationDotProps<T extends Record<string, unknown>>
  extends IPaginationCommonProps<T> {
  inactiveDotOpacity: number; // required
  inactiveDotScale: number; // required
  active?: boolean;
  inactiveColor?: string;
  index?: number;
}
