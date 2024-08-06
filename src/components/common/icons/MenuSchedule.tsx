import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function MenuSchedule({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.1152 11.2093H4.88477M7.5533 5.39548V7.52498M16.4473 5.39548V7.29624M12.0003 7.52498H6.38509C5.55666 7.52498 4.88509 8.19656 4.88509 9.02498V17.1037C4.88509 17.9321 5.55666 18.6037 6.38509 18.6037H17.6156C18.444 18.6037 19.1156 17.9321 19.1156 17.1037V9.02498C19.1156 8.19656 18.444 7.52498 17.6156 7.52498H12.0003Z"
        stroke={color}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
