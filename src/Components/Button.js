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
            minHeight: {
              xs: 60,
              sm: 65,
              md: 80,
            },
            maxHeight: {
              xs: 60,
              sm: 65,
              md: 80,
            },
            minWidth: {
              xs: 63,
              sm: 68,
              md: 83,
            },
            maxWidth: {
              xs: 63,
              sm: 68,
              md: 83,
            },

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
            minHeight: {
              xs: 60,
              sm: 65,
              md: 81,
            },
            maxHeight: {
              xs: 60,
              sm: 65,
              md: 81,
            },
            minWidth: {
              xs: 233,
              sm: 268,
              md: 334,
            },
            maxWidth: {
              xs: 233,
              sm: 268,
              md: 334,
            },

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
            minHeight: {
              xs: 60,
              sm: 65,
              md: 80,
            },
            maxHeight: {
              xs: 60,
              sm: 65,
              md: 80,
            },
            minWidth: {
              xs: 63,
              sm: 68,
              md: 83,
            },
            maxWidth: {
              xs: 63,
              sm: 68,
              md: 83,
            },
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
