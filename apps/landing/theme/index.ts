import { extendTheme } from '@chakra-ui/react'
import { theme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

import '@fontsource/comfortaa/latin.css'

const styles = {
  global: (props: any) => ({
    body: {
      color: 'black',
      bg: 'white',
    }
  }),
}

export default extendTheme(
  {
    config: {      
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    fonts:{
      heading: 'comfortaa, sans-serif',
      body: 'comfortaa, sans-serif',
    },
    colors:{
      urbanik:{
        black:'#001c1b',
        blue:'#013953',
        dark:{
          light: '#35394a',
          medium:'#1F2336',
        },
        gray: {
          dark: '#545454',
          light: '#D4D4D4',
          medium:'#686868',
        },
        green: '#015351',
        orange: '#FD7D00',
        pale: '#E9E9EA',
        paleBlue:'#52a3a21A',
        paleGreen:'#01535199',
        paleOrange:'#ffBB79',
        white: '#f5f5f5',
        
        
        

        100:'#D4D4D4',
        300:'#545454',
        400: '#ffBB79',
        500: '#FD7D00',
        600:'#ffBB79',
        700:'#013953',
        800:'#001c1b',
        900:'#E9E9EA',

        
      },
      urbanikGreen:{        
        100:'#D4D4D4',
        300:'#545454',
        400: '#01535199',
        500: '#015351',
        600:'#01535199',
        700:'#013953',
        800:'#001c1b',
        900:'#E9E9EA',
      },
      urbanikDashboard:{
        100:'#D4D4D4',
        300:'#545454',
        400: '#01535199',
        500: '#35394a',
        600:'#01535199',
        700:'#013953',
        800:'#001c1b',
        900:'#E9E9EA',
      }
    },
    shadows:{
      color: '#FD7D00'
    },
    styles,
    fontSizes,
    components,
  },
  theme
)
