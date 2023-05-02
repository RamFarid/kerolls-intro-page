import { Alert, AlertTitle, Link, Typography } from '@mui/material'
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded'
import React from 'react'
import { useTranslation } from 'next-i18next'

function IntroducingText() {
  const { t } = useTranslation()
  return (
    <>
      <Typography display={'inline'}>{t('introducingText')} </Typography>
      <Link
        target='_blank'
        rel='noreferrer noopener'
        href='https://goo.gl/maps/35MK7UFuf8V4ZWbu8'
        marginY={1}
        underline='always'
        sx={{ cursor: 'pointer' }}
        // color={'#fff'}
      >
        {t('address')}
      </Link>
      <Alert
        sx={{
          marginY: 1.6,
        }}
        variant='outlined'
        color='error'
        icon={<LocalOfferRoundedIcon color='#FF0000' />}
      >
        <AlertTitle>{t('offer.title')}</AlertTitle>
        <Typography variant='body1'>
          <span dangerouslySetInnerHTML={{ __html: t('offer.body') }} />
        </Typography>
      </Alert>
    </>
  )
}

export default IntroducingText
