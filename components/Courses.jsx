export default function Courses({ courses }) {
  return (
    <section
      className="bg-blueLight flex flex-col justify-center items-center gap-16 pt-16 md:pb-32 pb-44 px-8 overflow-hidden relative"
      id="courses"
    >
      <h2 className="text-3xl font-bold text-black">Courses Available</h2>

      {/* COURSES CARDS CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {courses.map((course, index) => (
          <div key={index} className="bg-white min-h-80 shadow-lg rounded-2xl">
            <h3 className="bg-black text-white w-3/4 text-center mx-auto px-4 py-3 text-lg rounded-b-3xl">
              {course.title}
            </h3>
            <ul className="list-disc flex flex-col justify-center gap-2 h-[70%] pl-12">
              {course.subjects.map((subject, subIndex) => (
                <li key={subIndex}>{subject}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-blueDark text-white w-full py-1 rounded overflow-hidden absolute bottom-0">
        <p className="relative animate-move flex gap-6 text-base text-nowrap">
          <span className="py-1 text-center">
            External Exam: IEO, IMO, NCO, NSO, NTSE, Concept building and Mental
            Maths
          </span>
          <span className="py-1 text-center">
            External Exam: IEO, IMO, NCO, NSO, NTSE, Concept building and Mental
            Maths
          </span>
        </p>
      </div>

      <div className="absolute top-4 left-2 lg:top-10 lg:left-10 bg-pink-600 text-white text-clampSecond px-8 py-2 rounded-xl font-semibold tracking-wide animate-bounce">
        JEE Prep
      </div>

      <div className="absolute top-4 right-2 lg:top-10 lg:right-10 bg-pink-600 text-white text-clampSecond px-8 py-2 rounded-xl font-semibold tracking-wide animate-bounce">
        NEET Prep
      </div>
    </section>
  );
}
