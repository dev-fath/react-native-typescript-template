import React from 'react';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function CameraIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_1076_37592)">
        <Path
          d="M12 17C9.79 17 8 15.21 8 13C8 10.79 9.79 9 12 9C14.21 9 16 10.79 16 13C16 15.21 14.21 17 12 17ZM12 11C10.9 11 10 11.9 10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13C14 11.9 13.1 11 12 11Z"
          fill={color}
        />
        <Path
          d="M15 5L17 8H20.04C20.57 8 21 8.43 21 8.96V18.04C21 18.57 20.57 19 20.04 19H3.96C3.43 19 3 18.57 3 18.04V8.96C3 8.43 3.43 8 3.96 8H7L9 5H15ZM16.07 3H7.93L7.34 3.89L5.93 6H3.96C2.33 6 1 7.33 1 8.96V18.04C1 19.67 2.33 21 3.96 21H20.04C21.67 21 23 19.67 23 18.04V8.96C23 7.33 21.67 6 20.04 6H18.07L16.66 3.89L16.07 3Z"
          fill="#4A4F54"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1076_37592">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
