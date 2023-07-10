import Head from 'next/head'
import {Header} from '../components/Header'
import {Main} from '../components/Main';
import {Banner} from '../components/Banner';
import {MainNews} from '../components/MainNews'
import { Cases } from '../components/Cases';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Oliva Digital</title>
        <meta name="description" content="Olivas Digital" />
        <meta name="google-site-verification" content="VOiFqn7CnvjcGGa_z33YEMowDlEh5yAkhh6364CjRvI" />
      </Head>
      <Header />
      <Banner />
      <Main />
      <MainNews />
      <Cases />
      <Footer />
    </>
  )
}
