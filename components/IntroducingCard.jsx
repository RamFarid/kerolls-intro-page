import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import { useTranslation } from 'next-i18next'

const styles = {
  card: {
    marginX: 'auto',
    borderRadius: 3,
    flexDirection: 'row',
    display: 'flex',
    marginY: 2,
    minHeight: '140px',
    border: '#fff 1px solid',
  },
  cardMedia: {
    backgroundSize: '100% 100%',
    // width: '172px',
    // height: '260px',
    width: '174.43px',
    height: '213px',
  },
}

function IntroducingCard() {
  const { t } = useTranslation()
  return (
    <Card sx={styles.card}>
      <CardMedia
        image='/imgs/personal-photo.jpg'
        title='Kerolls Tawfik'
        sx={styles.cardMedia}
      />
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography gutterBottom variant='h6' component='h2'>
          {t('card.title')}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {t('card.subtitle')}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default IntroducingCard
