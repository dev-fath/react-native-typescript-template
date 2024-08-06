import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function ChargeIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M6.31444 14C5.83327 14 5.54784 13.462 5.81761 13.0636L11.9614 3.98969C12.3117 3.47232 13.1208 3.76812 13.0549 4.38943L12.5296 9.33665C12.4919 9.69109 12.7698 10 13.1262 10H17.0527C17.5339 10 17.8193 10.538 17.5496 10.9364L11.4058 20.0103C11.0555 20.5277 10.2463 20.2319 10.3123 19.6106L10.8376 14.6634C10.8752 14.3089 10.5974 14 10.241 14H6.31444Z"
        fill={color}
      />
    </Svg>
  );
}
