import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function Replay({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.08575 7.65371C4.08589 8.02187 4.38443 8.32023 4.7526 8.32013L10.3173 8.31867C10.4646 8.31863 10.5839 8.1992 10.5839 8.05193L10.5837 7.25193C10.5837 7.10465 10.4642 6.98529 10.317 6.98533L5.96447 6.98648L6.53745 6.33092C8.01086 4.88835 10.0262 4.00014 12.2503 4.00014C16.7606 4.00014 20.417 7.65649 20.417 12.1668C20.417 16.6771 16.7606 20.3335 12.2503 20.3335C7.8294 20.3335 4.22894 16.8207 4.08794 12.434C4.08321 12.2868 3.96426 12.1668 3.81698 12.1668H3.01698C2.86971 12.1668 2.74994 12.2869 2.75401 12.4342C2.89556 17.5572 7.09302 21.6668 12.2503 21.6668C17.497 21.6668 21.7503 17.4135 21.7503 12.1668C21.7503 6.92011 17.497 2.66681 12.2503 2.66681C9.65334 2.66681 7.29864 3.70974 5.58441 5.39808L5.56665 5.41557L5.41833 5.58527L5.41699 1.91989C5.41693 1.77261 5.2975 1.65327 5.15022 1.65332L4.35022 1.65361C4.20295 1.65367 4.0836 1.7731 4.08365 1.92038L4.08575 7.65371Z"
        fill={color}
      />
    </Svg>
  );
}
