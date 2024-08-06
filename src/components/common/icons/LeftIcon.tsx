import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function LeftIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M11.111 14.9937L10.9774 14.8449L11.111 14.9937C10.9558 15.1331 10.717 15.1203 10.5775 14.9651L4.70763 8.43068C4.4876 8.18573 4.4876 7.8143 4.70764 7.56936L10.5775 1.03494C10.717 0.879729 10.9558 0.866934 11.111 1.00636L11.5078 1.36277C11.5078 1.36277 11.5078 1.36277 11.5078 1.36277C11.663 1.5022 11.6758 1.74105 11.5364 1.89626L6.05333 8.00002L11.5364 14.1038C11.6758 14.259 11.663 14.4978 11.5078 14.6373L11.111 14.9937Z"
        fill={color}
        stroke={color}
        strokeWidth="0.4"
      />
    </Svg>
  );
}
