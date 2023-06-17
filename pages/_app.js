import React, { useEffect, useState } from 'react'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { appWithTranslation, useTranslation } from 'next-i18next'
import createEmotionCache from '../utility/createEmotionCach'
import '@/styles/globals.css'
import darkTheme from '@/styles/theme/darkTheme'
import { ThemeProvider } from '@mui/material'
import { useRouter } from 'next/router'
import Loader from '@/components/Loader'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  const {
    i18n: { language },
  } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const errorHanlder = (e) => {
      console.log(e)
    }
    const changeRouteStartHandler = () => {
      console.log('Route start')
      setIsLoading(true)
    }
    const changeRouteEndHandler = () => {
      console.log('Route end')
      setIsLoading(false)
    }
    router.events.on('routeChangeError', errorHanlder)
    router.events.on('routeChangeStart', changeRouteStartHandler)
    router.events.on('routeChangeComplete', changeRouteEndHandler)
    return () => {
      router.events.off('routeChangeError', errorHanlder)
      router.events.off('routeChangeStart', changeRouteStartHandler)
      router.events.off('routeChangeComplete', changeRouteEndHandler)
    }
  }, [router])
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {isLoading && <Loader />}
        <main lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
