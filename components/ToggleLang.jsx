import { Button, IconButton, MenuItem, Select } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageIcon from '@mui/icons-material/Language'

function ToggleLang() {
  const { replace: replaceTo, asPath, pathname } = useRouter()
  const {
    i18n: { language },
  } = useTranslation()

  const handleLanguageChange = () => {
    replaceTo(pathname, asPath, {
      locale: language === 'en' ? 'ar' : 'en',
    })
  }

  return (
    <Button
      startIcon={<LanguageIcon />}
      onClick={handleLanguageChange}
      size='small'
      color='inherit'
    >
      {language === 'en' ? 'ع' : 'En'}
    </Button>
  )
}

export default ToggleLang
