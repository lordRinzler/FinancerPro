import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SHADOW, CONSTANTS, FONTS, SIZES } from '../../constants/Theme';

const Header = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.containerMain}>
        <View style={styles.profileInfoContainer}>
          <TouchableOpacity>
            <View style={styles.pictureContainer}>
              <Ionicons
                name="person-outline"
                size={SIZES.large}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerGreeting}>Good Morning</Text>
            <Text style={styles.headerText}>Usama Hashmi</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationClick}>
          <Ionicons
            name="notifications-outline"
            size={SIZES.large}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.white,
  },
  containerMain: {
    height: 60,
    paddingHorizontal: CONSTANTS.spacingMedium,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerGreeting: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    paddingLeft: CONSTANTS.spacingLarge,
  },
  headerText: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.openMedium,
    paddingLeft: CONSTANTS.spacingLarge,
  },
  pictureContainer: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationClick: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default Header;
