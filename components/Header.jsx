import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faEnvelope,
  faPhone,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <header>
      <div className="bg-blue p-3">
        <div className="w-[90%] mx-auto flex gap-6 relative">
          <p className="ml-auto">
            <a
              href={`tel:+918839842061`}
              className="flex gap-2 items-center text-white"
            >
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 8839842061</span>
            </a>
          </p>
          <p>
            <a
              href={`mailto:wisdomclasses@gmail.com`}
              className="flex gap-2 items-center text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>wisdomclasses@gmail.com</span>
            </a>
          </p>
        </div>
      </div>

      <nav className="shadow-lg p-4">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <Link href="/" className="text-blue text-2xl">
            LOGO
          </Link>

          <ul className="md:flex gap-12 ml-auto hidden">
            <li>
              <Link href="/" className="hover:text-blue">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#courses" className="hover:text-blue">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-blue">
                Study Materials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="bg-blue text-white font-semibold px-5 py-2 rounded-md"
              >
                Login
              </Link>
            </li>
          </ul>

          <ul
            className={`${
              showNav ? 'flex' : 'hidden'
            } flex-col justify-center items-center gap-12 ml-auto absolute bg-black text-white top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 w-full h-full text-xl`}
          >
            <li>
              <Link href="/" className="hover:text-blue">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#courses" className="hover:text-blue">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-blue">
                Study Materials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="bg-blue text-white font-semibold px-5 py-2 rounded-md"
              >
                Login
              </Link>
            </li>
            <button onClick={toggleNav}>
              <FontAwesomeIcon
                icon={faXmark}
                className="absolute top-12 right-12 text-xl"
              />
            </button>
          </ul>

          <div className="md:hidden text-xl cursor-pointer">
            <button onClick={toggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
