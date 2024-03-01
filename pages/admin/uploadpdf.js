import { initAdmin } from '@/db/firebaseAdmin';
import { getPDFFromStorage } from '@/db/firebase';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const UploadPDF = ({ pdfUrl, pdfName, createdTimestamp, updatedTimestamp }) => {
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

        <table className="w-full max-w-[900px] text-sm text-left text-grayLight rtl:text-right p-4">
          <thead className="text-xs uppercase bg-gray">
            <tr>
              <th className="px-6 py-3">File Name</th>
              <th className="px-6 py-3">Created</th>
              <th className="px-6 py-3">Updated</th>
              <th className="px-6 py-3">Download PDF</th>
            </tr>
          </thead>
          <tbody className="bg-blackDark/30">
            <tr className="border-b-2 border-gray">
              <td className="px-6 py-4 font-medium text-white capitalize">
                {pdfName}
              </td>
              <td className="px-6 py-4">{createdTimestamp}</td>
              <td className="px-6 py-4">{updatedTimestamp}</td>
              <td className="px-6 py-4">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 underline font-bold"
                >
                  Download <FontAwesomeIcon icon={faDownload} />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  await initAdmin();
  const pdfFile = await getPDFFromStorage();
  const pdfUrl = await pdfFile.getSignedUrl({
    action: 'read',
    expires: '03-01-2025',
  });

  const pdfName = pdfFile.id.replace(/%20/g, ' ');

  // Retrieve metadata
  const [metadata] = await pdfFile.getMetadata();
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

  const updatedTimestamp = new Date(metadata.updated).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return {
    props: {
      pdfUrl: pdfUrl[0],
      pdfName,
      createdTimestamp,
      updatedTimestamp,
    },
  };
};

export default UploadPDF;
