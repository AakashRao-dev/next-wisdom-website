import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from '@/firebaseConfig';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

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

      setIsUploading(true);

      // Event listener for tracking the Upload progress
      uploadTask.on(
        'state_changed',
        snapshot => {
          // Progress function
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          setUploadProgress(progress);
        },
        error => {
          // Error function
          console.error(error.message);
          // Show toast message for error
          toast.error(`Error: ${error.message}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setIsUploading(false); // Reset upload state
          setUploadProgress(0); // Reset progress
        },
        () => {
          console.log('Upload Completed');
          setIsUploading(false);
          setUploadProgress(0); // Reset progress
          // Show toast message for successful upload
          toast.success('File Successfully Uploaded', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
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
        disabled={isUploading}
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 text-black font-medium bg-blue rounded-lg flex items-center gap-3"
        disabled={isUploading}
      >
        {isUploading ? `Uploading ${uploadProgress.toFixed(2)}%` : 'Upload'}
        <FontAwesomeIcon icon={faUpload} />
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default UploadPDF;
