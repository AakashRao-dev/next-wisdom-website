import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function PDFTable({ pdfFilesData }) {
  return (
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
        {pdfFilesData.map((pdfData, index) => (
          <tr key={index} className="border-b-2 border-gray">
            <td className="px-6 py-4 font-medium text-white capitalize">
              {pdfData.pdfName}
            </td>
            <td className="px-6 py-4">{pdfData.createdTimestamp}</td>
            <td className="px-6 py-4">{pdfData.updatedTimestamp}</td>
            <td className="px-6 py-4">
              <a
                href={pdfData.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline font-bold"
              >
                Download <FontAwesomeIcon icon={faDownload} />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
