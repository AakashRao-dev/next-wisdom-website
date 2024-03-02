import { deletePDFFromStorage } from '@/db/firebase'; // Import your delete function
import { initAdmin } from '@/db/firebaseAdmin';

initAdmin();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const fileName = req.body.fileName; // Retrieve the file name from the request body
    try {
      // Perform the file deletion operation using the fileName
      await deletePDFFromStorage(fileName);

      // Respond with a success message
      res.status(200).json({ message: 'PDF file deleted successfully' });
    } catch (error) {
      console.error('Error deleting PDF:', error);
      // Respond with an error message
      res
        .status(500)
        .json({ error: 'An error occurred while deleting the PDF file' });
    }
  } else {
    // If the HTTP method is not DELETE, respond with Method Not Allowed status
    res.status(405).end();
  }
}
