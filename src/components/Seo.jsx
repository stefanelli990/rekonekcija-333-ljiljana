// Seo.jsx

import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, keywords, image, url, author }) {
  return (
    <Helmet>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rekonekcija 333 Ljiljana" />
  
  </Helmet>
  )
}