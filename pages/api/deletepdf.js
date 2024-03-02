import { deletePDFFromStorage } from '@/db/firebase'; // Import your delete function

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const fileId = req.body.fileId;
    try {
      await deletePDFFromStorage(fileId);
      res.status(200).json({ message: 'PDF file deleted successfully' });
    } catch (error) {
      console.error('Error deleting PDF:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while deleting the PDF file' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
