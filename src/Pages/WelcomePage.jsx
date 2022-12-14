import React from 'react'
import WelcomeScreen from '../Componets/WelcomeScreen'
import { Grid } from '@mui/material'
import { Link } from '@mui/material'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Link as RouterLink } from 'react-router-dom'
import { Typography } from '@mui/material'

const WelcomePage = () => {
  return (
      <WelcomeScreen>
        <Grid container justifyContent="center" direction="column" className="full">
            <div className="highlight">
            <Grid item container xs={12} justifyContent="center" alignItems="center">
              <Grid item>
                  <IconContext.Provider value={{ size:"6em" }}>
                      <WiDaySunny />
                  </IconContext.Provider>
              </Grid>
              <Grid item container direction="column" justifyContent="center" alignItems="center">
                  <Typography variant="h4" color="inherit">
                      Weather App
                  </Typography>
                  <Link color="inherit" aria-label="menu" component={RouterLink} to="/main">
                      Login
                  </Link>
              </Grid>
          </Grid>
          </div>
        </Grid>
      </WelcomeScreen>

  )
}

export default WelcomePage