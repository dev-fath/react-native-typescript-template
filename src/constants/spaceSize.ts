import { Dimensions } from 'react-native';

export const SPACE_SIZE = {
  '4': 4,
  '8': 8,
  '10': 10,
  '12': 12,
  '16': 16,
  '20': 20,
  '24': 24,
  '28': 28,
  '32': 32,
  '36': 36,
  '40': 40,
} as const;

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const BASE_WIDTH = 375;

export const BASE_HEIGHT = 812;
