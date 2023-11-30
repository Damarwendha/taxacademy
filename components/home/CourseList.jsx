import CourseUnit from "./CourseUnit";

function CourseList({ courses }) {
  return (
    <div className="grid gap-6 px-6">
      {courses.map((course, i) => {
        return (
          <CourseUnit key={i} title={course.title} imgSrc={course.imgSrc} />
        );
      })}
    </div>
  );
}

export default CourseList;
