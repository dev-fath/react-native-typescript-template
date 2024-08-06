import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function LoadBalanceOn({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 44 44" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.7525 6.11658C26.2552 6.33643 26.5521 6.86191 26.481 7.40585L25.0918 18.035H34.276C34.7544 18.035 35.1896 18.3118 35.3926 18.745C35.5955 19.1782 35.5295 19.6897 35.2232 20.0571L20.1939 38.0898C19.8427 38.5113 19.2552 38.6499 18.7526 38.4301C18.2499 38.2103 17.953 37.6848 18.0241 37.1408L19.4133 26.5116H10.2291C9.75069 26.5116 9.31545 26.2349 9.11252 25.8017C8.90959 25.3685 8.97561 24.857 9.28189 24.4895L24.3111 6.45685C24.6624 6.03543 25.2498 5.89674 25.7525 6.11658ZM12.8617 24.0459H20.818C21.1728 24.0459 21.5105 24.1988 21.7446 24.4655C21.9787 24.7321 22.0866 25.0867 22.0406 25.4385L21.02 33.2472L31.6434 20.5007H23.6871C23.3323 20.5007 22.9946 20.3479 22.7605 20.0812C22.5264 19.8146 22.4185 19.46 22.4645 19.1081L23.4851 11.2995L12.8617 24.0459Z"
        fill={color}
        stroke={color}
        stroke-width="0.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
