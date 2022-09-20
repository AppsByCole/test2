import React from 'react'
import {
  Box,
  Paper, 
} from '@mui/material'
import StopIcon from '@mui/icons-material/Stop'

export default function HomeScreen() {
  return (
    <Box sx={styles.app}>
      hi
    </Box>
  )
}
 
const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  grid:{
    backgroundColor: 'blue',
    marginTop: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    // maxWidth: 500,
  },
  paper:{
    margin: 1,
    textAlign: 'center',
  },
  footer:{
    
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
}
