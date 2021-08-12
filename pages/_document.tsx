import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../components/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper/swiper-bundle.min.css"
          />

          <meta name="title" content="Riju Pramanik | Full Stack Developer" />
          <meta
            name="description"
            content="I'm Riju Pramanik, a full-stack developer and technical consultant based out of India 🇮🇳"
          />

          {/* <!-- Open Graph / Facebook --/> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://riju.co/" />
          <meta
            property="og:title"
            content="Riju Pramanik | Full Stack Developer"
          />
          <meta
            property="og:description"
            content="I'm Riju Pramanik, a full-stack developer and technical consultant based out of India 🇮🇳"
          />
          <meta property="og:image" content="" />

          {/* <!-- Twitter --/> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://riju.co/" />
          <meta
            property="twitter:title"
            content="Riju Pramanik | Full Stack Developer"
          />
          <meta
            property="twitter:description"
            content="I'm Riju Pramanik, a full-stack developer and technical consultant based out of India 🇮🇳"
          />
          <meta property="twitter:image" content="" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
