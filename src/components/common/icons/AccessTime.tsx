import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function AccessTimeIcon({ width, height, color }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 16" fill="none">
      <Path
        d="M8.49399 1.33325C4.81398 1.33325 1.83398 4.31992 1.83398 7.99992C1.83398 11.6799 4.81398 14.6666 8.49399 14.6666C12.1807 14.6666 15.1673 11.6799 15.1673 7.99992C15.1673 4.31992 12.1807 1.33325 8.49399 1.33325ZM8.50065 13.3333C5.55398 13.3333 3.16732 10.9466 3.16732 7.99992C3.16732 5.05325 5.55398 2.66659 8.50065 2.66659C11.4473 2.66659 13.834 5.05325 13.834 7.99992C13.834 10.9466 11.4473 13.3333 8.50065 13.3333ZM8.83399 4.66659H7.83399V8.66659L11.334 10.7666L11.834 9.94659L8.83399 8.16659V4.66659Z"
        fill={color}
      />
    </Svg>
  );
}
