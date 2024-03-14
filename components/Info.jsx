import Card from './Card';

export default function Info({ cards }) {
  return (
    <section className="bg-black text-white min-h-[60vh] flex justify-center items-center py-16 px-8 text-center">
      <div className="mx-auto flex flex-col gap-16 justify-between items-center">
        <div>
          <h2 className="flex flex-col gap-3">
            <span className="block uppercase text-center text-blue text-lg tracking-[0.2em] font-medium">
              Welcome to a Transformative
            </span>
            <span className="text-clampThird font-extrabold">
              Journey with Wisdom Coaching Classes
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap gap-6 justify-center">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
