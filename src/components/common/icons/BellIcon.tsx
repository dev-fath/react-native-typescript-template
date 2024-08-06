import React from 'react';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

import { ColorCodes } from 'constants/colors';

export default function BellIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_981_28339)">
        <Path
          d="M14.0001 20.1H10.0001C9.50304 20.1 9.1001 20.5029 9.1001 21C9.1001 21.497 9.50304 21.9 10.0001 21.9H14.0001C14.4972 21.9 14.9001 21.497 14.9001 21C14.9001 20.5029 14.4972 20.1 14.0001 20.1Z"
          fill={color}
        />
        <Path
          d="M18.87 16V10.07C18.87 6.17 15.7 3 11.8 3C7.9 3 4.73 6.17 4.73 10.07V16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H19.6C20.1523 18 20.6 17.5523 20.6 17C20.6 16.4477 20.1523 16 19.6 16H18.87ZM6.74 10.07C6.74 7.28 9.01 5 11.81 5C14.61 5 16.88 7.27 16.88 10.07V16H6.73V10.07H6.74Z"
          fill={ColorCodes.gray3}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_981_28339">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
