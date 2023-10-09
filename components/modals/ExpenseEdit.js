import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Picker from '../uiComponents/Helpers/Picker';
import CalenderView from '../uiComponents/Helpers/CalenderView';

import { COLORS, SIZES, FONTS, CONSTANTS, SHADOW } from '../constants/Theme';

const ExpenseEdit = ({
  onEntryDelete,
  onRequestSave,
  rowHeader,
  rowDate,
  rowCategory,
  rowAmount,
  rowStatus,
}) => {
  const [title, setTitle] = useState(rowHeader);
  const [selectedDate, setSelectedDate] = useState(rowDate);
  const [selectedCategory, setSelectedCategory] = useState(rowCategory);
  const [amount, setAmount] = useState(rowAmount.toString()); // Convert to string for input
  const [status, setStatus] = useState(rowStatus ? 'Paid' : 'Unpaid'); // Set status based on rowStatus prop

  const [titleError, setTitleError] = useState('');
  const [dateError, setDateError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [amountError, setAmountError] = useState('');
  const [statusError, setStatusError] = useState('');

  const handleSave = () => {
    if (!title) {
      setTitleError('Title is required');
      return;
    }
    if (!selectedDate) {
      setDateError('Date is required');
      return;
    }
    if (selectedCategory === 'Select Category') {
      setCategoryError('Category is required');
      return;
    }
    if (status === 'Select Status') {
      setStatusError('Status is required');
      return;
    }
    if (!amount) {
      setAmountError('Amount is required');
      return;
    }
    if (!isNumeric(amount)) {
      setAmountError('Amount must be a valid number');
      return;
    }

    console.log(selectedCategory);

    // Reset error messages
    setTitleError('');
    setDateError('');
    setCategoryError('');
    setAmountError('');
    setStatusError('');

    const entryData = {
      rowHeader: title,
      rowDate: selectedDate,
      rowCategory: selectedCategory,
      rowAmount: parseFloat(amount).toFixed(2),
      rowStatus: status === 'Paid',
    };
    onRequestSave(entryData);
  };

  const handleDateSelect = (dateString) => {
    setSelectedDate(dateString);
    setDateError('');
  };

  const handleCategorySelected = (value) => {
    setSelectedCategory(value);
    setCategoryError('');
  };

  const handleStatusSelected = (value) => {
    setStatus(value);
    setStatusError('');
  };

  const optionData = [
    { item: 'Select Category', value: 'Select Category' },
    { item: 'Misc', value: 'Misc' },
    { item: 'First-Half', value: 'First-Half' },
    { item: 'Second-Half', value: 'Second-Half' },
  ];

  const paidStatus = [
    { item: 'Select Status', value: 'Select Status' },
    { item: 'Paid', value: 'Paid' },
    { item: 'Unpaid', value: 'Unpaid' },
  ];

  const isNumeric = (value) => {
    return /^\d+(\.\d+)?$/.test(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.styleRegular}>Expense Entry</Text>
      </View>
      <View style={styles.inputCard}>
        <TextInput
          mode="outlined"
          label="Title"
          placeholder="Title"
          placeholderTextColor={COLORS.appPrimary}
          value={title}
          onChangeText={(text) => setTitle(text)}
          error={!!titleError}
        />
        {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}
        <CalenderView onDateSelect={handleDateSelect} selectedDate={selectedDate} />
        {dateError ? <Text style={styles.errorText}>{dateError}</Text> : null}
        <Picker
          data={optionData}
          onItemSelected={handleCategorySelected}
          selectedValue={selectedCategory}
        />
        {categoryError ? (
          <Text style={styles.errorText}>{categoryError}</Text>
        ) : null}
        <Picker
          data={paidStatus}
          onItemSelected={handleStatusSelected}
          selectedValue={status}
        />
        {statusError ? (
          <Text style={styles.errorText}>{statusError}</Text>
        ) : null}
        <TextInput
          mode="outlined"
          label="Amount"
          placeholder="Amount"
          placeholderTextColor={COLORS.appPrimary}
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
          error={!!amountError}
        />
        {amountError ? (
          <Text style={styles.errorText}>{amountError}</Text>
        ) : null}
      </View>
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.cancelBtn} onPress={onEntryDelete}>
          <Text style={styles.styleRegular}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.styleRegular}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    borderRadius: CONSTANTS.borderRadiusGen,
    margin: CONSTANTS.spacingLarge,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    ...SHADOW.largeShadow,
  },
  headerContainer: {
    marginTop: CONSTANTS.spacingMedium,
    marginHorizontal: CONSTANTS.spacingLarge,
    paddingTop: CONSTANTS.spacingSmall,
  },
  inputCard: {
    marginHorizontal: CONSTANTS.spacingMedium,
    padding: CONSTANTS.spacingLarge,
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: CONSTANTS.spacingMedium,
    marginHorizontal: CONSTANTS.spacingMedium,
    padding: CONSTANTS.spacingLarge,
  },
  errorText: {
    color: COLORS.errorText,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
  },
  cancelBtn: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CONSTANTS.borderRadiusGen,
    backgroundColor: COLORS.cardScnd,
    padding: CONSTANTS.spacingSmall,
  },
  saveButton: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CONSTANTS.borderRadiusGen,
    backgroundColor: COLORS.cardFirst,
    padding: CONSTANTS.spacingSmall,
  },
  styleRegular: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.appPrimary,
  },
});

export default ExpenseEdit;
