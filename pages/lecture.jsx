import HeaderBar from "@/components/HeaderBar";
import CourseSectionList from "@/components/lecture/CourseSectionList";
import QuizIntroSection from "@/components/lecture/QuizIntroSection";
import { IoIosSearch } from "react-icons/io";

function Lecture() {
  return (
    <>
      <HeaderBar
        href="/"
        title="Learn Figma - UI/UX Design Essential Training"
      />
      <QuizIntroSection
        title="What is design principle?"
        currQuizNum={13}
        totalQuestionNum={4}
      />

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-classic-black">
        <ul className="flex flex-wrap items-center -mb-px">
          <IoIosSearch size={25} className="ml-2" />
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 rounded-t-lg text-classic-white border-classic-white active "
              aria-current="page"
            >
              Course content
            </a>
          </li>
        </ul>
      </div>

      <CourseSectionList
        sectionData={[
          {
            heading: "Course Content",
            items: [
              { title: "Welcome to the course", minutes: 120 },
              { title: "lorem ipsum", minutes: 120 },
            ],
          },
          {
            heading: "lorem",
            items: [
              { title: "lorem ipsum", minutes: 1 },
              { title: "lorem ipsum", minutes: 1 },
            ],
          },
        ]}
      />
    </>
  );
}

export default Lecture;
