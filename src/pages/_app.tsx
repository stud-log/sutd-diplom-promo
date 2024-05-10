import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Stud.log</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </Head>
      <Component {...pageProps} />
      
    </>
  );
}
export default MyApp;
