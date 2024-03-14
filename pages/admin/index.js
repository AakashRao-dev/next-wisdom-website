import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Admin() {
  const router = useRouter();

  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/signin');
    },
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Admin Page - Wisdom Coaching Classes</title>
      </Head>

      <section className="bg-black min-h-screen flex flex-col gap-12 items-center pt-7 relative">
        <Link
          href="/"
          className="bg-blue text-black text-clampSecond font-bold px-4 py-3 absolute bottom-4 right-6 shadow-md shadow-blue/40 rounded"
        >
          Return to Homepage
          <FontAwesomeIcon icon={faRightToBracket} className="ml-3" />
        </Link>

        <h1 className="text-4xl text-white">Admin Panel</h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white bg-blueDark rounded-lg px-6 py-3 text-base md:text-lg shadow-xl">
            Current User: {session?.data?.user?.email}
          </div>
          <button
            className="bg-red-500 text-white py-3 px-4 rounded-lg"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <Link
            href="/admin/checkcontacts"
            className="bg-blueDark hover:bg-blueDark/40 text-white flex flex-col gap-3 p-6 max-w-80 rounded-xl"
          >
            <span className="text-2xl font-bold">
              New Messages and Contacts
            </span>
            <span className="text-base">
              Check Messages and Contacts submitted from the Contact Form
            </span>
          </Link>

          <Link
            href="/admin/managepdf"
            className="bg-blueDark hover:bg-blueDark/40 text-white flex flex-col gap-3 p-6 max-w-80 rounded-xl"
          >
            <span className="text-2xl font-bold">PDF Uploads</span>
            <span className="text-base">
              Upload PDFs to make it visible on the Course Materials Page
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

Admin.requireAuth = true;
