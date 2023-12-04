import CourseOverview from "@/components/course/CourseOverview";
import CourseDetails from "@/components/course/CourseDetails";
import MainNav from "@/components/MainNav";

function Course() {
  return (
    <>
      <MainNav />

      <div className="flex flex-col gap-7">
        <CourseOverview />
        <CourseDetails />
      </div>
    </>
  );
}

export default Course;
