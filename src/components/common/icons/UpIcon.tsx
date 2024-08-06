import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function UpIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M15.0525 10.4895L14.949 10.6046L15.0525 10.4895L8.51808 4.61956C8.27313 4.39952 7.90171 4.39952 7.65676 4.61956L1.12234 10.4895C0.967132 10.6289 0.954336 10.8677 1.09376 11.023L1.45017 11.4197C1.45017 11.4197 1.45017 11.4197 1.45017 11.4197C1.5896 11.5749 1.82846 11.5877 1.98367 11.4483L8.08742 5.96526L14.1912 11.4483C14.3464 11.5877 14.5852 11.5749 14.7247 11.4197L15.0811 11.023C15.2205 10.8677 15.2077 10.6289 15.0525 10.4895Z"
        fill={color}
        stroke={color}
        strokeWidth="0.4"
      />
    </Svg>
  );
}
