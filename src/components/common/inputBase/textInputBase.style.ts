import { StyleSheet } from 'react-native';

import { ColorCodes } from 'constants/colors';
import FontFamily from 'constants/fontFamily';
import { SPACE_SIZE } from 'constants/spaceSize';

interface IInputStyleProps {
  disabled?: boolean;
  isFocused?: boolean;
  isError?: boolean;
  borderRadius?: number;
  borderColorDisabled?: boolean;
  isDarkMode?: boolean;
  customBorderColor?: string;
}
export const inputStyle = (props: IInputStyleProps) => {
  const {
    disabled = false,
    isError = false,
    borderRadius = 12,
    isFocused,
    isDarkMode,
    customBorderColor,
  } = props;
  const getBorderColor = () => {
    if (customBorderColor) {
      return customBorderColor;
    }
    return isError
      ? ColorCodes.pink
      : !disabled && isFocused
      ? isDarkMode
        ? ColorCodes.gray1
        : ColorCodes.mintGreen
      : ColorCodes.blueGray2;
  };

  return StyleSheet.create({
    container: { flexDirection: 'row' },
    actionIconsWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    wrapper: {
      height: 66,
      flexDirection: 'row',
      flex: 1,
      borderRadius: borderRadius,
      borderWidth: 1,
      alignItems: 'center',
      borderColor: getBorderColor(),
      backgroundColor: !disabled
        ? isDarkMode
          ? ColorCodes.black
          : ColorCodes.white
        : ColorCodes.blueGray1,
    },
    input: {
      backgroundColor: !disabled
        ? isDarkMode
          ? ColorCodes.black
          : ColorCodes.white
        : ColorCodes.blueGray1,
      borderRadius: 12,
      borderTopStartRadius: 12,
      borderTopEndRadius: 12,
      justifyContent: 'center',
      flex: 4,
      textAlignVertical: 'center',
      fontFamily: FontFamily.poppins.semiBold,
      fontSize: 16,
      lineHeight: 16 * 1.5,
      marginRight: 32,
    },
    labelWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: SPACE_SIZE['4'],
      marginLeft: SPACE_SIZE['8'],
    },
    errorMessageWrapper: {},
    inputTopContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    checkboxWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: SPACE_SIZE['4'],
      marginLeft: SPACE_SIZE['8'],
    },
    gap: { width: 4 },
  });
};

export const iconButtonStyles = StyleSheet.create({
  actionIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: SPACE_SIZE['16'],
  },
});
