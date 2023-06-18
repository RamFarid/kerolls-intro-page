import Head from 'next/head'
import { Inter } from 'next/font/google'
import Container from '@mui/material/Container'
import IntroducingCard from '@/components/IntroducingCard'
import Links from '@/components/Links'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name='description' content='Kerolls tawfik salon ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={inter.className}>
        <Container maxWidth='sm'>
          <IntroducingCard />
          <Links />
        </Container>
        <Footer />
      </div>
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
