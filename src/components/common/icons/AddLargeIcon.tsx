import React from 'react';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function AddLargeIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <G clip-path="url(#clip0_1161_19242)">
        <Path
          d="M12.9838 3.2002H11.3838V20.7202H12.9838V3.2002Z"
          fill="white"
          stroke={color}
          strokeWidth="1.4"
        />
        <Path
          d="M20.9438 11.1602H3.42383V12.7602H20.9438V11.1602Z"
          fill="white"
          stroke={color}
          strokeWidth="1.4"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1161_19242">
          <Rect width="24" height="24" fill="white" transform="translate(0.183594)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
