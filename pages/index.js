import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonial';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';
import { coursesData } from '@/data/coursesData';
import { testimonialsData } from '@/data/testimonialsData';
import { cardsData } from '@/data/cardsData';
import Accordian from '@/components/Accordian';

const Home = props => {
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
        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://www.wisdomcoachingclasses.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wisdom Coaching Classes - Raipur" />
        <meta
          property="og:description"
          content="Wisdom Coaching Classes in Raipur provides Personalized Guidance and Expert Coaching"
        />
        <meta
          property="og:image"
          content="https://wisdomcoachingclasses.com/api/og"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wisdomcoachingclasses.com" />
        <meta
          property="twitter:url"
          content="https://www.wisdomcoachingclasses.com/"
        />
        <meta name="twitter:title" content="Wisdom Coaching Classes - Raipur" />
        <meta
          name="twitter:description"
          content="Wisdom Coaching Classes in Raipur provides Personalized Guidance and Expert Coaching"
        />
        <meta
          name="twitter:image"
          content="https://wisdomcoachingclasses.com/api/og"
        />
      </Head>

      <Header />
      <Hero />
      <Info cards={props.cards} />
      <Courses courses={props.courses} />
      <Testimonials testimonials={props.testimonials} />
      <GetInTouch />
      <Accordian />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const courses = coursesData;
    const testimonials = testimonialsData;
    const cards = cardsData;

    if (!courses || !testimonials || !cards) {
      throw new Error('Failed to fetch data');
    }

    return {
      props: {
        courses: courses,
        testimonials: testimonials,
        cards: cards,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      notFound: true, // Or handle the error in a different way
    };
  }
};

export default Home;
