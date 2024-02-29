export default function Comments({ contacts }) {
  return (
    <>
      {contacts.map(contact => (
        <div
          key={contact.sentAt}
          className="bg-blueDark text-white flex flex-col gap-2 p-6 max-w-96 rounded-xl"
        >
          <p className="text-xl mb-2">From: {contact.name}</p>
          <p>
            Email:{' '}
            <span className="text-base font-medium text-yellow-300">
              {contact.email}
            </span>
          </p>
          <p>Comment: {contact.comment}</p>
          <p className="text-grayLight">Sent At: {contact.sentAt}</p>
        </div>
      ))}
    </>
  );
}
