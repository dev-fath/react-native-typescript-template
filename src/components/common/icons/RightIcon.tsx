import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function RightIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M5.06476 14.9937L5.19841 14.8449L5.06476 14.9937C5.21997 15.1331 5.45882 15.1203 5.59825 14.9651L11.4681 8.43068C11.6882 8.18573 11.6882 7.8143 11.4681 7.56936L5.59825 1.03494C5.45882 0.879729 5.21997 0.866934 5.06476 1.00636L4.668 1.36277C4.668 1.36277 4.668 1.36277 4.668 1.36277C4.51279 1.5022 4.49999 1.74105 4.63942 1.89626L10.1225 8.00002L4.63942 14.1038C4.49999 14.259 4.51279 14.4978 4.668 14.6373L5.06476 14.9937Z"
        fill={color}
        stroke={color}
        strokeWidth="0.4"
      />
    </Svg>
  );
}
