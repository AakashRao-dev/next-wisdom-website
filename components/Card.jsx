function Card({ card }) {
  return (
    <>
      <div className="rounded-lg border-2 border-gray max-w-[280px] hover:bg-white/5 flex flex-col gap-6 sm:p-6 p-2 py-4 cursor-pointer">
        <h3 className="text-2xl text-center font-semibold sm:px-2 xl:px-10">
          {card.title}
        </h3>
        <p className="text-center text-clampSecond md:text-base">
          {card.description}
        </p>
      </div>
    </>
  );
}

export default Card;
