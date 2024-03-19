import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-3 py-5 border-t-2 border-gray">
      <nav className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between xs:items-center w-4/5 mx-auto py-5">
        <div>
          <Link href="/" className="text-white font-bold text-base md:text-xl">
            Wisdom Coaching Classes
          </Link>
        </div>

        <ul className="flex flex-wrap xs:flex-row gap-4 w-full xs:ml-auto items-center xs:items-center text-grayLight">
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
        </ul>
      </nav>
      <hr className="text-gray w-4/5 py-3 mx-auto" />
      <p className="text-sm w-4/5 mx-auto">
        Copyright © 2024 <span className="font-bold">Wisdom Raipur</span>, All
        Rights Reserved. Designed and Created by{' '}
        <Link href="http://github.com/aakashRao-dev/" className="text-pink-400">
          Aakash
        </Link>
      </p>
    </footer>
  );
}
