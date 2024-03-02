import Header from '@/components/Header';
import PDFTable from '@/components/PDFTable';
import Head from 'next/head';

import { initAdmin } from '@/db/firebaseAdmin';
import { getAllPDFsFromStorage } from '@/db/firebase';

export default function Resources({ pdfFilesData }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Study Materials - Wisdom Coaching Classes</title>
      </Head>

      <Header />
      <section className="bg-black min-h-[80vh] flex flex-col items-center gap-12 pt-12">
        <PDFTable pdfFilesData={pdfFilesData} showInputSearch={true} />
      </section>
    </>
  );
}

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

      return {
        pdfUrl: pdfUrl[0],
        pdfName,
      };
    })
  );

  return {
    props: {
      pdfFilesData,
    },
  };
};
