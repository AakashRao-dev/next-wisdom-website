import admin from 'firebase-admin';
import { getStorage } from 'firebase-admin/storage';

function formatPrivateKey(key) {
  return key.replace(/\\n/g, '\n');
}

export function createFirebaseAdminApp(params) {
  const privateKey = formatPrivateKey(params.privateKey);

  if (admin.apps.length > 0) {
    return admin.app();
  }

  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey,
  });

  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    storageBucket: params.storageBucket,
  });
}

export async function initAdmin() {
  const params = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  };

  const app = createFirebaseAdminApp(params);

  // Initialize storage
  const storage = getStorage(app); // await here
  return { app, storage };
}
