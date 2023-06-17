import { Button, Stack } from '@mui/material'
import { useTranslation } from 'next-i18next'

const styles = {
  btnsAction: {
    display: 'block',
  },
  btnPrimary: {
    flex: 4,
    textAlign: 'center',
  },
  btnSecondary: {
    textAlign: 'center',
    flex: 2,
    fontSize: '10px',
    paddingX: 2,
    paddingY: 1,
    backgroundColor: (theme) => theme.palette.grey['900'],
    color: (theme) => theme.palette.text.secondary,
  },
}

function Actions() {
  const { t } = useTranslation()
  return (
    <Stack flexDirection={'row'} alignItems={'center'} gap={3}>
      <Button
        variant='contained'
        color='primary'
        sx={{ ...styles.btnsAction, ...styles.btnPrimary }}
        href='https://api.whatsapp.com/send?phone=201010820108&text=From%20your%20Website!'
        target='_blank'
        rel='noreferrer noopener'
      >
        {t('btns.primary')}
      </Button>
    </Stack>
  )
}

export default Actions
