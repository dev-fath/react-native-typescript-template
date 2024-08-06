import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function FilterResetIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6367 4.05153C20.5013 3.77607 20.2213 3.60156 19.9147 3.60156H4.06707C3.75375 3.60156 3.46894 3.78363 3.33714 4.06817C3.20535 4.3527 3.25056 4.68794 3.453 4.92731L8.85979 11.3204V19.2087C8.85979 19.6535 9.22001 20.0141 9.66436 20.0141H14.8179C15.2623 20.0141 15.6225 19.6535 15.6225 19.2087V11.2996L20.5519 4.89864C20.7391 4.65552 20.772 4.327 20.6367 4.05153ZM18.2786 5.21231L14.1807 10.5335C14.0722 10.6744 14.0134 10.8473 14.0134 11.0252V18.4033H10.4689V11.0252C10.4689 10.8347 10.4014 10.6503 10.2784 10.5049L5.80237 5.21231H18.2786Z"
        fill={color}
      />
      <Path
        d="M22.415 17.0821C22.415 19.8284 20.1908 22.0548 17.4472 22.0548C14.7036 22.0548 12.4795 19.8284 12.4795 17.0821C12.4795 14.3357 14.7036 12.1094 17.4472 12.1094C20.1908 12.1094 22.415 14.3357 22.415 17.0821Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.914 15.5841C18.0476 14.7259 16.6501 14.7287 15.7871 15.5926C14.9213 16.4592 14.9213 17.8644 15.7871 18.7311C16.653 19.5977 18.0567 19.5977 18.9225 18.7311C19.1317 18.5217 19.4709 18.5217 19.6801 18.7311C19.8893 18.9405 19.8893 19.28 19.6801 19.4894C18.3959 20.7749 16.3138 20.7749 15.0296 19.4894C13.7454 18.2039 13.7454 16.1197 15.0296 14.8342C16.3138 13.5487 18.3959 13.5487 19.6801 14.8342C19.686 14.8402 19.6918 14.8463 19.6975 14.8525L19.9106 15.087C19.915 14.7946 20.1532 14.559 20.4463 14.559C20.7421 14.559 20.982 14.7991 20.982 15.0952V16.473C20.982 16.7691 20.7421 17.0092 20.4463 17.0092H19.0753C18.7794 17.0092 18.5396 16.7691 18.5396 16.473C18.5396 16.1768 18.7794 15.9367 19.0753 15.9367H19.2345L18.914 15.5841Z"
        fill="#F0F1F5"
      />
    </Svg>
  );
}
