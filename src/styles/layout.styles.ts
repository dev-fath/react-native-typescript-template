import { StyleSheet } from 'react-native';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

export const layoutStyles = StyleSheet.create({
  container: { flex: 1 },
  fullBackground: { backgroundColor: ColorCodes.blueGray1 },
  contentsContainer: {
    marginHorizontal: SPACE_SIZE['24'],
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  titleArea: {
    marginTop: SPACE_SIZE['24'],
    gap: SPACE_SIZE['8'],
  },
  buttonWrapper: {
    marginTop: SPACE_SIZE['24'],
    marginBottom: SPACE_SIZE['40'],
    gap: SPACE_SIZE['10'],
  },
  buttonReverse: { flexDirection: 'row-reverse', gap: SPACE_SIZE['16'] },
  submitButtonWrapper: {
    position: 'absolute',
    bottom: SPACE_SIZE['40'],
    right: SPACE_SIZE['24'],
    alignSelf: 'flex-end',
  },
  popupContainer: { padding: SPACE_SIZE['24'] },
  popupContentWrapper: { gap: 10 },
  popupButtonWrapper: { gap: 10, marginTop: SPACE_SIZE['24'] },
  popupInfoBox: {
    borderRadius: 8,
    backgroundColor: '#F8F8F8', // gray5
    padding: 12,
    gap: 8,
  },
});

export const flexStyles = StyleSheet.create({
  flexGrow: { flexGrow: 1 },
  flex: { flex: 1 },
  row: { flexDirection: 'row' },
  col: { flexDirection: 'column' },
  rowStartCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowEndCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rowBetweenStart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rowBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenterCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colCenterCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colStartCenter: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  colBetweenStart: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
