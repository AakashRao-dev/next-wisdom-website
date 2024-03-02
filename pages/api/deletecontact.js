import { initAdmin } from '@/db/firebaseAdmin';
import { deleteContactFromFirestore } from '@/db/firebase';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      await initAdmin(); // Initialize Firebase Admin SDK

      const { contactId } = req.body;
      await deleteContactFromFirestore(contactId);

      res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('Error deleting contact:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while deleting the contact' });
    }
  } else {
    res.status(405).end();
  }
}
