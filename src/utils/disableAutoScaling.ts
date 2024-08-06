import { Text, TextInput } from 'react-native';

interface ITextWithDefaultProps extends Text {
  defaultProps: { allowFontScaling: boolean };
}

interface ITextInputWithDefaultProps extends TextInput {
  defaultProps: { allowFontScaling: boolean };
}

export default function disableAutoScaling() {
  (Text as unknown as ITextWithDefaultProps).defaultProps = (
    Text as unknown as ITextWithDefaultProps
  ).defaultProps || { allowFontScaling: false };

  (TextInput as unknown as ITextInputWithDefaultProps).defaultProps = (
    TextInput as unknown as ITextInputWithDefaultProps
  ).defaultProps || { allowFontScaling: false };
}
