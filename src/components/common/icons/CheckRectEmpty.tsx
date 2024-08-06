import React from 'react';
import { ISvgIconProps } from 'components/common/icons/icon.interface';
import Svg, { Rect } from 'react-native-svg';

export default function CheckRectEmpty({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Rect x="1" y="1" width={width-2} height={height-2} rx="5" stroke={color} strokeWidth="4"/>
    </Svg>
  );
}
