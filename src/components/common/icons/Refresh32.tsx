import React from 'react';
import { ISvgIconProps } from 'components/common/icons/icon.interface';
import Svg, { Path } from 'react-native-svg';

export default function Refresh32({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 31 31" fill="none">
      <Path
        d="M4.95395 21.1143C4.95412 20.6387 5.33974 20.2534 5.81528 20.2535L13.003 20.2554C13.1933 20.2554 13.3474 20.4097 13.3474 20.5999L13.3471 21.6332C13.3471 21.8235 13.1928 21.9776 13.0026 21.9776L7.38063 21.9761L8.12072 22.8229C10.0239 24.6862 12.627 25.8335 15.4998 25.8335C21.3257 25.8335 26.0485 21.1107 26.0485 15.2849C26.0485 9.45901 21.3257 4.73624 15.4998 4.73624C9.78949 4.73624 5.1389 9.27363 4.95677 14.9397C4.95066 15.1299 4.79702 15.2849 4.60679 15.2849H3.57345C3.38322 15.2849 3.22852 15.1297 3.23377 14.9395C3.41662 8.32221 8.83833 3.01402 15.4998 3.01402C22.2768 3.01402 27.7707 8.50786 27.7707 15.2849C27.7707 22.0618 22.2768 27.5557 15.4998 27.5557C12.1454 27.5557 9.10393 26.2086 6.88971 24.0278L6.86677 24.0052L6.67519 23.786L6.67346 28.5205C6.67339 28.7107 6.51912 28.8648 6.32889 28.8648L5.29555 28.8644C5.10532 28.8643 4.95116 28.7101 4.95123 28.5198L4.95395 21.1143Z"
        fill={color}
      />
    </Svg>
  );
}