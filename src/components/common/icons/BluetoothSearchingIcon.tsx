import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function BluetoothSearchingIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.24 12.0102L16.56 14.3302C16.84 13.6102 17 12.8202 17 12.0002C17 11.1802 16.84 10.4102 16.57 9.69024L14.24 12.0102ZM19.53 6.71024L18.27 7.97024C18.9 9.18024 19.25 10.5402 19.25 11.9902C19.25 13.4402 18.89 14.8102 18.27 16.0102L19.47 17.2102C20.44 15.6702 21.01 13.8502 21.01 11.9002C21 10.0102 20.46 8.23024 19.53 6.71024ZM15.71 7.71024L10 2.00024H9V9.59024L4.41 5.00024L3 6.41024L8.59 12.0002L3 17.5902L4.41 19.0002L9 14.4102V22.0002H10L15.71 16.2902L11.41 12.0002L15.71 7.71024ZM11 5.83024L12.88 7.71024L11 9.59024V5.83024ZM12.88 16.2902L11 18.1702V14.4102L12.88 16.2902Z"
        fill={color}
      />
    </Svg>
  );
}
