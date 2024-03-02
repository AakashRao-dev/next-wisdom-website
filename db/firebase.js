import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

export const getContacts = async () => {
  const firestore = getFirestore();
  const contactSnapShot = await firestore.collection('contact').get();
  const documents = contactSnapShot.docs.map(contact => ({
    name: contact.data().name,
    email: contact.data().email,
    comment: contact.data().comment,
    contactId: contact.data().contactId,
    sentAt: contact.data().sentAt ? contact.data().sentAt : null,
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

export const deleteContactFromFirestore = async contactId => {
  const firestore = getFirestore();
  const contactRef = firestore.collection('contact').doc(contactId);
  await contactRef.delete();
};
