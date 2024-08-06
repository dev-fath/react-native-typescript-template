import React from 'react';

import { Pressable, StyleSheet, View } from 'react-native';

import BackButton from 'components/common/backbutton/BackButton';
import IconBase from 'components/common/icons';
import { IconKindType } from 'components/common/icons/icon.interface';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

export interface IAdditionalButton {
  iconName: IconKindType;
  text?: string;
  onClickAction: () => void;
}

interface ITitleBarProps {
  hasBackButton: boolean;
  onPressBackCustomEvent?: () => void;
  title?: string;
  color?: string;
  additionalButtons?: IAdditionalButton[];
}

export default function TitleBar(props: ITitleBarProps) {
  const {
    color = ColorCodes.gray3,
    hasBackButton,
    additionalButtons,
    onPressBackCustomEvent,
  } = props;

  const styles = titleBarStyle();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          {hasBackButton ? (
            <BackButton color={color} onPressBackCustomEvent={onPressBackCustomEvent} />
          ) : (
            <></>
          )}
        </View>
        <View>
          {/*<Typography.TextRegular1 color={titleColor}>{title}</Typography.TextRegular1>*/}
        </View>
      </View>
      {additionalButtons && (
        <View style={{ flexDirection: 'row', gap: 24 }}>
          {additionalButtons.map((button, index) => (
            <Pressable key={`${button.iconName}${index}`} onPress={button.onClickAction}>
              <IconBase icon={button.iconName} height={24} width={24} color={color} />
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const titleBarStyle = () => {
  return StyleSheet.create({
    container: {
      height: 64,
      width: '100%',
      paddingHorizontal: SPACE_SIZE['24'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    titleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    actionButtonContainer: {},
    actionButtonWrapper: {
      flexShrink: 1,
    },
  });
};
