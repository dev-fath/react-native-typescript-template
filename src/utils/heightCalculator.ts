import { FIGMA_HEIGHT, SCREEN_HEIGHT } from 'constants/spaceSize';

export const heightCalculator = (originHeight: number) => {
  return originHeight * (SCREEN_HEIGHT / FIGMA_HEIGHT);
};
