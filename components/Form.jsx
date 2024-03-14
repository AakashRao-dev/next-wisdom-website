import { useState, useRef } from 'react';
import { doc, setDoc } from 'firebase/firestore/lite';
import { firestore } from '@/firebaseConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export const sendContactForm = async ({ name, email, comment }) => {
  try {
    // Generate a unique ID for the contact
    const contactId = generateUniqueId();

    // Reference the document using the custom ID
    const contactDocRef = doc(firestore, 'contact', contactId);

    // Set the contact details in the document
    await setDoc(contactDocRef, {
      name,
      email,
      comment,
      sentAt: new Date().toISOString(),
      contactId: contactId,
    });

    return { success: true, id: contactId };
  } catch (err) {
    console.log(err);
    return { success: false, id: null };
  }
};

const generateUniqueId = () => {
  // Generate a unique timestamp-based ID
  const timestamp = new Date().getTime();
  const uniqueId = '' + timestamp;
  return uniqueId;
};

export default function Form() {
  const [message, setMessage] = useState(null);
  const formRef = useRef();

  const submitContact = async e => {
    e.preventDefault();
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res.success) {
      setMessage('Thank you for your valuable comment!');
      formRef.current.reset();
      setTimeout(() => setMessage(null), 5000); // Remove message after 5 seconds
      // Show success toast notification
      toast.success('Form submitted successfully', {
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
      setMessage('Something went wrong! Please try again');
      toast.error('Failed to submit form', {
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
      <div className="bg-blueDark text-white py-8 lg:py-16 lg:px-12 px-8 max-w-[800px] md:h-[600px] flex flex-col justify-evenly gap-12 rounded-lg overflow-hidden">
        {message && ( // Show the toast if message is not null
          <div className="absolute top-[5%] sm:right-[5%] right-[2%] bg-blueDark text-white px-4 py-2 flex items-center gap-4">
            {message}
            <span onClick={() => setMessage(null)}>&times;</span>
          </div>
        )}

        <h2 className="text-white text-clampThird md:text-4xl font-medium text-center">
          Get in Touch With Us
        </h2>

        <div className="flex md:hidden gap-12 items-start text-center mx-auto text-grayLight">
          <div className="flex flex-col gap-4 justify-center items-center max-w-48">
            <div className="border-2 border-gray px-3 py-2 rounded">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-xl text-white"
              />
            </div>
            <p className="text-sm">
              Anant Vihar Colony, Street-4, House No. 859, Daldal Seoni, Mowa,
              Raipur - 492014
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center max-w-48">
            <div className="border-2 border-gray px-3 py-2 rounded">
              <FontAwesomeIcon icon={faPhone} className="text-xl text-white" />
            </div>
            <div className="flex flex-col">
              <a href={`tel:+918839842061`}>+91 8839842061</a>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={submitContact}
          className="flex flex-col gap-6 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              required
              placeholder="Name"
              type={'text'}
              minLength={3}
              maxLength={25}
              className="bg-formItem px-4 py-2 w-full"
            />
            <input
              required
              placeholder="Email"
              className="bg-formItem px-4 py-2 w-full"
              type={'email'}
            />
          </div>
          <textarea
            required
            placeholder="Message"
            className="bg-formItem px-4 py-2"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-4 py-3 font-medium shadow-lg"
          >
            Send
          </button>
        </form>
      </div>

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
