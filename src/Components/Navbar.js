import { React, useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import darkLogo from '../images/logo-white.png'
import lightLogo from '../images/logo-black.png'
import { Stack } from '@mui/system'
import { Icon, Link, List, ListItem } from '@mui/material'
import {
  Block,
  DarkModeOutlined,
  GitHub,
  LightMode,
  LinkedIn,
  Twitter,
} from '@mui/icons-material'
import styled from '@emotion/styled'
import { green, red } from '@mui/material/colors'

export const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false)
  const pages = ['Home', 'Tech Stack', 'Projects', 'Contact']

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-around',
    gap: 10,
    bgcolor: 'background.default',
    color: 'text.secondary',
  })

  return (
    <AppBar
      position="sticky"
      sx={{
        marginBottom: {
          xs: 10,
          md: 20,
        },
      }}
    >
      <StyledToolbar disableGutters>
        <Box>
          <Link href="/" underline="none">
            <Avatar
              src={mode === 'dark' ? darkLogo : lightLogo}
              sx={{ height: 100, width: 180, marginLeft: 1 }}
            />
          </Link>
        </Box>

        {/* Container md display */}
        <Box sx={{ m: 2, display: { xs: 'none', md: 'flex' } }}>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://github.com/durimf"
            sx={{ display: 'block', minWidth: 15, color: 'text.primary' }}
          >
            <GitHub />
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/durimfetahaj/"
            sx={{ display: 'block', minWidth: 15, color: 'text.primary' }}
          >
            <LinkedIn />
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/FetahajDurim"
            sx={{ display: 'block', minWidth: 15, color: 'text.primary' }}
          >
            <Twitter />
          </Button>

          {/* Start of toggle lights box */}
          <Box>
            {mode === 'dark' ? (
              <Button
                onClick={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
                sx={{ minWidth: 10, mb: 1, color: 'text.primary' }}
              >
                <Tooltip title="Turn on the light">
                  <LightMode />
                </Tooltip>
              </Button>
            ) : (
              <Button
                onClick={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
                sx={{ minWidth: 10, mb: 1, color: 'text.primary' }}
              >
                <Tooltip title="Turn off the light">
                  <DarkModeOutlined />
                </Tooltip>
              </Button>
            )}
          </Box>
          {/* End of toggle lights box */}
        </Box>
        {/* End of Container md display */}
      </StyledToolbar>
    </AppBar>
  )
}
