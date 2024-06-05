import {StyleSheet} from 'react-native';
import sizes from '../styles/sizes';

import colors from './colors';

export const borderStyles = StyleSheet.create({
  bottom: {
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export const textStyles = StyleSheet.create({
  text: {
    fontSize: sizes.fontSize,
  },
});
