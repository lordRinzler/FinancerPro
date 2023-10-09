import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES, CONSTANTS, FONTS } from '../../constants/Theme';
import ExpenseEntry from '../../modals/ExpenseEntry';

const TableHeader = ({ text, touchableIcon, borderWidth, handleSaveEntry }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const [borderBottomWidthStyle, setBorderBottomWidthStyle] =
    useState(undefined);

  useEffect(() => {
    if (borderWidth !== undefined) {
      setBorderBottomWidthStyle({ borderBottomWidth: borderWidth });
    } else {
      setBorderBottomWidthStyle(null);
    }
  }, [borderWidth]);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleCancel = () => {
    setIsOverlayVisible(false); 
  };

  const handleSave = (dataObject) => {
    setIsOverlayVisible(false); 
    handleSaveEntry(dataObject);
  }

  return (
    <View style={{ ...borderBottomWidthStyle, ...styles.rootContainer }}>
      <View style={styles.containerMain}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
      <TouchableOpacity onPress={toggleOverlay}>
        <View style={styles.pictureContainer}>
          <Ionicons name={touchableIcon} size={SIZES.large} color="black" />
        </View>
      </TouchableOpacity>
      <Modal
        style={styles.modalStyle}
        animationType="slide"
        transparent={true}
        visible={isOverlayVisible}
        
        onRequestClose={toggleOverlay}>
        <View style={styles.centeredView} >
        <ExpenseEntry style={styles.modalStyle} onRequestClose={handleCancel} onRequestSave={handleSave} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: CONSTANTS.spacingSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS.borderColor,
    alignItems: 'center',
    paddingVertical: CONSTANTS.spacingSmall,
    paddingHorizontal: CONSTANTS.spacingMedium,
  },
  containerMain: {
    height: 30,
    borderColor: COLORS.borderColor,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    color: COLORS.appSecondary,
  },
  modalStyle: {
    
  },
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position:"relative"
    },
  pictureContainer: {
    // Your picture container styles
  },
});

export default TableHeader;
