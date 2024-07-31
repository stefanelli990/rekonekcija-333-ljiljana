import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, keywords, image, url }) {
  return (
    <Helmet>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    {/* Open Graph tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content="A description of the image" />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Rekonekcija 333 Ljiljana" />
  </Helmet>
  )
}