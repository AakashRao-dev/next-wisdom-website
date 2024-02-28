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
      <section className="bg-white min-h-screen flex justify-center flex-col lg:flex-row items-center relative p-4">
        <Form />
        <div className="aspect-video rounded">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.01520230535!2d81.66422358194303!3d21.27086581283316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e78a3972d979%3A0x61cbc983d1fc74c6!2sAnant%20Vihar%20Colony%2C%20Dubey%20Colony%2C%20Mowa%2C%20Raipur%2C%20Chhattisgarh%20492014!5e0!3m2!1sen!2sin!4v1709136235288!5m2!1sen!2sin"
            width="500"
            height="600"
            style={{ border: 0 }}
            className="overflow-hidden"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}
