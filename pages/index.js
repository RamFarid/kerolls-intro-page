import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '@/components/Footer'
import BeautySalonPage from '@/components/UpdatedUI/BeautySalonPage'

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
      <div>
        <BeautySalonPage />
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
