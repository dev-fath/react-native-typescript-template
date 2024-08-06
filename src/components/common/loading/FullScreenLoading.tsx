import React from 'react';

import { View, useWindowDimensions } from 'react-native';

import Loading from 'components/common/loading/Loading';

interface IFullScreenLoading {
  isVisible: boolean;
  onBackdropPress?: () => void;
}

const FullScreenLoading = ({ isVisible }: IFullScreenLoading) => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {isVisible && (
        <>
          <View
            style={{
              backgroundColor: 'black',
              zIndex: 1000,
              position: 'absolute',
              opacity: 0.6,
              width: width,
              height: height,
              top: 0,
              left: 0,
            }}
          />
          <View
            style={{
              zIndex: 1000,
              position: 'absolute',
              width: width,
              height: height,
            }}
          >
            <Loading />
          </View>
        </>
      )}
    </>
  );
};

export default FullScreenLoading;
