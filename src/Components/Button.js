import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'

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
            height: 50,
            width: 150,
            borderRadius: '10px',
            padding: 0,
            margin: 1,
            boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
            color: '#505050',
            background: '#F6F7FC',
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
          variant="contained"
          size="large"
          sx={{
            fontSize: 22,
            height: 50,
            width: 150,
            borderRadius: '10px',
            padding: 0,
            margin: 1,
            boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
            color: '#FFFFFF',
            background: '#93A3F3',
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
        <Button />
      </Stack>
    </ThemeProvider>
  )
}
