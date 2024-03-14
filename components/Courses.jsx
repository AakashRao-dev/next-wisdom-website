export default function Courses({ courses }) {
  return (
    <section
      className="bg-blueLight flex flex-col justify-center items-center gap-16 py-16 px-8"
      id="courses"
    >
      <h2 className="text-3xl font-bold text-black">Courses Available</h2>

      {/* COURSES CARDS CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
    </section>
  );
}
