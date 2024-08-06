import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function PersonIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 16" fill="none">
      <Path
        d="M8.5013 8.00033C9.97464 8.00033 11.168 6.80699 11.168 5.33366C11.168 3.86033 9.97464 2.66699 8.5013 2.66699C7.02797 2.66699 5.83464 3.86033 5.83464 5.33366C5.83464 6.80699 7.02797 8.00033 8.5013 8.00033ZM8.5013 9.33366C6.7213 9.33366 3.16797 10.227 3.16797 12.0003V13.3337H13.8346V12.0003C13.8346 10.227 10.2813 9.33366 8.5013 9.33366Z"
        fill={color}
      />
    </Svg>
  );
}
