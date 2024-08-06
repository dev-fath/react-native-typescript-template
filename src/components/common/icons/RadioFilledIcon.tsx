import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function RadioFilledIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.6667C17.3388 21.6667 21.6667 17.3388 21.6667 12C21.6667 6.66125 17.3388 2.33333 12 2.33333C6.66125 2.33333 2.33333 6.66125 2.33333 12C2.33333 17.3388 6.66125 21.6667 12 21.6667ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
        fill={color}
      />
      <Path
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
        fill={color}
      />
    </Svg>
  );
}
