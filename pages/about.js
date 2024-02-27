import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>About US - Wisdom Coaching Classes</title>
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">This is the About Us Page</h1>
      </div>
    </>
  );
}
