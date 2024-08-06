export interface ISwitchBaseStyleProps {
  isOn?: boolean;
  width: number;
  size?: 'sm' | 'lg';
}

export interface ISwitchBaseProps {
  size?: 'sm' | 'lg';
  canToggle?: boolean;
  onToggle?: (isOn: boolean) => void;
  isOn: boolean;
}
