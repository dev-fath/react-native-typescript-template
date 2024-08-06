import React, { PropsWithChildren } from 'react';

import { StyleSheet, View } from 'react-native';

import ButtonBase from 'components/common/buttonBase/ButtonBase';
import { Typography } from 'components/common/typography/Typography';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

export interface IPopupContentProps extends PropsWithChildren {
  onPressLeft?: (() => void) | (() => Promise<void>);
  onPressRight: (() => void) | (() => Promise<void>);
  title: string;
  body?: string;
  leftButtonText?: string;
  rightButtonText: string;
  isLargerButton?: boolean;
}
/**
 *
 * @description
 * - 원 버튼 : right 관련 값만 입력
 */
export function PopupContent({
  onPressRight,
  onPressLeft,
  title,
  body,
  leftButtonText,
  rightButtonText,
  children,
  isLargerButton,
}: IPopupContentProps) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.header}>
        <Typography.PopupTitle>{title}</Typography.PopupTitle>
      </View>
      {body && (
        <View style={styles.body}>
          <Typography.PopupSubText>{body}</Typography.PopupSubText>
        </View>
      )}

      {children && <View style={styles.childrenWrapper}>{children}</View>}

      <View style={styles.footer}>
        {!isLargerButton && (
          <View style={styles.buttonRowWrapper}>
            {leftButtonText && onPressLeft && (
              <View style={styles.buttonWrapper}>
                <ButtonBase onPress={onPressLeft} fill={'clear'}>
                  <Typography.ButtonText color={ColorCodes.gray1}>
                    {leftButtonText}
                  </Typography.ButtonText>
                </ButtonBase>
              </View>
            )}
            <View style={styles.buttonWrapper}>
              <ButtonBase onPress={onPressRight}>{rightButtonText}</ButtonBase>
            </View>
          </View>
        )}
        {isLargerButton && (
          <View>
            <View>
              <ButtonBase onPress={onPressRight}>{rightButtonText}</ButtonBase>
            </View>
            {leftButtonText && onPressLeft && (
              <View>
                <ButtonBase onPress={onPressLeft} fill={'clear'}>
                  <Typography.ButtonText color={ColorCodes.gray1} hasUnderline>
                    {leftButtonText}
                  </Typography.ButtonText>
                </ButtonBase>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: { padding: SPACE_SIZE[24] },
  header: {},
  body: {
    marginTop: SPACE_SIZE[8],
  },
  childrenWrapper: { marginTop: SPACE_SIZE[24] },
  footer: {
    marginTop: SPACE_SIZE['24'],
  },
  buttonRowWrapper: {
    flexDirection: 'row',
    gap: SPACE_SIZE['8'],
  },
  buttonWrapper: { flex: 1 },
});
