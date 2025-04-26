import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  lang?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "PENN.L.ZHOU | Code & Create",
  description = "pp3ng - 周罗鹏的个人网站 - 探索技术与创意的交汇点。分享系统架构、摄影作品与技术见解，记录持续学习与成长的旅程。",
  image = "https://Pp3ng.github.io/photos/my_photo.jpg",
  url = "https://Pp3ng.github.io",
  type = "website",
  lang = "en",
}) => {
  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Basic metadata */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Penn.L.Zhou" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/photos/icon.ico" type="image/x-icon" />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* External CSS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/devicon@2.14.0/devicon.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      />
    </Helmet>
  );
};

export default SEO;
