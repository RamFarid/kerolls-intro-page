import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ButtonGroup from '@mui/material/ButtonGroup'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Stack } from '@mui/material'
import Contacts from './Conntacts/Contacts'

const styles = {
  btnGroup: {
    overflowX: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
    marginY: 3.2,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  btns: {
    transition: '250ms ease all',
    padding: '12px',
    width: '57px',
    height: '57px',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  instaIcon: {
    '&:hover': {
      color: '#F56040',
    },
    borderRadius: '50%',
  },
  fbIcon: {
    '&:hover': { color: '#3b5998' },
  },
  waIcon: {
    '&:hover': { color: '#25D366' },
  },
  telegramIcon: {
    '&:hover': { color: '#0088cc' },
  },
  mailIcon: {
    '&:hover': { color: '#E53935' },
  },
}

function Links() {
  return (
    <Stack>
      <Contacts />
      {/* <BrideContacts /> */}
    </Stack>
  )
}

export default Links
// <ButtonGroup size='large' sx={styles.btnGroup}>
//   <Tooltip title='Facebook' placement='top' arrow>
//     <IconButton
//       sx={{ ...styles.btns, ...styles.fbIcon }}
//       target='_blank'
//       rel='noreferrer noopener'
//       href='https://www.facebook.com/kerolls.tawfik'
//     >
//       <FacebookRoundedIcon sx={{ ...styles.icon }} />
//     </IconButton>
//   </Tooltip>
//   <Tooltip title='WhatsApp' placement='top' arrow>
//     <IconButton
//       target='_blank'
//       rel='noreferrer noopener'
//       sx={{ ...styles.btns, ...styles.waIcon }}
//       href='https://api.whatsapp.com/send?phone=201010820108&text=From%20your%20Website!'
//     >
//       <WhatsAppIcon sx={{ ...styles.icon }} />
//     </IconButton>
//   </Tooltip>
//   <Tooltip title='Instagram' placement='top' arrow>
//     <IconButton
//       sx={{ ...styles.btns, ...styles.instaIcon }}
//       target='_blank'
//       rel='noreferrer noopener'
//       href='https://www.instagram.com/kerolls_tawfik/'
//     >
//       <InstagramIcon sx={{ ...styles.icon }} />
//     </IconButton>
//   </Tooltip>
//   <Tooltip title='Telegram' placement='top' arrow>
//     <IconButton
//       sx={{ ...styles.btns, ...styles.telegramIcon }}
//       target='_blank'
//       rel='noreferrer noopener'
//       href='https://t.me/kerolls_Tawfik'
//     >
//       <TelegramIcon
//         sx={{
//           ...styles.icon,
//         }}
//       />
//     </IconButton>
//   </Tooltip>
//   <Tooltip title='Location' placement='top' arrow>
//     <IconButton
//       sx={{ ...styles.btns, ...styles.waIcon }}
//       href='https://goo.gl/maps/35MK7UFuf8V4ZWbu8'
//       target='_blank'
//       rel='noreferrer noopener'
//     >
//       <LocationOnIcon sx={styles.icon} />
//     </IconButton>
//   </Tooltip>
// </ButtonGroup>
