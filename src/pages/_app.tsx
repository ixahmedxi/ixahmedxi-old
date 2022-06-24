import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Ahmed Elsakaan - Frontend Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;