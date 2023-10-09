import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { COLORS, SIZES, CONSTANTS, FONTS } from '../../constants/Theme';

const Picker = ({ data, onItemSelected }) => {
  const [selectedValue, setSelectedValue] = useState(data[0].value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
    onItemSelected(value);
  };

  const dropdownData = data.slice(1);

  return (
    <View style={styles.containerMain}>
      <TouchableOpacity onPress={toggleDropdown}>
        <View style={styles.header}>
          <Text style={styles.itemText}>{selectedValue}</Text>
          <FontAwesome
            name={isDropdownOpen ? 'angle-up' : 'angle-down'}
            size={20}
            color={COLORS.appPrimary}
          />
        </View>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdown}>
          {dropdownData.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={styles.option}
              onPress={() => handleOptionSelect(item.value)}>
              <Text style={styles.itemText}>{item.item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    display: 'flex',
    fontFamily: FONTS.regular,
    borderColor: COLORS.headerFadeGray,
    borderWidth: 1,
    marginTop: CONSTANTS.spacingSmall,
    borderRadius: CONSTANTS.borderRadiusSmall,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: CONSTANTS.spacingLarge,
  },
  dropdown: {
    borderRadius: CONSTANTS.borderRadiusSmall,
  },
  option: {
    padding: CONSTANTS.spacingLarge,
    borderTopWidth: 1,
    borderColor: COLORS.headerFadeGray,
  },
  itemText: {
    fontFamily: FONTS.regular,
  },
});

export default Picker;
