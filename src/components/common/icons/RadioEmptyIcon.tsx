import React from 'react';

import Svg, { Mask, Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function RadioEmptyIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Mask id="path-1-inside-1_1698_10251" fill="white">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21.6667C17.3388 21.6667 21.6667 17.3388 21.6667 12C21.6667 6.66125 17.3388 2.33333 12 2.33333C6.66125 2.33333 2.33333 6.66125 2.33333 12C2.33333 17.3388 6.66125 21.6667 12 21.6667ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
        />
      </Mask>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21.6667C17.3388 21.6667 21.6667 17.3388 21.6667 12C21.6667 6.66125 17.3388 2.33333 12 2.33333C6.66125 2.33333 2.33333 6.66125 2.33333 12C2.33333 17.3388 6.66125 21.6667 12 21.6667ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
        fill={color}
      />
      <Path
        d="M13.6667 12C13.6667 12.9205 12.9205 13.6667 12 13.6667V29.6667C21.757 29.6667 29.6667 21.757 29.6667 12H13.6667ZM12 10.3333C12.9205 10.3333 13.6667 11.0795 13.6667 12H29.6667C29.6667 2.24297 21.757 -5.66667 12 -5.66667V10.3333ZM10.3333 12C10.3333 11.0795 11.0795 10.3333 12 10.3333V-5.66667C2.24297 -5.66667 -5.66667 2.24297 -5.66667 12H10.3333ZM12 13.6667C11.0795 13.6667 10.3333 12.9205 10.3333 12H-5.66667C-5.66667 21.757 2.24297 29.6667 12 29.6667V13.6667ZM12 31C22.4934 31 31 22.4934 31 12H15C15 13.6569 13.6569 15 12 15V31ZM-7 12C-7 22.4934 1.50659 31 12 31V15C10.3431 15 9 13.6569 9 12H-7ZM12 -7C1.50659 -7 -7 1.50659 -7 12H9C9 10.3431 10.3431 9 12 9V-7ZM31 12C31 1.50659 22.4934 -7 12 -7V9C13.6569 9 15 10.3431 15 12H31Z"
        fill={color}
        mask="url(#path-1-inside-1_1698_10251)"
      />
    </Svg>
  );
}
