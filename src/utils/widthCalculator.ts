import { BASE_WIDTH, SCREEN_WIDTH } from 'constants/spaceSize';

export const widthCalculator = (originWidth: number) => {
  return originWidth * (SCREEN_WIDTH / BASE_WIDTH);
};
