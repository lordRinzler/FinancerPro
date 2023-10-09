import { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { COLORS, SHADOW, CONSTANTS, SIZES, FONTS } from '../../constants/Theme';
import Rows from './Rows';
import TableHeader from '../HeaderBars/TableHeader';
import Summary from './Summary';

const Table = () => {
  const [expenseData, setExpenseData] = useState([
    {
      rowId: 1,
      rowHeader: 'Mercedes C300',
      rowDate: 'Monday, Sep 25',
      rowCategory: 'First-Half',
      rowAmount: 464.36,
      rowStatus: true,
    },
    {
      rowId: 2,
      rowHeader: 'House Rent',
      rowDate: 'Monday, Oct 05',
      rowCategory: 'Second-Half',
      rowAmount: 497.5,
      rowStatus: false,
    },
    {
      rowId: 3,
      rowHeader: 'OneMain',
      rowDate: 'Monday, Oct 15',
      rowCategory: 'Misc',
      rowAmount: 497.5,
      rowStatus: false,
    },
    {
      rowId: 4,
      rowHeader: 'Affinity Loan',
      rowDate: 'Monday, Oct 12',
      rowCategory: 'Second-Half',
      rowAmount: 119.5,
      rowStatus: false,
    },
    {
      rowId: 5,
      rowHeader: 'PowerSpec',
      rowDate: 'Monday, Oct 17',
      rowCategory: 'Second-Half',
      rowAmount: 150.36,
      rowStatus: false,
    },
    {
      rowId: 5,
      rowHeader: 'PowerSpec',
      rowDate: 'Monday, Oct 17',
      rowCategory: 'Second-Half',
      rowAmount: 150.36,
      rowStatus: false,
    },
    {
      rowId: 5,
      rowHeader: 'PowerSpec',
      rowDate: 'Monday, Oct 17',
      rowCategory: 'Second-Half',
      rowAmount: 150.36,
      rowStatus: false,
    },
  ]);

  const saveEntry = (item) => {
    const newRowId = expenseData.length + 1;
    item.rowId = newRowId;
    setExpenseData([...expenseData, item]);
  };

  const firstHalfTotal = expenseData.reduce((total, item) => {
    if (item.rowCategory === 'First-Half') {
      total += item.rowAmount;
    }
    return total;
  }, 0);

  const secondHalfTotal = expenseData.reduce((total, item) => {
    if (item.rowCategory === 'Second-Half') {
      total += item.rowAmount;
    }
    return total;
  }, 0);

  const miscsTotal = expenseData.reduce((total, item) => {
    if (item.rowCategory === 'Misc') {
      total += item.rowAmount;
    }
    return total;
  }, 0);

  const overallTotal = firstHalfTotal + secondHalfTotal + miscsTotal;

  const deleteEntry = (rowId) => {
    const updatedExpenseData = expenseData.filter(
      (item) => item.rowId !== rowId
    );
    setExpenseData(updatedExpenseData);
  };

  const modifyEntry = () => {};

  const renderItem = ({ item }) => (
    <Rows
      rowId={item.rowId}
      rowHeader={item.rowHeader}
      rowDate={item.rowDate}
      rowCategory={item.rowCategory}
      rowAmount={item.rowAmount}
      rowStatus={item.rowStatus}
      handleDeleteEntry={deleteEntry}
      handleSaveEntry={modifyEntry}
    />
  );

  modifyEntry;

  return (
    <View style={styles.rootContainer}>
      <View style={styles.tableContent}>
        <TableHeader
          text={'Payments'}
          touchableIcon={'add'}
          borderWidth={1}
          screenName={'ExpenseEntry'}
          handleSaveEntry={saveEntry}
        />
        <FlatList
          data={expenseData}
          renderItem={renderItem}
          keyExtractor={(item) => item.rowId.toString()}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Summary
        firstHalfTotal={firstHalfTotal}
        secondHalfTotal={secondHalfTotal}
        miscsTotal={miscsTotal}
        overallTotal={overallTotal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: CONSTANTS.borderRadiusGen,
    padding: CONSTANTS.spacingSmall,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginHorizontal: CONSTANTS.spacingMedium,
    marginVertical: CONSTANTS.spacingSmall,
  },
  tableContent: {
    flex: 1,
  },
  flatList: {
    display: 'flex',
  },
});

export default Table;
