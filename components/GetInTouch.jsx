import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function GetInTouch() {
  return (
    <section className="bg-white" id="get-in-touch">
      <div className="bg-white w-[90%] mx-auto flex sm:flex-row flex-col justify-between items-center sm:gap-12 xs:gap-6 gap-0 py-8 px-8 text-center sm:text-left">
        <div className="flex flex-col gap-9">
          <h2 className="sm:text-5xl text-4xl font-bold text-black flex flex-col gap-2">
            <span className="block leading-tight">Rolling Admissions</span>
            <span className="block">Now Open</span>
          </h2>
          <p className="text-xl">Get in touch with us to discuss it:</p>
          <a
            href={`tel:+918839842061`}
            className="flex gap-2 justify-center items-center sm:mx-0 mx-auto text-blue border-2 border-blue px-4 py-3 w-60"
          >
            <FontAwesomeIcon icon={faPhone} />
            <span className="underline text-lg font-medium">
              +91 8839842061
            </span>
          </a>
        </div>

        <div>
          <Image
            src="/admission.svg"
            width={600}
            height={400}
            className="h-[400px]"
            alt="admissions-rolling-out-image"
          />
        </div>
      </div>
    </section>
  );
}
