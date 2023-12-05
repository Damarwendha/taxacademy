import ButtonToLecture from "./ButtonToLecture";
import CoursePurchaseInfo from "./CoursePurchaseInfo";
import CourseSummary from "./CourseSummary";
import TopicThumbnailWrapper from "./TopicThumbnailWrapper";

function CourseOverview() {
  return (
    <div className="sm:mt-12 mt-4 sm:px-8 xl:px-20 sm:p-0 w-screen grid-flow-row sm:grid sm:grid-cols-[300px_2fr] sm:grid-rows-[170px_1fr]">
      <TopicThumbnailWrapper />

      <CourseSummary
        title="Learn Figma - UI/UX Design Essential Training"
        headline="Learn how to design a beautiful and engaging mobile app with Figma.
        Learn-by-doing approach."
        author="Ronaldo"
        authorLink="#"
      />

      <span className="flex-col px-4 mt-2 sm:px-0 center-children">
        <ButtonToLecture href="/lecture" />
        <CoursePurchaseInfo time={{ M: "August", Y: "2023", D: "17" }} />
      </span>
    </div>
  );
}

export default CourseOverview;
