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
      </Head>

      <Header />
      <Hero />
      <Info cards={props.cards} />
      <Courses courses={props.courses} />
      <Testimonials testimonials={props.testimonials} />
      <GetInTouch />
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
