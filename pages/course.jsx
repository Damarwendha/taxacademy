import CourseOverview from "@/components/course/CourseOverview";
import CourseDetails from "@/components/course/CourseDetails";
import MainNav from "@/components/MainNav";

function Course() {
  return (
    <>
      <MainNav />

      <CourseOverview />
      <CourseDetails />
    </>
  );
}

export default Course;
