import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:url" content="https://promo.studlog.ru" />
        <meta property="og:title" content="Promo Stud.log" />
        <meta property="og:description" content="Студенческий портал" />
        <meta property="og:image" content="/android-chrome-192x192.png" />
        <meta property="og:site_name" content="Stud.log" />
        <meta name="description" content="Студенческий портал" />
        <meta name="keywords" content="сайт, студент, приложение, портал" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/favicon-16x16.png" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="sitemap" content="/sitemap.xml" />
      </Head>
      <body>
        <noscript>
          <div
            dangerouslySetInnerHTML={{
              __html: `<img src="https://mc.yandex.ru/watch/92765014" style="position:absolute; left:-9999px;" alt="" />`,
            }}
          ></div>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
