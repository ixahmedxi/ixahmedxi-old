import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Ahmed Elsakaan - Frontend Web Developer</title>
      </Head>
      <main className="max-w-[960px] mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
