import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function NextIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2476 9L23 15H2V13.335H18.4762L14.9226 10.1773L16.2476 9Z"
        fill={color}
      />
    </Svg>
  );
}
