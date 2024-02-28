import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white flex flex-col md:flex-row justify-between items-center w-[90%] min-h-[90vh] mx-auto py-20 md:pt-0">
      <div className="flex flex-col items-center md:items-start text-center md:text-left basis-3/4">
        <h1 className="text-clampMain text-black font-extrabold mb-6">
          Build Maximum Potential for your Future Success
        </h1>
        <p className="mb-12 text-clampSecond w-[80%]">
          We Deliver Personalized Guidance to Unleash Your Ultimate Potential,
          Empowering Futures Through Expert Coaching
        </p>
        <div className="w-[80%] flex flex-col xs:flex-row items-stretch xs:items-center gap-6">
          <a
            href="#get-in-touch"
            className="bg-blue text-white font-semibold px-5 py-3 rounded-md"
          >
            Get in Touch
          </a>
          <Link href="/about" className="text-black font-semibold rounded-md">
            Know more about Us
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/header-image.svg"
          alt="hero-image"
          width={800}
          height={400}
          className="h-[550px] shrink-0 hidden md:block"
          priority={true}
        />
      </div>
    </section>
  );
}
