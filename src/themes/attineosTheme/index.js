const lightPrimaryColor = '#FDA42A'
const primaryColor = '#FF9600'
const secondaryColor = '#22DD8D'

const attineosTheme = {
  colors: {
    lightPrimary: lightPrimaryColor,
    primary: primaryColor,
    darkPrimary: '#F08303',
    lightSecondary: '#1EF79A',
    secondary: secondaryColor,
    darkSecondary: '#21C788',
    lightTertiary: '#CF19F0',
    tertiary: '#9819D9',
    darkTertiary: '#7819AA',
    black: '#4E4E4E',
    smoke: '#E0DFDF',
    darkSmoke: '#C6C6C6',
    snow: '#F8F8F8',
    darkSnow: '#EFEFEF',
    // custom
    lightBlack: '#767676',
  },
  fonts: {
    fontFamily: {
      primary: 'Museo300',
      secondary: 'Montserrat',
    },
    fontSize: {
      fs10: '10px',
      fs12: '12px',
      fs14: '14px',
      fs18: '18px',
      fs20: '20px',
      fs22: '22px',
      fs24: '24px',
      fs28: '28px',
      fs30: '30px',
      fs34: '34px',
      fs44: '44px',
      fs54: '54px',
      fs70: '70px',
    },
  },
  components: {
    bigText: {
      fonts: {
        fontSize: '22px',
        fontWeight: 300,
        lineHeight: '1.4em',
      },
    },
    header1: {
      fonts: {
        fontFamily: 'Montserrat',
        fontSize: '70px',
        fontWeight: '700',
        lineHeight: '1.2em',
      },
    },
    header2: {
      fonts: {
        fontFamily: 'Montserrat',
        fontSize: '44px',
        lineHeight: '1.2em',
      },
    },
    header3: {
      fonts: {
        fontFamily: 'Montserrat',
        fontSize: '34px',
        lineHeight: '1.2em',
      },
    },
    header4: {
      fonts: {
        fontFamily: 'Montserrat',
        fontSize: '28px',
        lineHeight: '1.2em',
      },
    },
    link: {
      colors: {
        borderHover: primaryColor,
      },
    },
    text: {
      fonts: {
        fontSize: '18px',
        fontWeight: 300,
        lineHeight: '1.4em',
      },
    },
    smallText: {
      fonts: {
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: '1.4em',
      },
    },
  },

  custom: {
    menu: {
      menuHeight: '60px',
    },
    blogPost: {
      basicWidth: '50%',
      extendedWidth: '70%',
    },
  },
}

export default attineosTheme
