export default function Maps() {
  return (
    <div className="aspect-video rounded lg:block hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3718.013917277482!2d81.6638417750385!3d21.270916680439687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE2JzE1LjMiTiA4McKwMzknNTkuMSJF!5e0!3m2!1sen!2sin!4v1709386947621!5m2!1sen!2sin"
        width="500"
        height="600"
        style={{ border: 0 }}
        className="overflow-hidden"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
