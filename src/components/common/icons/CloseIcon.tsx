import React from 'react';
import { ISvgIconProps } from 'components/common/icons/icon.interface';
import Svg, { Path } from 'react-native-svg';

export default function CloseIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0757 20.9243C19.9195 21.0805 19.6662 21.0805 19.51 20.9243L3.57569 4.98996C3.41948 4.83375 3.41948 4.58049 3.57569 4.42428L4.42422 3.57575C4.58043 3.41954 4.83369 3.41954 4.9899 3.57575L20.9242 19.5101C21.0804 19.6663 21.0804 19.9195 20.9242 20.0758L20.0757 20.9243Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.57566 20.0757C3.41945 19.9195 3.41945 19.6663 3.57566 19.5101L19.51 3.57575C19.6662 3.41954 19.9195 3.41954 20.0757 3.57575L20.9242 4.42428C21.0804 4.58049 21.0804 4.83375 20.9242 4.98996L4.98987 20.9243C4.83366 21.0805 4.5804 21.0805 4.42419 20.9243L3.57566 20.0757Z"
        fill={color}
      />
    </Svg>
  );
}
