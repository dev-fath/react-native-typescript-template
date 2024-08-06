import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function MenuScheduleBold({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M19.1152 11.7093H4.88477M7.5533 5.89548V8.02498M16.4473 5.89548V7.79624M12.0003 8.02498H6.38509C5.55666 8.02498 4.88509 8.69656 4.88509 9.52498V17.6037C4.88509 18.4321 5.55666 19.1037 6.38509 19.1037H17.6156C18.444 19.1037 19.1156 18.4321 19.1156 17.6037V9.52498C19.1156 8.69656 18.444 8.02498 17.6156 8.02498H12.0003Z"
        stroke="#292D30"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
