import Head from 'next/head';
import Form from '@/components/Form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Get in Touch - Wisdom Coaching Classes</title>
      </Head>

      <Header />
      <section className="bg-white min-h-[80vh] flex justify-center items-center relative p-4">
        <Form />
      </section>
      <Footer />
    </>
  );
}
