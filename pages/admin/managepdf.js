import Head from 'next/head';
import Link from 'next/link';
import UploadPDF from '@/components/UploadPDF';
import PDFTable from '@/components/PDFTable';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { initAdmin } from '@/db/firebaseAdmin';
import { getAllPDFsFromStorage } from '@/db/firebase';

const ManagePDF = ({ pdfFilesData }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Upload and Check PDFs</title>
      </Head>

      <section className="bg-black min-h-screen flex flex-col gap-12 items-center pt-12 p-4 relative">
        <h1 className="text-4xl text-white">
          Upload, View and Download PDFs from Here
        </h1>

        <UploadPDF />
        <PDFTable pdfFilesData={pdfFilesData} />

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
  const files = await getAllPDFsFromStorage();

  // Process each PDF file and gather required information
  const pdfFilesData = await Promise.all(
    files.map(async file => {
      const pdfUrl = await file.getSignedUrl({
        action: 'read',
        expires: '03-01-2025',
      });
      const pdfName = file.id.replace(/%20/g, ' ');

      // Retrieve metadata
      const [metadata] = await file.getMetadata();
      const createdTimestamp = new Date(metadata.timeCreated).toLocaleString(
        'en-US',
        {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }
      );

      const updatedTimestamp = new Date(metadata.updated).toLocaleString(
        'en-US',
        {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }
      );

      return {
        pdfUrl: pdfUrl[0],
        pdfName,
        createdTimestamp,
        updatedTimestamp,
      };
    })
  );

  return {
    props: {
      pdfFilesData,
    },
  };
};

export default ManagePDF;