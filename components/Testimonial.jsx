import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-white flex flex-col justify-center items-center gap-12 py-16 px-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-black">Student Testimonials</h2>

      <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
