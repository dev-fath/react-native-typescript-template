import React from 'react';

import Svg, { Circle } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function EllipseIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 9" fill="none">
      <Circle cx="4" cy="4.5" r="4" fill={color} />
    </Svg>
  );
}
