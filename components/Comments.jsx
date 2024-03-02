import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Comments({ contacts }) {
  const [deletedContactId, setDeletedContactId] = useState(null);

  const sentAtFormatted = new Date(contacts.sentAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const handleDeleteContact = async contactId => {
    try {
      const response = await fetch('/api/deletecontact', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contactId }),
      });

      if (response.ok) {
        setDeletedContactId(contactId);
        toast.success('Contact deleted successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      } else {
        console.error('Failed to delete contact');
        toast.error('Failed to delete contact', {
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
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error('Error deleting contact', {
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
  };

  return (
    <>
      {contacts.map(contact => (
        <div
          key={contact.sentAt}
          className="bg-blueDark text-white flex flex-col gap-2 p-6 max-w-96 rounded-xl relative"
        >
          <p className="text-xl mb-2">Name: {contact.name}</p>
          <p className="text-base font-medium text-yellow-300">
            Email: {contact.email}
          </p>
          <p>Comment: {contact.comment}</p>
          <p className="text-grayLight">SentAt: {contact.sentAt}</p>
          <button
            onClick={() => handleDeleteContact(contact.contactId)}
            className="bg-red-500 text-white absolute px-2 rounded-md py-1 text-lg top-2 right-2"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}

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
    </>
  );
}
