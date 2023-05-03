import React from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
function Loader() {
  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: (theme) => theme.palette.background.portal,
        inset: 0,
        zIndex: (theme) => theme.zIndex.modal,
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loader
