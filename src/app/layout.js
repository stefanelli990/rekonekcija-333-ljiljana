import "./globals.css"
import Head from 'next/head'

export const metadata = {
  title: "Rekonekcija 333 Ljiljana | Otkrijte Moć Rekonekcijskog Isceljenja",
  description: "Iskusite moć rekonekcijskog isceljivanja. Osetite holističko zdravlje i duhovno poravnanje uz naše stručne praktičare. Rezervišite seansu već danas.",
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

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="rekonekcijsko isceljivanje, lična rekonekcija, isceljenje, rekonekcija, holističko zdravlje, duhovno poravnanje, isceliteljske usluge" />
        <meta name="author" content="Ljiljana Medović" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://rekonekcija333ljiljana.com/" />
        <meta property="og:type" content="website" />

      </Head>
      <body>{children}</body>
    </html>
  );
}
