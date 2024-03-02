import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function PDFTable({ pdfFilesData, showInputSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter PDF files based on the search query
  const filteredPDFFiles = pdfFilesData.filter(pdfData =>
    pdfData.pdfName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async fileId => {
    try {
      const response = await fetch('/api/deletepdf', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileId }),
      });
      if (response.ok) {
        // Optionally, you can update the UI to reflect the deletion
        console.log('PDF file deleted successfully');
      } else {
        console.error('Failed to delete PDF file');
      }
    } catch (error) {
      console.error('Error deleting PDF:', error);
    }
  };

  return (
    <>
      {showInputSearch && (
        <input
          type="text"
          placeholder="Search PDFs"
          className="w-full max-w-96 bg-gray rounded-lg shadow-xl text-white placeholder:text-grayLight px-4 py-3 mb-4"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      )}
      <table className="text-sm text-left text-grayLight p-4 min-w-[600px]">
        <thead className="text-xs uppercase bg-gray">
          <tr>
            <th className="px-6 py-3">File Name</th>
            {filteredPDFFiles.some(pdfData => pdfData.createdTimestamp) && (
              <th className="px-6 py-3">Created</th>
            )}
            {filteredPDFFiles.some(pdfData => pdfData.updatedTimestamp) && (
              <th className="px-6 py-3">Updated</th>
            )}
            <th className="px-6 py-3">Download PDF</th>

            {filteredPDFFiles.some(pdfData => pdfData.fileId) && (
              <th className="px-6 py-3">Delete PDF</th>
            )}
          </tr>
        </thead>
        <tbody className="bg-blackDark/30">
          {filteredPDFFiles.map((pdfData, index) => (
            <tr key={index} className="border-b-2 border-gray">
              <td className="px-6 py-4 font-medium text-white capitalize">
                {pdfData.pdfName}
              </td>
              {pdfData.createdTimestamp && (
                <td className="px-6 py-4">{pdfData.createdTimestamp}</td>
              )}
              {pdfData.updatedTimestamp && (
                <td className="px-6 py-4">{pdfData.updatedTimestamp}</td>
              )}
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
              {pdfData.fileId && (
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(pdfData.fileId)}
                    className="flex items-center gap-2 underline font-bold"
                  >
                    Delete <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
