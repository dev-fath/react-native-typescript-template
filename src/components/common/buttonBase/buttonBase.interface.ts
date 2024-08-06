import { PressableProps, ViewStyle } from 'react-native';

import { IconKindType } from 'components/common/icons/icon.interface';
import { ITypographyProps } from 'components/common/typography/Typography';

export interface IButtonBaseProps extends Omit<PressableProps, 'style'> {
  onPress?: (() => void) | (() => Promise<void>);
  size?: 'small' | 'large';
  fill?: 'default' | 'line' | 'color' | 'clear' | 'disabled' | 'grayscale-outline';
  disabled?: boolean;
  iconName?: IconKindType;
  iconWidth?: number;
  iconHeight?: number;
  contentsWrapperViewStyles?: ViewStyle;
  buttonTextWidth?: number;
  hasTextUnderline?: boolean;
}

export interface IButtonBaseStyleProps {
  backgroundColor: string;
  borderColor: string;
}

export interface IButtonColorObject {
  textColor: string;
  borderColor: string;
  backgroundColor: string;
}

export interface IButtonBaseViewProps extends IButtonBaseProps {
  buttonColorObject: IButtonColorObject;
  TextComponent: (props: ITypographyProps) => JSX.Element;
}
