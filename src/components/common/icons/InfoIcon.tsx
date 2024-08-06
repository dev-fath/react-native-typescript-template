import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function InfoIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Path
        d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6.6 9H5.4V5.4H6.6V9ZM6.6 4.2H5.4V3H6.6V4.2Z"
        fill={color}
      />
    </Svg>
  );
}
