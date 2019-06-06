```yaml
{
  breakpoints:
    { mobileMax: '767px', tabletMin: '768px', tabletMax: '1024px', desktopMin: '1025px' },
  animations:
    {
      duration:
        {
          d0: '0s',
          d1: '50ms',
          d2: '100ms',
          d3: '200ms',
          d4: '400ms',
          d5: '600ms',
          d6: '800ms',
          d7: '1s',
          d8: '1.25s',
          d9: '1.5s',
          d10: '1.75s',
          d11: '2s',
          d12: '2.5s',
          d13: '5s',
        },
      type:
        {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
        },
    },
  borders:
    {
      widths:
        {
          bw0: '0px',
          bw1: '1px',
          bw2: '2px',
          bw3: '3px',
          bw4: '4px',
          bw5: '5px',
          bw6: '6px',
          bw7: '7px',
          bw8: '8px',
          bw9: '9px',
          bw10: '10px',
        },
      radius: { none: '0px', small: '2px', medium: '4px', large: '6px', full: '50%' },
    },
  boxShadows: { shadow1: '0 0 4px 0 #2CB1BC' },
  colors:
    {
      darkerPrimary: '#044E54',
      darkPrimary: '#0E7C86',
      primary: '#2CB1BC',
      lightPrimary: '#54D1DB',
      lighterPrimary: '#BEF8FD',
      darkerNeutral: '#102A43',
      darkNeutral: '#334E68',
      neutral: '#627D98',
      lightNeutral: '#9FB3C8',
      lighterNeutral: '#D9E2EC',
      supportDarkInfo: '#099AA4',
      supportInfo: '#3AE7E1',
      supportLightInfo: '#C1FEF6',
      supportDarkSuccess: '#147D64',
      supportSuccess: '#3EBD93',
      supportLightSuccess: '#C6F7E2',
      supportDarkWarning: '#CB6E17',
      supportWarning: '#F7C948',
      supportLightWarning: '#FFF3C4',
      supportDarkDanger: '#C52707',
      supportDanger: '#F9703E',
      supportLightDanger: '#FFD0B5',
      transparent: 'transparent',
      black: '#222222',
      lightBlack: '#3B3B3B',
      lighterBlack: '#515151',
      darkerGrey: '#626262',
      darkGrey: '#7E7E7E',
      grey: '#9E9E9E',
      lightGrey: '#B1B1B1',
      lighterGrey: '#CFCFCF',
      darkerWhite: '#E1E1E1',
      darkWhite: '#F7F7F7',
      white: '#FFFFFF',
    },
  fonts:
    {
      fontFamily: { primary: 'Roboto', secondary: 'Inconsolata, Monaco, consolas, "courrier new"' },
      fontSize:
        {
          fs12: '12px',
          fs14: '14px',
          fs16: '16px',
          fs18: '18px',
          fs20: '20px',
          fs24: '24px',
          fs30: '30px',
          fs36: '36px',
          fs48: '48px',
          fs60: '60px',
          fs72: '72px',
        },
      fontWeight:
        {
          fw100: 100,
          fw200: 200,
          fw300: 300,
          fw400: 400,
          fw500: 500,
          fw600: 600,
          fw700: 700,
          fw800: 800,
          fw900: 900,
          fw1000: 1000,
        },
      lineHeight:
        {
          lh8: '8px',
          lh10: '10px',
          lh12: '12px',
          lh14: '14px',
          lh16: '16px',
          lh20: '20px',
          lh24: '24px',
          lh32: '32px',
          lh40: '40px',
          lh48: '48px',
          lh56: '56px',
        },
    },
  opacities:
    {
      o0: 0,
      o1: 0.1,
      o2: 0.2,
      o3: 0.3,
      o4: 0.4,
      o5: 0.5,
      o6: 0.6,
      o7: 0.7,
      o8: 0.8,
      o9: 0.9,
      o10: 1,
    },
  spaces:
    {
      s0_25: '4px',
      s0_5: '8px',
      s0_75: '12px',
      s1: '16px',
      s1_5: '24px',
      s2: '32px',
      s3: '48px',
      s4: '64px',
      s6: '96px',
      s8: '128px',
      s12: '192px',
      s16: '256px',
      s24: '384px',
      s32: '512px',
      s40: '640px',
      s48: '768px',
      quarter: '25%',
      halt: '50%',
      threeQuarter: '75%',
      full: '100%',
    },
  factories: [{ name: 'layout' }, { name: 'forms' }, { name: 'components' }],
  layout:
    {
      mobile: { cols: 6, gap: 's1', to: '767px', containerMaxWidth: '420px', padding: 's1' },
      tablet:
        {
          cols: 6,
          gap: 's1_5',
          from: '768px',
          to: '1024px',
          containerMaxWidth: 'none',
          padding: 's1_5',
        },
      desktop: { cols: 12, gap: 's1_5', containerMaxWidth: '1280px', padding: 's1_5' },
    },
  forms:
    {
      borders: { radius: '4px', width: '1px' },
      boxShadow: '0 0 4px 0 #2CB1BC',
      colors:
        {
          normal:
            {
              border: '#E1E1E1',
              borderFocus: '#B1B1B1',
              caret: '#3B3B3B',
              placeholder: '#B1B1B1',
              text: '#7E7E7E',
            },
          error:
            {
              border: '#F9703E',
              borderFocus: '#C52707',
              caret: '#C52707',
              placeholder: '#F9703E',
              text: '#C52707',
            },
          warning:
            {
              border: '#F7C948',
              borderFocus: '#CB6E17',
              caret: '#CB6E17',
              placeholder: '#F7C948',
              text: '#CB6E17',
            },
        },
      sizes: { height: '42px' },
    },
  components:
    {
      alert:
        {
          colors:
            {
              background:
                { error: '#FFD0B5', success: '#C6F7E2', warning: '#FFF3C4', info: '#C1FEF6' },
              text: { error: '#C52707', success: '#147D64', warning: '#CB6E17', info: '#099AA4' },
              borders:
                { error: '#F9703E', success: '#3EBD93', warning: '#F7C948', info: '#3AE7E1' },
            },
          spaces: { padding: '16px' },
          borders: { radius: '4px', size: '2px' },
          sizes: { width: 'auto' },
          fonts: { fontWeight: 500, lineHeight: '10px' },
        },
      avatar:
        {
          border: { radius: '50%' },
          colors: { text: '#FFFFFF' },
          fonts: { fontFamily: 'Roboto' },
          sizes:
            {
              small: { size: '24px', fontSize: '12px', lineHeight: '10px' },
              medium: { size: '32px', fontSize: '16px', lineHeight: '16px' },
              large: { size: '64px', fontSize: '30px', lineHeight: '32px' },
            },
        },
      badge:
        {
          borders: { radius: '50px' },
          colors:
            {
              background:
                { danger: '#F9703E', success: '#3EBD93', warning: '#F7C948', info: '#3AE7E1' },
              text: '#FFFFFF',
            },
          spaces: { paddingHeight: '8px', paddingWidth: '8px' },
          fonts:
            {
              fontSize: '12px',
              lineHeight: '8px',
              fontWeight: 600,
              fontFamily: 'Roboto',
              letterSpacing: '1.5px',
            },
          display: 'inline-flex',
        },
      bigText:
        {
          colors: { text: '#222222' },
          fonts: { fontFamily: 'Roboto', fontSize: '20px', fontWeight: 400, lineHeight: '1.4em' },
        },
      breadcrumb:
        {
          breadcrumbSeparator:
            { color: '#9E9E9E', spaces: { marginLeft: '4px', marginRight: '4px' } },
          currentElement: { colors: { text: '#9E9E9E' } },
          fonts: { fontFamily: 'Roboto', fontSize: '14px', fontWeight: 100 },
          spaces: { marginBottom: '8px' },
        },
      button:
        {
          borders:
            {
              primary: { borderWidth: '2px', borderRadius: '4px' },
              neutral: { borderWidth: '2px', borderRadius: '4px' },
              normal: { borderWidth: '2px', borderRadius: '4px' },
              light: { borderWidth: '2px', borderRadius: '4px' },
              dark: { borderWidth: '2px', borderRadius: '4px' },
            },
          colors:
            {
              primary: { background: '#2CB1BC', border: 'transparent', text: '#FFFFFF' },
              neutral: { background: '#627D98', border: 'transparent', text: '#FFFFFF' },
              normal: { background: 'transparent', border: '#627D98', text: '#9E9E9E' },
              light: { background: 'transparent', border: '#FFFFFF', text: '#FFFFFF' },
              dark: { background: 'transparent', border: '#222222', text: '#222222' },
            },
          sizes: { height: '42px' },
          opacities: { hover: 0.8 },
          spaces: { paddingHeight: '8px', paddingWidth: '16px' },
          textAlign: 'center',
        },
      checkBox:
        {
          checkBoxBox:
            {
              borders: { radius: '4px', width: '1px' },
              checkSign: { color: '#FFFFFF', thickness: '3px' },
              colors: { backgroundHover: '#2CB1BC', backgroundChecked: '#54D1DB' },
              sizes: { height: '16px', width: '16px' },
              spaces: { top: '4px', bottom: '4px', left: '4px', right: '8px' },
            },
        },
      header1:
        {
          colors: { text: '#3B3B3B' },
          fonts:
            {
              fontFamily: 'Roboto',
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: '1em',
              mobile: { fontSize: '48px' },
            },
        },
      header2:
        {
          colors: { text: '#3B3B3B' },
          fonts:
            {
              fontFamily: 'Roboto',
              fontSize: '48px',
              fontWeight: 500,
              lineHeight: '1.1em',
              mobile: { fontSize: '36px' },
            },
        },
      header3:
        {
          colors: { text: '#3B3B3B' },
          fonts:
            {
              fontFamily: 'Roboto',
              fontSize: '36px',
              fontWeight: 400,
              lineHeight: '1.1em',
              mobile: { fontSize: '30px' },
            },
        },
      header4:
        {
          colors: { text: '#3B3B3B' },
          fonts: { fontFamily: 'Roboto', fontSize: '24px', fontWeight: 400, lineHeight: '1.2em' },
        },
      img: { sizes: { height: '100%', width: '100%' } },
      input:
        {
          input:
            {
              borders: { radius: '4px', width: '1px' },
              boxShadows: { boxShadowFocus: '0 0 4px 0 #2CB1BC' },
              colors:
                {
                  normal:
                    {
                      border: '#E1E1E1',
                      borderFocus: '#B1B1B1',
                      caret: '#3B3B3B',
                      placeholder: '#B1B1B1',
                      text: '#7E7E7E',
                    },
                  error:
                    {
                      border: '#F9703E',
                      borderFocus: '#C52707',
                      caret: '#C52707',
                      placeholder: '#F9703E',
                      text: '#C52707',
                    },
                  warning:
                    {
                      border: '#F7C948',
                      borderFocus: '#CB6E17',
                      caret: '#CB6E17',
                      placeholder: '#F7C948',
                      text: '#CB6E17',
                    },
                },
              sizes: { height: '42px', width: '100%' },
              spaces: { paddingHeight: '8px', paddingWidth: '8px' },
            },
        },
      inputFile:
        {
          borders:
            {
              primary: { borderWidth: '2px', borderRadius: '4px' },
              neutral: { borderWidth: '2px', borderRadius: '4px' },
              normal: { borderWidth: '2px', borderRadius: '4px' },
              light: { borderWidth: '2px', borderRadius: '4px' },
              dark: { borderWidth: '2px', borderRadius: '4px' },
            },
          colors:
            {
              primary: { background: '#2CB1BC', border: 'transparent', text: '#FFFFFF' },
              neutral: { background: '#627D98', border: 'transparent', text: '#FFFFFF' },
              normal: { background: 'transparent', border: '#627D98', text: '#9E9E9E' },
              light: { background: 'transparent', border: '#FFFFFF', text: '#FFFFFF' },
              dark: { background: 'transparent', border: '#222222', text: '#222222' },
            },
          sizes: { height: '42px' },
          opacities: { hover: 0.8 },
          spaces: { paddingHeight: '8px', paddingWidth: '16px' },
          textAlign: 'center',
        },
      inputGroup: { borders: { borderWidth: '2px', borderRadius: '4px' }, colors: {} },
      label:
        {
          colors: { text: '#9E9E9E' },
          fonts: { fontFamily: 'Roboto', fontSize: '16px', fontWeight: 500, lineHeight: '24px' },
        },
      link:
        {
          borders: { width: '1px' },
          colors: { border: 'currentcolor', borderHover: 'currentcolor', text: '#2CB1BC' },
        },
      loader:
        {
          animations: { speed: '1.25s', type: 'linear' },
          borders: { radius: '50%', thickness: '4px' },
          colors: { colorIndicator: '#2CB1BC', backgroundColor: '#FFFFFF' },
          size: '24px',
        },
      menu:
        {
          menuDesktop:
            {
              basic:
                {
                  link:
                    {
                      colors: { backgroundHover: '#9FB3C8', text: '#FFFFFF', textHover: '#FFFFFF' },
                      spaces: { paddingWidth: '64px' },
                    },
                  menu: { colors: { background: '#627D98' }, sizes: { height: '48px' } },
                },
              withButtons:
                {
                  link:
                    {
                      colors:
                        {
                          background: '#FFFFFF',
                          backgroundSelected: '#E1E1E1',
                          backgroundHover: '#E1E1E1',
                          text: '#9E9E9E',
                          textSelected: '#7E7E7E',
                          textHover: '#626262',
                          bottomBorder: 'transparent',
                          bottomBorderSelected: '#2CB1BC',
                        },
                      spaces: { paddingWidth: '64px' },
                    },
                  menu:
                    {
                      borderRadius: '4px',
                      bottomBorder: '2px',
                      colors: { background: '#D9E2EC', border: '#F7F7F7' },
                      sizes: { height: '48px' },
                    },
                },
              withLiftedTabs:
                {
                  link:
                    {
                      colors:
                        {
                          background: 'transparent',
                          backgroundSelected: 'transparent',
                          backgroundHover: 'transparent',
                          text: '#9E9E9E',
                          textSelected: '#7E7E7E',
                          textHover: '#626262',
                        },
                      spaces: { paddingWidth: '64px' },
                    },
                  menu:
                    {
                      borderRadius: '8px',
                      border: '1px',
                      colors: { background: '#D9E2EC', border: '#E1E1E1' },
                      sizes: { height: '48px' },
                    },
                },
            },
          menuMobile:
            {
              link:
                {
                  colors:
                    {
                      backgroundSelected: '#9FB3C8',
                      backgroundHover: '#9FB3C8',
                      text: '#FFFFFF',
                      textHover: '#FFFFFF',
                      textSelected: '#FFFFFF',
                    },
                  spaces: { marginHeight: '8px', paddingHeight: '12px', paddingWidth: '24px' },
                },
              menu:
                {
                  colors: { background: '#627D98' },
                  spaces: { paddingHeight: '16px', width: '256px' },
                },
              opener:
                {
                  line:
                    {
                      borderRadius: '40px',
                      colors: { background: '#627D98' },
                      spaces: { height: '4px', width: '48px' },
                    },
                  spaces: { height: '32px' },
                },
            },
        },
      modal:
        {
          borders: { radius: '4px', titleBottomColor: '#222222', titleBottomWidth: '1px' },
          boxShadows: { boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 20px' },
          colors:
            {
              background: '#FFFFFF',
              closeButton: '#222222',
              overlayBackground: 'rgba(0, 0, 0, 0.3)',
            },
          spaces:
            {
              paddingHeightContent: '16px',
              paddingHeightTitle: '16px',
              paddingWidthContent: '32px',
              paddingWidthTitle: '32px',
            },
        },
      option:
        {
          borders: { style: 'solid', width: '1px' },
          colors:
            {
              background: '#FFFFFF',
              backgroundSelected: '#2CB1BC',
              text: '#222222',
              textSelected: '#FFFFFF',
            },
          spaces: { padding: '8px' },
        },
      optionPanel: { spaces: { padding: '4px' } },
      progressBar:
        {
          borders: { borderColor: '#F7F7F7', borderRadius: '25px', borderWidth: '2px' },
          colors: { background: 'transparent', fill: '#54D1DB', text: '#626262' },
          sizes: { height: '24px', width: '100%' },
        },
      radio:
        {
          radioButton:
            {
              borders: { radius: '50%', width: '1px' },
              colors: { backgroundHover: '#2CB1BC', backgroundChecked: '#54D1DB' },
              sizes: { heights: '16px', widths: '16px' },
              spaces: { top: '4px', bottom: '4px', left: '4px', right: '8px' },
            },
        },
      select:
        {
          select:
            {
              borders: { radius: '4px', width: '1px' },
              boxShadows: { boxShadowFocus: '0 0 4px 0 #2CB1BC' },
              colors:
                {
                  border: '#E1E1E1',
                  borderFocus: '#B1B1B1',
                  caret: '#3B3B3B',
                  placeholder: '#B1B1B1',
                  text: '#7E7E7E',
                  arrow: '#9E9E9E',
                  background: 'transparent',
                  separator: '#E1E1E1',
                },
              sizes:
                {
                  arrowHeight: '5px',
                  arrowWidth: '10px',
                  height: '42px',
                  separatorWidth: '2px',
                  width: '100%',
                },
              spaces:
                {
                  paddingTop: '8px',
                  paddingLeft: '8px',
                  paddingBottom: '8px',
                  paddingRight: '48px',
                },
            },
        },
      smallText:
        {
          colors: { text: '#222222' },
          fonts: { fontFamily: 'Roboto', fontSize: '12px', fontWeight: 400, lineHeight: '1.5em' },
        },
      table:
        {
          borders: { borderWidth: '1px', borderRadius: '6px' },
          colors:
            {
              background: 'transparent',
              backgroundEven: 'transparent',
              backgroundOdd: '#FFFFFF',
              backgroundHover: '#F7F7F7',
              border: '#E1E1E1',
              text: '#9E9E9E',
              headerText: '#9E9E9E',
            },
          spaces: { headerHeight: '32px', lineHeight: '32px', firstChildLeftSpacing: '32px' },
        },
      text:
        {
          normal:
            {
              colors: { text: '#222222' },
              fonts:
                { fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, lineHeight: '1.5em' },
            },
          error:
            {
              colors: { text: '#C52707' },
              fonts:
                { fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, lineHeight: '1.5em' },
            },
          warning:
            {
              colors: { text: '#CB6E17' },
              fonts:
                { fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, lineHeight: '1.5em' },
            },
        },
      textarea:
        {
          textarea:
            {
              borders: { radius: '4px', width: '1px' },
              boxShadows: { boxShadowFocus: '0 0 4px 0 #2CB1BC' },
              colors:
                {
                  border: '#E1E1E1',
                  borderFocus: '#B1B1B1',
                  caret: '#3B3B3B',
                  placeholder: '#B1B1B1',
                  text: '#7E7E7E',
                },
              spaces: { padding: '8px' },
              sizes: { height: '100%', width: '100%' },
            },
        },
    },
}
```
