import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-3 border-t-2 border-gray">
      <nav className="flex justify-between items-center w-4/5 mx-auto py-5">
        <div>
          <Link href="/" className="text-white font-bold text-base md:text-xl">
            Wisdom Coaching Classes
          </Link>
        </div>

        <ul className="md:flex gap-12 ml-auto hidden items-center text-grayLight">
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
      <p className="text-base">
        Copyright © 2024 <span className="font-bold">Wisdom Raipur</span>, All
        Rights Reserved. Designed and Created by{' '}
        <Link href="http://github.com/aakashRao-dev/" className="text-pink-400">
          Aakash
        </Link>
      </p>
    </footer>
  );
}
