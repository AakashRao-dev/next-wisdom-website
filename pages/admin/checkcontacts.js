import Head from 'next/head';
import Link from 'next/link';
import Comments from '@/components/Comments';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getContacts } from '@/db/firebase';
import { initAdmin } from '@/db/firebaseAdmin';

const CheckContacts = props => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Check Comments and Contacts</title>
      </Head>

      <section className="bg-black text-white min-h-screen flex flex-col gap-12 items-center pt-12 relative">
        <h1 className="text-4xl text-white">Check Comments & Contacts</h1>

        <div className="grid grid-cols-3 p-4 gap-8 mt-2">
          <Comments contacts={props.contacts} />
        </div>

        <Link
          href="/"
          className="bg-blue text-black text-clampSecond font-bold px-4 py-3 absolute bottom-7 right-14 shadow-md shadow-blue/40 rounded"
        >
          Return to Homepage
          <FontAwesomeIcon icon={faRightToBracket} className="ml-3" />
        </Link>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  await initAdmin();
  const contacts = await getContacts();

  return {
    props: {
      contacts,
    },
  };
};

export default CheckContacts;
