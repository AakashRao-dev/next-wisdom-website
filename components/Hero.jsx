import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Lottie from 'react-lottie';
import * as animationData from '../public/launch.json';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  const hideDiv = () => {
    setIsVisible(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="bg-white">
      <div className="bg-white flex flex-col lg:flex-row justify-between items-center w-[90%] min-h-[70vh] lg:min-h-[90vh] mx-auto py-20 md:pt-12 lg:pt-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left basis-3/4">
          <h1 className="text-clampMain text-black font-extrabold mb-6">
            Build Maximum Potential for your Future Success
          </h1>
          <p className="mb-12 text-clampSecond w-[80%]">
            Wisdom Classes offers tailored guidance to unlock your ultimate
            potential, empowering you to shape a brighter future through expert
            coaching
          </p>
          <div className="w-[80%] flex justify-center lg:justify-start flex-col xs:flex-row items-stretch xs:items-center gap-6">
            <a
              href="#get-in-touch"
              className="bg-blue text-white font-semibold px-5 py-3 rounded-md"
            >
              Get in Touch
            </a>
            <Link
              href="#courses"
              className="text-black font-semibold rounded-md"
            >
              Know more about Us
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Lottie options={defaultOptions} className="h-[550px] shrink-0" />
        </div>
      </div>

      {isVisible && (
        <div className="bg-blueDark p-2 text-white">
          <div className="w-[89%] mx-auto p-4 md:p-3 flex flex-col md:flex-row gap-4 justify-between items-center overflow-hidden relative">
            <p className="font-semibold relative animate-move flex items-center gap-8 text-nowrap">
              <span>
                Crash course for 10th and 12th Maths, Concept building classes
                for 6 th to 8th. New session begins from April 1st 2024
              </span>
              <span>
                <FontAwesomeIcon icon={faAsterisk} className="mr-1" />
                <FontAwesomeIcon icon={faAsterisk} />
              </span>
              <span>9 to 12 Crash Course Available</span>
            </p>

            <button
              className="bg-white px-2 py-1 text-sm text-black absolute right-0"
              style={{ borderRadius: '100%' }}
              onClick={hideDiv}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
