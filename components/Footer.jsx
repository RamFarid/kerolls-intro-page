import { Box, Link, MenuItem, Select, Stack, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

function Footer() {
  const { replace: replaceTo, asPath, pathname } = useRouter()
  const {
    i18n: { language },
  } = useTranslation()

  const handleLanguageChange = (e) => {
    replaceTo(pathname, asPath, {
      locale: e.target.value,
    })
  }
  return (
    <Stack
      direction={'row'}
      sx={{ direction: 'ltr' }}
      mt={3}
      justifyContent={'space-between'}
      px={2}
      mb={2}
      alignItems={'center'}
      bgcolor={'background.card'}
    >
      <Typography fontSize={'13px'} component={'div'}>
        <Typography fontSize={'inherit'}>
          @ 2023 Kerolls {"Tawfik's"} . All rights reserved
        </Typography>
        <Typography fontSize={'inherit'}>
          Designed and Developed by{' '}
          <Link
            href='https://api.whatsapp.com/send?phone=201553706448&text=From%20your%20Website!'
            rel='noopener noreferrer'
            target='_blank'
            underline='hover'
          >
            Ram Farid
          </Link>
        </Typography>
      </Typography>
      <Select value={language} onChange={handleLanguageChange} size='small'>
        <MenuItem value='en'>English</MenuItem>
        <MenuItem value='ar'>العربية</MenuItem>
      </Select>
    </Stack>
  )
}

export default Footer
