import React from 'react';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function DataLogIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_584_42844)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.924 7.43976C12.3591 7.43976 12.7119 7.7925 12.7119 8.22764V12.167H16.53C16.9652 12.167 17.3179 12.5198 17.3179 12.9549C17.3179 13.39 16.9652 13.7428 16.53 13.7428H11.924C11.4889 13.7428 11.1361 13.39 11.1361 12.9549V8.22764C11.1361 7.7925 11.4889 7.43976 11.924 7.43976Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3947 3.86329C10.5169 4.28092 10.2774 4.71853 9.8598 4.84072C6.6569 5.77783 4.31856 8.73834 4.31856 12.2433C4.31856 16.5014 7.77294 19.9548 12.0313 19.9548C16.2896 19.9548 19.7428 16.5027 19.7428 12.2433C19.7428 11.6022 19.6646 10.9806 19.5184 10.3869C19.4143 9.96439 19.6725 9.53752 20.095 9.43346C20.5175 9.3294 20.9444 9.58755 21.0484 10.0101C21.2246 10.7255 21.3186 11.4736 21.3186 12.2433C21.3186 17.3731 17.1597 21.5306 12.0313 21.5306C6.90296 21.5306 2.7428 17.3719 2.7428 12.2433C2.7428 8.01982 5.56082 4.4567 9.41731 3.32836C9.83494 3.20617 10.2725 3.44567 10.3947 3.86329Z"
          fill={color}
        />
        <Path
          d="M16.288 5.6214C16.8402 5.6214 17.288 5.17368 17.288 4.6214C17.288 4.06911 16.8402 3.6214 16.288 3.6214C15.7357 3.6214 15.288 4.06911 15.288 4.6214C15.288 5.17368 15.7357 5.6214 16.288 5.6214Z"
          fill={color}
        />
        <Path
          d="M13.166 4.74286C13.7183 4.74286 14.166 4.29514 14.166 3.74286C14.166 3.19057 13.7183 2.74286 13.166 2.74286C12.6137 2.74286 12.166 3.19057 12.166 3.74286C12.166 4.29514 12.6137 4.74286 13.166 4.74286Z"
          fill={color}
        />
        <Path
          d="M18.7723 7.62164C19.3246 7.62164 19.7723 7.17393 19.7723 6.62164C19.7723 6.06936 19.3246 5.62164 18.7723 5.62164C18.2201 5.62164 17.7723 6.06936 17.7723 6.62164C17.7723 7.17393 18.2201 7.62164 18.7723 7.62164Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_584_42844">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}