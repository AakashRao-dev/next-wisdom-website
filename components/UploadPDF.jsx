import { useState } from 'react';
import { storage } from '@/firebaseConfig';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faFileDownload,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

const UploadPDF = () => {
  const [file, setFile] = useState(null);

  // To update the state when a pdf is selected
  const handleChange = e => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // To handle the upload of pdf to Firebase Storage
  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Event listener for tracking the Upload progress
      uploadTask.on(
        'state_changed',
        snapshot => {
          // Progress function
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        error => {
          // Error function
          console.error(error.message);
        },
        () => {
          console.log('Upload Completed');
        }
      );
    }
  };

  return (
    <div className="flex gap-7">
      <input
        type="file"
        onChange={handleChange}
        accept="application/pdf"
        className="text-sm text-gray-500 bg-gray rounded-lg text-white file:py-3 file:mr-5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue file:text-black hover:file:cursor-pointer file:disabled:opacity-50 file:disabled:pointer-events-none"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 text-black font-medium
       bg-blue rounded-lg flex items-center gap-3"
      >
        Upload <FontAwesomeIcon icon={faUpload} />
      </button>
    </div>
  );
};

export default UploadPDF;
