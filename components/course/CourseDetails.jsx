import CourseDescription from "./CourseDescription";
import CourseRequirements from "./CourseRequirements";

function CourseDetails() {
  return (
    <div className="sm:flex sm:justify-between sm:w-screen sm:gap-2 sm:px-8 xl:px-20">
      <CourseDescription />
    </div>
  );
}

export default CourseDetails;
