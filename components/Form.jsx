import { useState, useRef } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from '@/firebaseConfig';

export const sendContactForm = async ({ name, email, comment }) => {
  try {
    const ref = collection(firestore, 'contact');
    await addDoc(ref, {
      name,
      email,
      comment,
      sentAt: Timestamp.now().toDate(),
    });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
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
    } else {
      setMessage('Something went wrong! Please try again');
    }
  };

  return (
    <>
      <div className="bg-blueDark text-white py-16 px-12 max-w-[800px] rounded-lg flex flex-col gap-12">
        {message && ( // Show the toast if message is not null
          <div className="absolute bottom-[5%] sm:right-[5%] right-[2%] bg-blueDark text-white px-4 py-2 flex items-center gap-4">
            {message}
            <span onClick={() => setMessage(null)}>&times;</span>
          </div>
        )}

        <h2 className="text-white text-3xl md:text-4xl font-medium text-center">
          Get in Touch With Us
        </h2>
        <form
          ref={formRef}
          onSubmit={submitContact}
          className="flex flex-col gap-6 shadow-lg"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              required
              placeholder="Name"
              type={'text'}
              minLength={3}
              maxLength={25}
              className="bg-formItem px-4 py-2"
            />
            <input
              required
              placeholder="Email"
              className="bg-formItem px-4 py-2"
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
    </>
  );
}
