export default function Courses() {
  return (
    <section
      className="bg-blueLight flex flex-col justify-center items-center gap-16 py-16 px-8"
      id="courses"
    >
      <h2 className="text-3xl font-bold text-black">Courses Available</h2>

      {/* COURSES CARDS CONTAINER */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-12">
        {/* CARD-1 */}
        <div className="bg-white min-h-80 shadow-lg rounded-2xl">
          <h3 className="bg-black text-white w-3/4 text-center mx-auto px-4 py-3 text-lg rounded-b-3xl">
            Classes 6th to 8th
          </h3>
          <ul className="list-disc flex flex-col justify-center gap-2 h-[70%] pl-12">
            <li>All Subjects</li>
          </ul>
        </div>

        {/* CARD-2 */}
        <div className="bg-white min-h-80 shadow-lg rounded-2xl">
          <h3 className="bg-black text-white w-3/4 text-center mx-auto px-4 py-3 text-lg rounded-b-3xl">
            Classes 9th to 10th
          </h3>
          <ul className="list-disc flex flex-col justify-center gap-2 h-[70%] pl-12">
            <li>Science</li>
            <li>Mathematics</li>
            <li>Social Sciences</li>
          </ul>
        </div>

        {/* CARD-3 */}
        <div className="bg-white min-h-80 shadow-lg rounded-2xl">
          <h3 className="bg-black text-white w-3/4 text-center mx-auto px-4 py-3 text-lg rounded-b-3xl">
            Classes 11th to 12th (Science)
          </h3>
          <ul className="list-disc flex flex-col justify-center gap-2 h-[70%] pl-12">
            <li>Physics</li>
            <li>Biology</li>
            <li>Mathematics - Applied & Core</li>
          </ul>
        </div>

        {/* CARD-4 */}
        <div className="bg-white min-h-80 shadow-lg rounded-2xl">
          <h3 className="bg-black text-white w-3/4 text-center mx-auto px-4 py-3 text-lg rounded-b-3xl">
            Classes 11th to 12th (Commerce)
          </h3>
          <ul className="list-disc flex flex-col justify-center gap-2 h-[70%] pl-12">
            <li>Business Studies</li>
            <li>Economics</li>
            <li>Accountancy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
