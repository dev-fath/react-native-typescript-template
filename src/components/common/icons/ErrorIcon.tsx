import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function ErrorIcon({ width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.65778 1.57213C5.81315 1.3132 6.18842 1.3132 6.34378 1.57213L11.6373 10.3947C11.7973 10.6613 11.6052 11.0005 11.2943 11.0005H0.707258C0.39634 11.0005 0.204295 10.6613 0.364261 10.3947L5.65778 1.57213ZM6.40081 10.0005H5.65081V9.25047H6.40081V10.0005ZM5.65081 8.00047H6.40081L6.40081 5.00047H5.65081L5.65081 8.00047Z"
        fill="#DB0A5B"
      />
    </Svg>
  );
}
