// layouts.js

import "./globals.css"
import Head from 'next/head'

export const metadata = {
  title: "Rekonekcija 333 Ljiljana | Otkrijte Moć Rekonekcijskog Isceljenja",
  description: "Otkrijte transformativnu moć rekonekcijskog isceljivanja. Iskusite holističko zdravlje i duhovno poravnanje uz naše stručne praktičare. Istražite naše usluge, recenzije klijenata i rezervišite svoju seansu već danas za obnovljeni osećaj ravnoteže i harmonije.",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="rekonekcijsko isceljivanje, lična rekonekcija, isceljenje, rekonekcija, holističko zdravlje, duhovno poravnanje, isceliteljske usluge" />
        <meta name="author" content="Ljiljana Medović" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph tags for social media sharing */}
        <meta key="og:title" property="og:title" content={metadata.title} />
        <meta key="og:description" property="og:description" content={metadata.description} />
        <meta key="og:image" property="og:image" content="/og-image.jpg" />
        <meta key="og:url" property="og:url" content="https://rekonekcija333ljiljana.com/" />
        <meta key="og:type" property="og:type" content="website" />

      </Head>
      <body>{children}</body>
    </html>
  );
}
