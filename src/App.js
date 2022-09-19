import Main from './Components/Main'

import { useState } from 'react'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import { Navbar } from './Components/Navbar'
import { grey } from '@mui/material/colors'
import { Footer } from './Components/Footer'

function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      mode: mode,
      ...(mode === 'light' && {
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }),
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar mode={mode} setMode={setMode} />
        <Main />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
