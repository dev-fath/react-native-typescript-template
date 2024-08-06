import { ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { IconKindType } from 'components/common/icons/icon.interface';

export interface IButtonPress {
  onPress: () => void;
}

interface IBackButtonProp {
  text?: { text: string };
  icon?: { svgName: IconKindType; size?: number };
  image?: {
    image: ImageSourcePropType;
    width?: number | string;
    height?: number;
  };
}

export interface IBackButtonProps {
  buttonTypeProp?: Required<IBackButtonProp>[ButtonType];
  actions?: () => void;
  top?: number;
  horizontal?: number;
  horizontalInset?: BackButtonHorizontalType;
  color?: string;
}

export interface IBackButtonViewProps extends IBackButtonProps {
  onPress: () => void;
}

export type BackButtonHorizontalType = 'left' | 'right';
export type ButtonType = 'image' | 'icon' | 'text';

export interface IButtonContainerStyles {
  buttonsWrapper: ViewStyle;
  buttonContainer: ViewStyle;
}

export interface IStyles {
  textButton: TextStyle;
  iconButton: ViewStyle;
  imageButton: ImageStyle;
}

export interface IButtonStyleProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}
