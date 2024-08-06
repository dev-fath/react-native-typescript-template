import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function EmptyAnswerIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 61 61" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5756 13.2323C13.8248 10.0454 19.9151 8.81641 27.3919 8.81641C34.8687 8.81641 40.959 10.0454 45.2081 13.2323C49.6033 16.5287 51.6033 21.5808 51.6033 28.1548C51.6033 34.6183 49.6708 39.6163 45.4145 42.9198C41.3736 46.056 35.6156 47.3558 28.5648 47.4827L11.2047 54.631C10.371 54.9743 9.41337 54.7946 8.76087 54.1724C8.10837 53.5503 7.88332 52.6023 8.18655 51.7532L10.9539 44.0046C8.6844 42.636 6.86295 40.825 5.55487 38.5235C3.92178 35.6501 3.18042 32.1745 3.18042 28.1548C3.18042 21.5808 5.18048 16.5287 9.5756 13.2323ZM12.3142 16.8837C9.39951 19.0697 7.74469 22.5458 7.74469 28.1548C7.74469 31.6327 8.38759 34.2704 9.52301 36.2682C10.6423 38.2375 12.3297 39.7444 14.7161 40.8342C15.794 41.3264 16.3158 42.5617 15.9173 43.6777L14.2103 48.4573L27.2285 43.0969C27.4963 42.9866 27.7826 42.9283 28.0722 42.9251C34.969 42.849 39.6664 41.6033 42.616 39.3141C45.4343 37.1267 47.0391 33.6767 47.0391 28.1548C47.0391 22.5458 45.3842 19.0697 42.4696 16.8837C39.409 14.5883 34.5346 13.3807 27.3919 13.3807C20.2491 13.3807 15.3748 14.5883 12.3142 16.8837ZM15.3634 28.1548C15.3634 26.8944 16.3851 25.8726 17.6455 25.8726H17.6699C18.9303 25.8726 19.952 26.8944 19.952 28.1548C19.952 29.4152 18.9303 30.4369 17.6699 30.4369H17.6455C16.3851 30.4369 15.3634 29.4152 15.3634 28.1548ZM25.1097 28.1548C25.1097 26.8944 26.1315 25.8726 27.3919 25.8726H27.4162C28.6766 25.8726 29.6984 26.8944 29.6984 28.1548C29.6984 29.4152 28.6766 30.4369 27.4162 30.4369H27.3919C26.1315 30.4369 25.1097 29.4152 25.1097 28.1548ZM34.8561 28.1548C34.8561 26.8944 35.8778 25.8726 37.1382 25.8726H37.1626C38.423 25.8726 39.4447 26.8944 39.4447 28.1548C39.4447 29.4152 38.423 30.4369 37.1626 30.4369H37.1382C35.8778 30.4369 34.8561 29.4152 34.8561 28.1548Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M47.1702 2.19963C52.5619 2.19963 56.9327 6.57045 56.9327 11.9621C56.9327 17.3538 52.5619 21.7246 47.1702 21.7246C41.7785 21.7246 37.4077 17.3538 37.4077 11.9621C37.4077 6.57045 41.7785 2.19963 47.1702 2.19963Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50.942 8.15537C50.7687 7.98207 50.4878 7.98208 50.3145 8.15537L43.6202 14.8497C43.4469 15.023 43.4469 15.3039 43.6202 15.4772C43.7935 15.6505 44.0744 15.6505 44.2477 15.4772L50.942 8.78293C51.1153 8.60963 51.1153 8.32867 50.942 8.15537Z"
        fill="#F0F1F5"
        stroke="#F0F1F5"
        stroke-width="0.507142"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.6205 8.15537C43.4472 8.32867 43.4472 8.60963 43.6205 8.78293L50.3148 15.4772C50.4881 15.6505 50.769 15.6505 50.9423 15.4772C51.1156 15.3039 51.1156 15.023 50.9423 14.8497L44.248 8.15537C44.0747 7.98207 43.7938 7.98207 43.6205 8.15537Z"
        fill="#F0F1F5"
        stroke="#F0F1F5"
        stroke-width="0.507142"
      />
    </Svg>
  );
}