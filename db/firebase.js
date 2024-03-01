import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

export const getContacts = async () => {
  const firestore = getFirestore();
  const contactSnapShot = await firestore.collection('contact').get();
  const documents = contactSnapShot.docs.map(contact => ({
    name: contact.data().name,
    email: contact.data().email,
    comment: contact.data().comment,
    sentAt: contact.data().sentAt
      ? contact.data().sentAt.toDate().toISOString()
      : null,
  }));

  return documents;
};

export const getPDFFromStorage = async () => {
  const bucket = getStorage().bucket();
  const file = bucket.file('zerotomastery resources.pdf');
  return file;
};
