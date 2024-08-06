import React from 'react';
import { FlatList } from 'react-native';

import PaginationDot from 'components/common/pagination/PaginationDot';
import { IPaginationViewProps } from 'components/common/pagination/pagination.interface';

const PaginationView = <T extends Record<string, unknown>>(
  props: IPaginationViewProps<T>,
): JSX.Element => {
  const {
    activeDotIndex,
    dotsLength,
    containerStyle,
    renderDots,
    accessibilityLabel,
    ...residualProps
  } = props;

  // custom render를 선언한 경우
  if (renderDots) {
    return renderDots(activeDotIndex, dotsLength);
  }

  // dots length가 falsify value거나 1인 경우
  if (!dotsLength || dotsLength < 2) {
    return <></>;
  }

  // TODO: list length가 늘어났을 때 dot index에 따른 자동 스크롤링 가능하도록 변경
  // select시 스크롤링 되는 경우(예상):
  // 1. selected index의 position이 list length 의 50%를 넘으면서
  // 2. list length의 last index가 invisible한 경우 스크롤링되도록 변경
  return (
    <FlatList
      data={[...Array(dotsLength).keys()]}
      pointerEvents={'box-none'}
      contentContainerStyle={containerStyle}
      horizontal
      accessible={!!accessibilityLabel}
      accessibilityLabel={accessibilityLabel}
      renderItem={({ index }) => {
        const isActive = index === activeDotIndex;

        return (
          <PaginationDot
            active={isActive}
            key={`pagination-dot-${index}`}
            index={index}
            {...residualProps}
          />
        );
      }}
    />
  );
};

export default PaginationView;
