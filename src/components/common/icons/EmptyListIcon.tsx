import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function EmptyListIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 69 69" fill="none">
      <Path
        d="M52.9395 58.5099V33.237C52.9395 32.4646 52.6204 31.7265 52.0577 31.1973L32.6282 12.9244C32.1088 12.436 31.4228 12.1641 30.7099 12.1641H13.5C11.9536 12.1641 10.7 13.4177 10.7 14.9641V55.7099C10.7 57.2563 11.9536 58.5099 13.5 58.5099H21.7395"
        stroke="#6F7271"
        strokeWidth="5.3"
        strokeLinecap="round"/>
      <Path
        d="M30.4368 58.5098L44.2723 58.5098"
        stroke="#6F7271"
        strokeWidth="4.5"
        strokeLinecap="round"/>
      <Path
        d="M30.4368 49.9004L44.2723 49.9004"
        stroke="#6F7271"
        strokeWidth="4.5"
        strokeLinecap="round"/>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.7009 3.51813C56.6545 3.51813 61.4809 8.34449 61.4809 14.2981C61.4809 20.2518 56.6545 25.0781 50.7009 25.0781C44.7473 25.0781 39.9209 20.2518 39.9209 14.2981C39.9209 8.34449 44.7473 3.51813 50.7009 3.51813Z"
        fill="#4A4F54"/>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.8661 10.0959C54.6747 9.9045 54.3644 9.9045 54.1731 10.0959L46.7811 17.4879C46.5897 17.6793 46.5897 17.9895 46.7811 18.1809C46.9724 18.3722 47.2827 18.3722 47.474 18.1809L54.8661 10.7888C55.0574 10.5975 55.0574 10.2872 54.8661 10.0959Z"
        fill={color}
        stroke={color}
        strokeWidth="0.56"/>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.7809 10.0959C46.5896 10.2872 46.5896 10.5975 46.7809 10.7888L54.173 18.1809C54.3643 18.3722 54.6746 18.3722 54.8659 18.1809C55.0573 17.9895 55.0573 17.6793 54.8659 17.4879L47.4739 10.0959C47.2825 9.9045 46.9723 9.9045 46.7809 10.0959Z"
        fill={color}
        stroke={color}
        strokeWidth="0.56"/>
    </Svg>
  );
}
