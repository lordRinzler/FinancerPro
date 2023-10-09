import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import { COLORS, SHADOW, CONSTANTS, SIZES, FONTS } from '../../constants/Theme';

const Summary = ({firstHalfTotal, secondHalfTotal, miscsTotal, overallTotal}) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.containerMain}>
        <View style={styles.leftStack}>
          <Text style={styles.styleSmall}>First Half</Text>
          <Text style={styles.styleSmall}>Second Half</Text>
          <Text style={styles.styleSmall}>Miscs</Text>
          <Text style={styles.styleRegular}>Total Payments</Text>
        </View>
        <View style={styles.rightStack}>
          <Text style={styles.styleMedium}>$ {firstHalfTotal}</Text>
          <Text style={styles.styleMedium}>$ {secondHalfTotal}</Text>
          <Text style={styles.styleMedium}>$ {miscsTotal}</Text>
          <Text style={styles.styleRegular}>$ {overallTotal}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: CONSTANTS.spacingSmall,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderColor
  },
  containerMain: {
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.white,
    padding: CONSTANTS.spacingMedium,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftStack: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rightStack: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  styleRegular: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.appPrimary,
  },
  styleMedium: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.small,
    color: COLORS.headerFadeGray,
  },
  styleSmall: {
    fontFamily: FONTS.openMedium,
    fontSize: SIZES.small,
    color: COLORS.appPrimary,
  },
});

export default Summary;
