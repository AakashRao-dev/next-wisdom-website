export default function Comments({ contacts }) {
  const sentAtFormatted = new Date(contacts.sentAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  console.log(sentAtFormatted);

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
