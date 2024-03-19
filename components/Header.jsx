import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { signOut, useSession } from 'next-auth/react';

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <header className="sticky md:top-0 md:z-30 shadow-md bg-white z-[100]">
      <div className="bg-blue p-3">
        <div className="sm:w-[90%] sm:mx-auto flex xs:flex-row flex-col items-end gap-6 relative">
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

      <nav className="shadow-lg p-4 bg-white">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <Link href="/" className="text-black font-bold text-base md:text-xl">
            Wisdom Coaching Classes
          </Link>

          <ul className="md:flex gap-12 ml-auto hidden items-center">
            <li>
              <Link href="/" className="hover:text-blue">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#courses" scroll={false} className="hover:text-blue">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-blue">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue">
                Contact Us
              </Link>
            </li>
            <li>
              {session ? (
                <button
                  className="bg-red-500 text-white font-semibold px-5 py-2 rounded-md"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/signin"
                  className="bg-blue text-white font-semibold px-5 py-2 rounded-md"
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>

          <ul
            className={`${
              showNav ? 'flex' : 'hidden'
            } flex-col justify-center items-center gap-12 ml-auto absolute bg-black text-white top-1/2 left-2/4 -translate-x-1/2 -translate-y-[10%] w-full h-[110vh] text-xl`}
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
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue">
                Contact Us
              </Link>
            </li>
            <li>
              {session ? (
                <button
                  className="bg-red-500 text-white font-semibold px-5 py-2 rounded-md"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/signin"
                  className="bg-blue text-white font-semibold px-5 py-2 rounded-md"
                >
                  Sign In
                </Link>
              )}
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
