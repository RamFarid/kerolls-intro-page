import React from 'react'
import { Box } from '@mui/material'

const ImageOverlay = ({ src, alt }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        height: '300px', // Adjust height as needed
        overflow: 'hidden',
        zIndex: -1,
        mx: 'auto',
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={(t) => ({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, transparent -100%, ${t.palette.background.default})`,
        })}
      />
    </Box>
  )
}

export default ImageOverlay
