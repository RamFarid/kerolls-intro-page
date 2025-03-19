import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='title'
          content='Kerolls Tawfik | Professional Hairstylist in Cairo'
        />
        <meta
          name='description'
          content='Discover the art of hairstyling with Kerolls Tawfik, a top hairstylist in Cairo specializing in bridal hair and elegant transformations. Book your appointment today!'
        />
        <meta
          name='keywords'
          content='Kerolls Tawfik, hairstylist, bridal hair, hair salon, Cairo, Egypt, professional hairstyling, wedding hair'
        />
        <meta name='author' content='Kerolls Tawfik' />
        <meta name='robots' content='index, follow' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
