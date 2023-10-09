import { Text, View, StyleSheet } from 'react-native';

import { COLORS, SHADOW, CONSTANTS } from '../../constants/Theme';
import Card from './Card';

const CardList = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <Card cardId={1}/>
        <Card cardId={2}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: CONSTANTS.spacingLarge,
  },
  mainContainer: {
    flexDirection: 'row',
  }
});

export default CardList;
