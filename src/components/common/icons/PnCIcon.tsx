import React from 'react';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function PnCIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_397_2138)">
        <Path
          d="M20.98 11.19C21.01 11.02 21.01 10.85 20.95 10.68L18.89 4.68C18.75 4.28 18.37 4 17.94 4H6C5.57 4 5.19 4.28 5.05 4.68L3.05 10.68C3 10.85 2.99 11.02 3.02 11.18C3.02 11.22 3 11.25 3 11.29V18.59C3 19.36 3.63 19.99 4.4 19.99H4.59C5.36 19.99 5.99 19.36 5.99 18.59V17.99H17.99V18.59C17.99 19.36 18.62 19.99 19.39 19.99H19.58C20.35 19.99 20.98 19.36 20.98 18.59V11.29C20.98 11.29 20.96 11.22 20.96 11.18L20.98 11.19ZM14.38 10.78L11.82 14.67C11.75 14.78 11.63 14.84 11.51 14.84C11.47 14.84 11.44 14.84 11.4 14.82C11.24 14.77 11.13 14.63 11.13 14.46V11.97H10.01C9.87 11.97 9.74 11.89 9.68 11.77C9.62 11.65 9.62 11.5 9.7 11.38L12.14 7.87C12.23 7.73 12.41 7.68 12.56 7.73C12.72 7.78 12.82 7.93 12.82 8.1L12.77 10.19H14.07C14.21 10.19 14.34 10.27 14.4 10.39C14.47 10.51 14.46 10.66 14.38 10.77V10.78Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_397_2138">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
