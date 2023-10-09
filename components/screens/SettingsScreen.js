import {Text, SafeAreaView, StyleSheet} from 'react-native';

const SettingsScreen = () => {
  return(
    <SafeAreaView>
      <Text style={styles.textStyle}>SettingsScreen</Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 32
  }
});

export default SettingsScreen;