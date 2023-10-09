import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SHADOW, CONSTANTS, SIZES, FONTS } from '../../constants/Theme';

const Card = ({ cardId }) => {
  const [iconBoxColor, setIconBoxColor] = useState(undefined);
  useEffect(() => {
    const color = cardId % 2 == 0 ? COLORS.cardScnd : COLORS.cardFirst;
    const colorBorder =
      cardId % 2 == 0 ? COLORS.cardScndDark : COLORS.cardFirstDark;
    if (cardId !== undefined) {
      setIconBoxColor({ backgroundColor: color, borderColor: colorBorder });
    } else {
      setIconBoxColor(null);
    }
  }, [cardId]);

  return (
    <View style={{ ...styles.rootContainer, ...iconBoxColor }}>
      <View style={styles.firstRow}>
        <Text style={styles.styleRegular}>Wells Fargo</Text>
      </View>

      <View style={styles.firstRow}>
        <Text style={styles.styleMedium}>Total Balance</Text>
        <Text style={styles.styleLarge}>$1900.40</Text>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.styleSmall}>Last Updated</Text>
          <Text style={styles.styleMedium}>13/12/2023</Text>
        </View>

        <View style={styles.firstRow}>
          <TouchableOpacity
            style={{ ...styles.notificationClick, ...iconBoxColor }}>
            <Ionicons
              name="create"
              size={SIZES.large}
              color={COLORS.appPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    height: 180,
    borderWidth: 1,
    width: 180,
    justifyContent: 'space-between',
    borderColor: COLORS.cardFirstDark,
    borderRadius: CONSTANTS.borderRadiusGen,
    backgroundColor: COLORS.cardFirst,
    marginVertical: CONSTANTS.spacingSmall,
    marginRight: CONSTANTS.spacingMedium,
    padding: CONSTANTS.spacingMedium,
  },
  firstRow: {},
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  styleRegular: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.appPrimary,
  },
  styleLarge: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
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

export default Card;
