import React from 'react';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function GalleryIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_1076_37593)">
        <Path
          d="M2.63994 15.49C2.31994 15.49 1.99994 15.34 1.79994 15.07C1.45994 14.61 1.55994 13.96 2.01994 13.62L7.36994 9.7C7.73994 9.43 8.22994 9.43 8.59994 9.7L10.6799 11.23L14.4199 8.7C14.7699 8.46 15.2299 8.46 15.5799 8.7L21.9299 12.93C22.4099 13.25 22.5399 13.89 22.2199 14.37C21.8999 14.85 21.2599 14.98 20.7799 14.66L15.0099 10.82L11.2399 13.37C10.8799 13.62 10.3999 13.61 10.0399 13.35L7.97994 11.84L3.24994 15.31C3.05994 15.45 2.84994 15.51 2.63994 15.51V15.49Z"
          fill={color}
        />
        <Path
          d="M19.96 5C20.53 5 21 5.47 21 6.04V17.97C21 18.54 20.53 19.01 19.96 19.01H4.04C3.47 19.01 3 18.54 3 17.97V6.04C3 5.47 3.47 5 4.04 5H19.97M19.97 3H4.04C2.37 3 1 4.36 1 6.04V17.97C1 19.64 2.36 21.01 4.04 21.01H19.97C21.64 21.01 23.01 19.65 23.01 17.97V6.04C23.01 4.37 21.65 3 19.97 3Z"
          fill="#4A4F54"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1076_37593">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
