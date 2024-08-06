import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function InquiryIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 46 43" fill="none">
      <Path
        d="M24.541 35.8494C24.6503 35.8044 24.7695 35.7806 24.8877 35.779C39.3215 35.5785 46.5384 30.5178 46.5384 18.2403C46.5384 5.70816 39.0192 0.695312 23.9806 0.695312C8.94212 0.695312 1.42285 5.70816 1.42285 18.2403C1.42285 25.5971 4.01412 30.3627 9.19666 33.0441C9.6261 33.2663 9.84151 33.7682 9.67889 34.2236L7.13971 41.3333C6.86843 42.0928 7.6254 42.8146 8.37121 42.5075L24.541 35.8494Z"
        fill={color}
      />
      <Path
        d="M23.8695 25.1132H23.8838M23.8695 20.8171C25.1449 18.0873 28.1655 18.2887 28.1655 15.089C28.1655 12.941 26.7335 10.793 23.8695 10.793C21.6529 10.793 20.2941 12.0796 19.793 13.657"
        stroke="#F0F1F5"
        strokeWidth="3.2592"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
