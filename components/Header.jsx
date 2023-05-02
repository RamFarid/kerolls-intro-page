import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React, { useCallback } from 'react'
import myLogo from '@/public/imgs/FINALLY_LOGO21.png'
import { useTranslation } from 'next-i18next'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useRouter } from 'next/router'
import { Stack } from '@mui/material'

const styles = {
  headerContainer: {
    marginY: 1,
  },
  header: {
    top: 0,
  },
}

function Header() {
  const { replace: replaceTo, asPath, pathname } = useRouter()
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const handleLanguageChange = (e) => {
    replaceTo(pathname, asPath, {
      locale: e.target.value,
    })
  }

  return (
    <AppBar position='sticky' sx={styles.header}>
      <Toolbar sx={styles.headerContainer}>
        <Stack
          flex={{
            xs: 1,
            md: 'unset',
          }}
        >
          <Image
            src={myLogo}
            alt='Kerolls hairstylist salon'
            width={150} // 384-269
            height={100}
          />
        </Stack>
        <Typography
          variant='h4'
          component={'h1'}
          flex={1}
          display={{
            xs: 'none',
            md: 'block',
          }}
        >
          {t('title')}
        </Typography>
        <Select value={language} onChange={handleLanguageChange} size='small'>
          <MenuItem value='en'>English</MenuItem>
          <MenuItem value='ar'>العربية</MenuItem>
        </Select>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}
//  "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"
export default Header
