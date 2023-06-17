import { Stack } from '@mui/material'
import Contacts from './Conntacts/Contacts'

function Links() {
  return (
    <Stack>
      <Contacts />
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
