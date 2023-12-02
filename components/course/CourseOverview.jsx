import Thumbnail from "@/components/Thumbnail";
import TopicMenu from "./TopicMenu";
import CourseSummary from "./CourseSummary";

function CourseOverview() {
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-4 rounded-md sm:bg-gray-200 sm:p-0 sm:relative sm:mt-12 sm:flex-row">
      <TopicMenu
        topics={[
          { label: "UI UX Improvement", href: "#" },
          { label: "Figma", href: "#" },
          { label: "Design", href: "#" },
        ]}
      />
      <Thumbnail src="https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0" />
      <CourseSummary
        title="Learn Figma - UI/UX Design Essential Training"
        headline="Learn how to design a beautiful and engaging mobile app with Figma.
        Learn-by-doing approach."
        author="Ronaldo"
        authorLink="#"
      />
    </div>
  );
}

export default CourseOverview;
