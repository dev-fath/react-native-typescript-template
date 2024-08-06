import React from 'react';

import Svg, { G, Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function EmptyNotificationIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
      <G clipPath="url(#clip0_3953_158172)">
        <Path
          d="M27.8 40.2H19.8C18.8059 40.2 18 41.0058 18 42C18 42.9941 18.8059 43.7999 19.8 43.7999H27.8C28.7941 43.7999 29.6 42.9941 29.6 42C29.6 41.0058 28.7941 40.2 27.8 40.2Z"
          fill={color}
        />
        <Path
          d="M37.74 32V20.14C37.74 12.34 31.4 6 23.6 6C15.8 6 9.46 12.34 9.46 20.14V32H8C6.89543 32 6 32.8954 6 34C6 35.1046 6.89543 36 8 36H39.2C40.3046 36 41.2 35.1046 41.2 34C41.2 32.8954 40.3046 32 39.2 32H37.74ZM13.48 20.14C13.48 14.56 18.02 10 23.62 10C29.22 10 33.76 14.54 33.76 20.14V32H13.46V20.14H13.48Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.6004 0.728174C43.853 0.728174 47.3004 4.17558 47.3004 8.42817C47.3004 12.6808 43.853 16.1282 39.6004 16.1282C35.3478 16.1282 31.9004 12.6808 31.9004 8.42817C31.9004 4.17558 35.3478 0.728174 39.6004 0.728174Z"
          fill="#CACDDA"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.5752 5.42502C42.4385 5.28834 42.2169 5.28834 42.0802 5.42502L36.8002 10.705C36.6635 10.8417 36.6635 11.0633 36.8002 11.2C36.9369 11.3367 37.1585 11.3367 37.2952 11.2L42.5752 5.92C42.7119 5.78331 42.7119 5.56171 42.5752 5.42502Z"
          fill={'white'}
          stroke={'white'}
          strokeWidth="0.4"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.7998 5.42502C36.6631 5.56171 36.6631 5.78331 36.7998 5.92L42.0798 11.2C42.2165 11.3367 42.4381 11.3367 42.5748 11.2C42.7115 11.0633 42.7115 10.8417 42.5748 10.705L37.2948 5.42502C37.1581 5.28834 36.9365 5.28834 36.7998 5.42502Z"
          fill={'white'}
          stroke={'white'}
          strokeWidth="0.4"
        />
      </G>
      {/*<Defs>*/}
      {/*  <ClipPath id="clip0_3953_158172">*/}
      {/*    <Rect width={width} height={height} fill={'white'} />*/}
      {/*  </ClipPath>*/}
      {/*</Defs>*/}
    </Svg>
  );
}
