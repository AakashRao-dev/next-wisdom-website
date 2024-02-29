import Head from 'next/head';
import Form from '@/components/Form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Maps from '@/components/Maps';

export default function Contact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Get in Touch - Wisdom Coaching Classes</title>
      </Head>

      <Header />
      <section className="bg-white min-h-screen flex justify-center flex-col lg:flex-row items-center relative px-4 py-16">
        <Form />
        <Maps />
      </section>
      <Footer />
    </>
  );
}
