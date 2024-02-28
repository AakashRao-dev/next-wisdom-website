import Image from 'next/image';

export default function Info() {
  return (
    <section className="bg-black text-white min-h-[70vh] flex justify-center items-center py-16 px-8">
      <div className="xl:w-[90%] mx-auto flex flex-col gap-8 lg:flex-row justify-between items-center">
        <div>
          <h2 className="flex flex-col gap-3 md:gap-6">
            <span className="block uppercase text-blue text-base tracking-[0.2em] font-medium">
              Welcome to a Transformative
            </span>
            <span className="text-clampThird font-extrabold flex flex-col">
              <span className="block">Journey with</span>
              <span className="block">Wisdom Coaching Classes</span>
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 md:basis-3/4 lg:basis-auto">
          <div className="rounded-lg border-2 border-gray max-w-60 lg:max-w-72 xl:max-w-70 hover:bg-white/5 flex flex-col gap-6 p-6 cursor-pointer">
            <Image
              src="/teach.svg"
              width={200}
              height={200}
              alt="teaching-svg-image"
              className="w-16 md:w-24 mx-auto"
            />
            <h3 className="text-2xl text-center font-semibold px-2 xl:px-10">
              Personalized Teaching
            </h3>
            <p className="text-center text-clampSecond md:text-base">
              Individual attention is given to every Student irrespective of
              one’s standing in the merit at any point of time
            </p>
          </div>

          <div className="rounded-lg border-2 border-gray max-w-60 lg:max-w-72 xl:max-w-70  hover:bg-white/5 flex flex-col gap-6 p-6 cursor-pointer">
            <Image
              src="/resources.svg"
              width={200}
              height={200}
              alt="teaching-svg-image"
              className="w-16 md:w-24 mx-auto"
            />
            <h3 className="text-2xl text-center font-semibold px-8 xl:px-10">
              Study Resources
            </h3>
            <p className="text-center text-clampSecond md:text-base">
              We provide resources to facilitate comprehensive learning and
              academic excellence, covering range of levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
