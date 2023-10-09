const COLORS = {
  appPrimary: '#181d31',
  appSecondary: '#131112',
  tertiaryColor: '#bd9bc7',
  borderColor: '#EEEEEE',
  inactive: '#AAAAAA',
  white: 'white',
  cardFirst: '#e8d9ec',
  cardScnd: '#fbae84',
  cardFirstDark: '#d5c7d9',
  cardScndDark: '#e8a079',
  headerFadeGray: '#00000088',
  errorText: 'red'
};

const CONSTANTS = {
  spacingXL: 20,
  spacingLarge: 15,
  spacingMedium: 10,
  spacingSmall: 5,
  spacingHeader: 15,
  borderRadiusGen: 15,
  borderLarge: 50,
  borderRadiusSmall: 5
};

const FONTS = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  openRegular: 'OpenSans-Regular',
  openMedium: 'OpenSans-Medium',
  openBold: 'OpenSans-Bold',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOW = {
  smallShadow: {
    shadowColor: '#EEEEEE',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8.0,
    elevation: 12,
  },
  mediumShadow: {
    shadowColor: '#EEEEEE',
    shadowOffset: {
      width: 15,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 28.0,
    elevation: 12,
  },
  largeShadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8.0,
    elevation: 12,
  },
};

export { COLORS, SHADOW, SIZES, CONSTANTS, FONTS };
