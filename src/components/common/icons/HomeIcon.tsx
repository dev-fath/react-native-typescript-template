import React from 'react';

import Svg, { Path, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function HomeIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path 
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9857 3.76586C13.8591 2.74471 12.0218 2.74471 10.8952 3.76586L4.77469 9.31361C4.24026 9.79802 3.94043 10.4524 3.94043 11.1344V18.4133C3.94043 19.8419 5.22963 21 6.81993 21H19.0609C20.6512 21 21.9404 19.8419 21.9404 18.4133V11.1344C21.9404 10.4524 21.6406 9.79802 21.1062 9.31361L14.9857 3.76586Z"
        fill={color}
      />
      <Rect x="8.94043" y="13" width="8" height="2" rx="1" fill="#D9D9D9"/>
    </Svg>   
  );
}
