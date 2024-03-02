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

export const getAllPDFsFromStorage = async () => {
  const bucket = getStorage().bucket();
  const [files] = await bucket.getFiles();
  return files;
};

export const deletePDFFromStorage = async fileId => {
  const bucket = getStorage().bucket();
  await bucket.file(fileId).delete();
};
