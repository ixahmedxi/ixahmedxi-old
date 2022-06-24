import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Ahmed Elsakaan - Frontend Web Developer</title>
      </Head>
      <main className="container mx-auto px-6 md:px-12">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
