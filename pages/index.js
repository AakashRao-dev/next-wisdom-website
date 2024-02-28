import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonial';
import GetInTouch from '@/components/GetInTouch';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Wisdom Coaching Classes - Raipur</title>
        <meta
          name="description"
          content="Wisdom Coaching Classes in Raipur provides Personalized Guidance and Expert Coaching"
        />
      </Head>

      <Header />
      <Hero />
      <Info />
      <Courses />
      <Testimonials />
      <GetInTouch />
    </>
  );
}
