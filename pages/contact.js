import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Get in Touch - Wisdom Coaching Classes</title>
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">This is the Contact Page</h1>
        <p>Contact-Form will come here!!</p>
      </div>
    </>
  );
}
