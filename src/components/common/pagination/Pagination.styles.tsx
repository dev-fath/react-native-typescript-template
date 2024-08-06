import { StyleSheet } from 'react-native';

const DEFAULT_DOT_SIZE = 7;
const DEFAULT_DOT_COLOR = 'rgba(0, 0, 0, 0.75)';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sliderPagination: {
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },

  sliderPaginationDotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },

  sliderPaginationDot: {
    width: DEFAULT_DOT_SIZE,
    height: DEFAULT_DOT_SIZE,
    borderRadius: DEFAULT_DOT_SIZE / 2,
    backgroundColor: DEFAULT_DOT_COLOR,
  },
});
