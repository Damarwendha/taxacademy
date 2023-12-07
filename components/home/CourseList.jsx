import CourseUnit from "./CourseUnit";

function CourseList({ courses }) {
  return (
    <ul className="grid gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center">
      {courses.map((course, i) => {
        return (
          <li key={i}>
            <CourseUnit title={course.title} imgSrc={course.imgSrc} />
          </li>
        );
      })}
    </ul>
  );
}

export default CourseList;
