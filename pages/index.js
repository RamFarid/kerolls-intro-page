import Head from 'next/head'
import { Noto_Naskh_Arabic } from 'next/font/google'
import Container from '@mui/material/Container'
import IntroducingCard from '@/components/IntroducingCard'
import Links from '@/components/Links'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@emotion/react'
import theme from '@/lib/theme'

const noto = Noto_Naskh_Arabic({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation()
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{t('title')}</title>
        <meta name='description' content='Kerolls tawfik salon ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={noto.className}>
        <Container maxWidth='sm'>
          <IntroducingCard />
          <Links />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
