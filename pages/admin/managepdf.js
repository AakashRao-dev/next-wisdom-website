import { initAdmin } from '@/db/firebaseAdmin';
import { getAllPDFsFromStorage } from '@/db/firebase';
import Head from 'next/head';
import PDFTable from '@/components/PDFTable';

const ManagePDF = ({ pdfFilesData }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Upload and Check PDFs</title>
      </Head>

      <section className="bg-black min-h-screen flex flex-col gap-12 items-center pt-12 p-4">
        <h1 className="text-4xl text-white">
          Upload, View and Download PDFs from Here
        </h1>

        <PDFTable pdfFilesData={pdfFilesData} />
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
