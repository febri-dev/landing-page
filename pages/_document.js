import Document, { Head, Main, NextScript } from 'next/document'

const pageTitle = 'Griko Nibras - Software developer from Surabaya, ID';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <title>{pageTitle}</title>
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' />
          <meta name='apple-mobile-web-app-title' content={pageTitle} />
          <meta name='application-name' content={pageTitle} />
          <meta name='msapplication-TileColor' content='#ffdd57' />
          <meta name='theme-color' content='#ffdd57' />
          <meta property='og:title' content='Griko Nibras' />
          <meta property='og:description' content='Software developer from Surabaya, ID' />
          <meta property='og:url' content='https://griko.id' />
          <meta property='og:image' content='/preview.png' />
          <meta property='og:type' content='profile' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
