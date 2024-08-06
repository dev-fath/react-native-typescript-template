import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function CheckToastIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.7243 8.84282L10.8625 15.2516L7.75186 11.9381C7.65106 11.8307 7.4823 11.8254 7.37493 11.9262L6.79167 12.4737C6.6843 12.5745 6.67897 12.7433 6.77977 12.8507L10.4306 16.7396C10.5649 16.8827 10.7555 16.9593 10.9516 16.949C11.1476 16.9388 11.3291 16.8426 11.4478 16.6862L16.7866 9.64866C16.8756 9.53133 16.8526 9.36406 16.7353 9.27504L16.098 8.79153C15.9806 8.70252 15.8133 8.72548 15.7243 8.84282Z"
        fill={color}
      />
    </Svg>
  );
}
