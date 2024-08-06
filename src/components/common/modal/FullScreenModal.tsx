import React from 'react';

import { Pressable, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import IconBase from 'components/common/icons';
import { IModalProps } from 'components/common/modal/modalBase.interface';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

interface IFullScreenModalProps extends IModalProps {
  hasHeader?: boolean;
}

export default function FullScreenModal(props: IFullScreenModalProps) {
  const { top } = useSafeAreaInsets();
  const {
    children,
    onToggleModalIsVisible,
    isModalVisible,
    hasHeader = true,
  } = props;

  const styles = modalStyles(hasHeader ? top : 0);

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.container}
      onBackButtonPress={onToggleModalIsVisible}
    >
      <View style={styles.contentsContainer}>
        {hasHeader && (
          <View style={styles.header}>
            <Pressable onPress={onToggleModalIsVisible} hitSlop={16}>
              <IconBase icon={'close'} />
            </Pressable>
          </View>
        )}
        {children}
      </View>
    </Modal>
  );
}

const modalStyles = (top: number) =>
  StyleSheet.create({
    container: { margin: 0 },
    contentsContainer: {
      backgroundColor: ColorCodes.blueGray1,
      flex: 1,
      paddingTop: top,
    },
    header: {
      height: 64,
      paddingHorizontal: SPACE_SIZE['16'],
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  });
