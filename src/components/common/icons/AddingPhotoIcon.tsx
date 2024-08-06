import React from 'react';

import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function AddingPhotoIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_5203_281461)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4H7.93L7.34 4.89L5.93 7H3.96C2.33 7 1 8.33 1 9.96V19.04C1 20.67 2.33 22 3.96 22H20.04C21.67 22 23 20.67 23 19.04V11H21V19.04C21 19.57 20.57 20 20.04 20H3.96C3.43 20 3 19.57 3 19.04V9.96C3 9.43 3.43 9 3.96 9H7L9 6H13V4Z"
        fill={color}/>
      <Path
        d="M12 18C9.79 18 8 16.21 8 14C8 11.79 9.79 10 12 10C14.21 10 16 11.79 16 14C16 16.21 14.21 18 12 18ZM12 12C10.9 12 10 12.9 10 14C10 15.1 10.9 16 12 16C13.1 16 14 15.1 14 14C14 12.9 13.1 12 12 12Z"
        fill={color}/>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4V1H18V4H15V6H18V9H20V6H23V4H20Z"
        fill={color}/>
    </G>
    <Defs>
      <ClipPath id="clip0_5203_281461">
        <Rect width={width} height={height} fill={color}/>
      </ClipPath>
    </Defs>
    </Svg>
    
  );
}