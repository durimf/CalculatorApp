import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export default function Buttons(props) {
  const buttons = () => {
    if (props.type === 'number') {
      return (
        <Button
          onClick={(event) =>
            props.handleClick(props.id, props.value, props.type, event)
          }
          variant="contained"
          size="large"
          sx={{
            fontSize: 22,
            minHeight: 80,
            maxHeight: 80,
            minWidth: 83,
            maxWidth: 83,
            color: 'text.primary',
            backgroundColor: 'background.default',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              textDecoration: 'none',
            },
          }}
        >
          {props.value}
        </Button>
      )
    } else if (props.type === 'equals') {
      return (
        <Button
          onClick={(event) =>
            props.handleClick(props.id, props.value, props.type, event)
          }
          variant="contained"
          sx={{
            fontSize: 22,
            minHeight: 81,
            maxHeight: 81,
            minWidth: 284,
            maxWidth: 284,
            color: 'text.primary',
            backgroundColor: 'background.default',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              textDecoration: 'none',
            },
          }}
        >
          {props.value}
        </Button>
      )
    } else {
      return (
        <Button
          onClick={(event) =>
            props.handleClick(props.id, props.value, props.type, event)
          }
          variant="outlined"
          sx={{
            fontSize: 22,
            minHeight: 80,
            maxHeight: 80,
            minWidth: 83,
            maxWidth: 83,
            color: 'background.default',
            backgroundColor: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.77)',
              textDecoration: 'none',
            },
          }}
        >
          {props.value}
        </Button>
      )
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row">
        {buttons()}
        <Button />
      </Stack>
    </ThemeProvider>
  )
}
