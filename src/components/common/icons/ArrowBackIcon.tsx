import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function ArrowBackIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75238 9L1 15H22V13.335H5.52378L9.07736 10.1773L7.75238 9Z"
        fill={color}
      />
    </Svg>
  );
}
