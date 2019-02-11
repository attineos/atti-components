import { merge } from 'lodash'

import defaultTheme from '../defaultTheme'

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
      fs18: '18px',
      fs28: '28px',
      fs34: '34px',
      fs44: '44px',
    },
  },
  layout: {
    xlDesktop: {
      containerMaxWidth: '1300px',
    },
  },
  components: {
    bigText: {
      colors: {
        text: secondaryColor,
      },
      fonts: {
        fontFamily: 'Montserrat',
        fontSize: '18px',
        lineHeight: '1.2em',
      },
    },
    button: {
      borders: {
        borderRadius: '0px',
      },
      colors: {
        background: lightPrimaryColor,
      },
      spaces: {
        paddingHeight: '15px',
        paddingWidth: '30px',
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

export default merge({}, defaultTheme, attineosTheme)
