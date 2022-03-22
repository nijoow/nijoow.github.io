import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";
import { UserProvider } from "../context/context";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
