import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const theme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      light: '#979797',
      main: '#696969',
      dark: '#3e3e3e',
    },
    secondary: {
      light: '#f05545',
      main: '#b71c1c',
      dark: '#7f0000',
    },
    text:{
      secondary: '#B3D0D4'
    },
    spacing: 2,
    divider: '#ffffff',
  },
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
)
