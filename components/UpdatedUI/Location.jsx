import { Box, Collapse, IconButton, Link, Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Location() {
  const { t } = useTranslation()
  const [viewMap, setViewMap] = useState(false)
  return (
    <Box maxWidth={'400px'}>
      <Stack direction={'row'}>
        <LocationOnIcon
          color='primary'
          fontSize='small'
          sx={{ marginInlineEnd: 0.5 }}
        />
        <Link
          href='https://goo.gl/maps/35MK7UFuf8V4ZWbu8'
          underline='always'
          target='_blank'
          color={'primary'}
          maxWidth={400}
        >
          {t('address')}
        </Link>
        <IconButton
          onClick={() => setViewMap((p) => !p)}
          sx={{ height: 'fit-content' }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Stack>
      <Collapse in={viewMap}>
        {
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1728.2529396726077!2d31.2484106!3d29.9648884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584718698ae527%3A0x40d869bbdb0b244b!2sKerolls%20Tawfik%20Beauty%20Salon!5e0!3m2!1sar!2seg!4v1742343358671!5m2!1sar!2seg'
            width='400'
            height='200'
            style={{ border: 0, width: '100%' }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        }
      </Collapse>
    </Box>
  )
}

export default Location
