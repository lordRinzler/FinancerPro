import {Text, SafeAreaView, StyleSheet} from 'react-native';

import GroupedBarChart from '../uiComponents/Charts/GroupedBarChart';

const AnalysisScreen = () => {
  return(
    <SafeAreaView>
      <GroupedBarChart />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 32
  }
});

export default AnalysisScreen;