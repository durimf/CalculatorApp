import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'

export default function Buttons(props) {
  const buttons = () => {
    if (
      props.id === 1 ||
      props.id === 2 ||
      props.id === 3 ||
      props.id === 4 ||
      props.id === 8 ||
      props.id === 12 ||
      props.id === 16 ||
      props.id === 20
    ) {
      return (
        <Button
          onClick={props.handleClick}
          variant="contained"
          size="large"
          sx={{
            fontSize: 25,
            height: 50,
            width: 180,
            borderRadius: '10px',
            padding: 0,
            margin: 0,
            boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
            backgroundColor: '#93A3F3',
          }}
        >
          {props.value}
        </Button>
      )
    } else {
      return (
        <Button
          onClick={() => props.handleClick(props.value)}
          className="buttonOnHover"
          variant="contained"
          size="large"
          sx={{
            fontSize: 25,
            height: 50,
            width: 180,
            borderRadius: '10px',
            padding: 0,
            margin: 0,
            boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
          }}
        >
          {props.value}
        </Button>
      )
    }
  }

  let isTrue = false
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="row">
        {buttons()}
        {/* <Button
          className="buttonOnHover"
          variant="contained"
          size="large"
          sx={{
            height: 50,
            width: 200,
            borderRadius: '10px',
            padding: 0,
            margin: 0,
            boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
          }}
        >
          {props.value}
        </Button> */}
      </Stack>
    </ThemeProvider>
  )
}
