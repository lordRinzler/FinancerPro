import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import ExpenseEdit from '../../modals/ExpenseEdit';

import { COLORS, SHADOW, CONSTANTS, SIZES, FONTS } from '../../constants/Theme';

const Rows = ({
  rowId,
  rowHeader,
  rowDate,
  rowCategory,
  rowAmount,
  rowStatus,
  handleDeleteEntry,
  handleSaveEntry
}) => {
  const [isChecked, setChecked] = useState({ rowStatus });

  const [iconBoxColor, setIconBoxColor] = useState(undefined);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    const color = rowId % 2 == 0 ? COLORS.cardScnd : COLORS.tertiaryColor;
    const colorBorder =
      rowId % 2 == 0 ? COLORS.cardFirstDark : COLORS.cardScndDark;
    if (rowId !== undefined) {
      setIconBoxColor({ backgroundColor: color });
    } else {
      setIconBoxColor(null);
    }
  }, [rowId]);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleDelete = () => {
    setIsOverlayVisible(false);
    handleDeleteEntry(rowId);
  };

  const handleSave = (dataObject) => {
    setIsOverlayVisible(false);
    handleSaveEntry(dataObject);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.containerMain}>
        <View style={styles.sectionLeft}>
          <TouchableOpacity
            style={{ ...styles.notificationClick, ...iconBoxColor }}
            onPress={toggleOverlay}>
            <Ionicons name="create" size={SIZES.large} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionRight}>
          <View style={styles.leftStack}>
            <Text style={styles.styleRegular}>{rowHeader}</Text>
            <Text style={styles.styleMedium}>{rowDate}</Text>
            <Text style={styles.styleSmall}>{rowCategory}</Text>
          </View>
          <View style={styles.rightStack}>
            <Text style={styles.styleRegular}>{rowAmount}</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
              <Text style={styles.checkBoxText}>Paid</Text>
            </View>
          </View>
        </View>
      </View>
      <Modal
        style={styles.modalStyle}
        animationType="slide"
        transparent={true}
        visible={isOverlayVisible}
        onRequestClose={toggleOverlay}>
        <View style={styles.centeredView}>
          <ExpenseEdit
            style={styles.modalStyle}
            onEntryDelete={handleDelete}
            onRequestSave={handleSave}
            rowHeader={rowHeader}
            rowDate={rowDate}
            rowCategory={rowCategory}
            rowAmount={rowAmount}
            rowStatus={rowStatus}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.white,
  },
  containerMain: {
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.white,
    padding: CONSTANTS.spacingSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  leftStack: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  rightStack: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sectionLeft: {
    paddingHorizontal: CONSTANTS.spacingSmall,
    marginRight: CONSTANTS.spacingMedium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationClick: {
    width: 40,
    height: 40,
    borderRadius: CONSTANTS.borderLarge,
    backgroundColor: COLORS.tertiaryColor,
    padding: CONSTANTS.spacingSmall,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
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
  checkboxContainer: {
    marginTop: -CONSTANTS.spacingSmall,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  checkbox: {
    margin: CONSTANTS.spacingMedium,
  },
});

export default Rows;
