import {Text, SafeAreaView, StyleSheet} from 'react-native';

import {COLORS, SHADOW} from '../constants/Theme';
import Header from '../uiComponents/HeaderBars/Header';
import CardList from '../uiComponents/CardItems/CardList';
import Table from '../uiComponents/TableItems/Table';

const HomeScreen = () => {
  return(
    <SafeAreaView style={styles.rootContainer}>
      <Header/>
      <CardList/>
      <Table/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.white,
  }
});

export default HomeScreen;