import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function Accordian() {
  return (
    <section className="bg-blueDark flex flex-col justify-center items-center gap-16 pt-16 pb-32 px-8 text-white">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

      <Accordion type="multiple" collapsible="true" className="w-full md:w-1/2">
        <AccordionItem value="item-1" id="about">
          <AccordionTrigger className="text-lg md:text-2xl">
            About Us
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base leading-6 md:leading-8">
            Wisdom Coaching Classes is dedicated to unleashing your full
            potential through personalized guidance and coaching from classes
            6th to 12th across various subjects. With experienced faculty,
            backup classes, weekly tests, and online support, we empower
            students to shape a brighter future. From comprehensive coverage of
            all subjects for classes 6th to 8th to specialized focus in
            Mathematics, Science, Social Sciences, Sanskrit, and beyond for
            higher classes, unleash your full potential with Wisdom Coaching
            Classes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg md:text-2xl">
            What Makes Us Different?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base leading-6 md:leading-8">
            What sets us apart at Wisdom Coaching Classes is our commitment to
            personalized excellence. We understand that every student has unique
            learning needs and aspirations, which is why we offer tailored
            guidance and support to unlock their full potential. With
            comprehensive subject coverage, backup classes, and a range of
            support services including weekly tests, test series, and online
            assistance, we ensure that each student receives the individual
            attention and resources they need to thrive academically.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg md:text-2xl">
            Why Choose Us?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base leading-6 md:leading-8">
            Choose Wisdom Coaching Classes for an unparalleled educational
            journey tailored to your needs. With a dedicated team of experienced
            faculty, comprehensive subject coverage, and a commitment to student
            success, we stand out as your ideal partner in academic excellence.
            At Wisdom Coaching Classes, we don&apos;t just teach; we inspire and
            empower you to achieve your academic goals and shape a brighter
            future. Choose us and unlock your full potential today.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Accordian;
