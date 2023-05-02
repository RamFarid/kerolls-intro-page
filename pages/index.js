import Head from 'next/head'
import { Inter } from 'next/font/google'
import Container from '@mui/material/Container'
import Header from '@/components/Header'
import IntroducingCard from '@/components/IntroducingCard'
import Actions from '@/components/Actions'
import Links from '@/components/Links'
import IntroducingText from '@/components/IntroducingText'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {
    t,
    i18n: { language, dir },
  } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name='description' content='Kerolls tawfik salon ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className} lang={language} dir={dir(language)}>
        <Header />
        <Container maxWidth='sm'>
          <IntroducingCard />
          <Actions />
          <Links />
          <IntroducingText />
        </Container>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
