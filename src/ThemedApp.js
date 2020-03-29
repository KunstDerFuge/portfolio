import React from 'react'
import { useState } from 'react'
import App from './App'
import { ThemeProvider } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core'

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#444',
      background: '#fff',
      contrastText: '#000',
      purpleText: '#907',
      paper: '#fff',
      bodyLink: '#008'
    }
  },
  textDecoration: {
    purpleText: 'underline dotted'
  }
})

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#444',
      background: '#222',
      contrastText: '#fff',
      purpleText: '#e0a',
      paper: '#333',
      bodyLink: '#e0a'
    }
  },
  textDecoration: {
    purpleText: ''
  }
})

function ThemedApp () {
  const [useDarkTheme, setUseDarkTheme] = React.useState(false)

  return (
    <div>
      <ThemeProvider theme={ useDarkTheme ? darkTheme : lightTheme }>
        <App darkThemeSwitch={() => setUseDarkTheme(!useDarkTheme)} />
      </ThemeProvider>
    </div>
  )
}

export default ThemedApp
