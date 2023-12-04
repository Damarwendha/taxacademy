import HeaderBar from "@/components/HeaderBar";
import LectureSectionList from "@/components/lecture/LectureSectionList";
import QuizIntroSection from "@/components/lecture/QuizIntroSection";

function Lecture() {
  return (
    <>
      <HeaderBar
        href="/"
        title="Learn Figma - UI/UX Design Essential Training"
      />

      {/* main content */}
      <div className="items-center justify-center lg:h-screen lg:-mt-20 lg:mr-72 xl:mr:96 lg:flex">
        <QuizIntroSection
          title="What is design principle?"
          currQuizNum={13}
          totalQuestionNum={4}
        />
      </div>

      <div className="lg:fixed lg:top-11 lg:right-0 lg:w-72 xl:w-96">
        {/* tabs */}
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-classic-black">
          <ul className="flex flex-wrap items-center -mb-px">
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
        {/* accordion list */}
        <div className="lg:h-screen lg:overflow-y-scroll">
          <LectureSectionList
            sectionData={[
              {
                heading: "Introduction Lorem ipsum Lorem ipsum",
                items: [
                  { title: "Welcome to the course", minutes: 128 },
                  { title: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", minutes: 120 },
                ],
              },
              {
                heading: "lorem",
                items: [
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                ],
              },
              {
                heading: "Introduction",
                items: [
                  { title: "Welcome to the course", minutes: 128 },
                  { title: "lorem ipsum", minutes: 120 },
                ],
              },
              {
                heading: "lorem",
                items: [
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                ],
              },
              {
                heading: "Introduction",
                items: [
                  { title: "Welcome to the course", minutes: 128 },
                  { title: "lorem ipsum", minutes: 120 },
                ],
              },
              {
                heading: "lorem",
                items: [
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                ],
              },
              {
                heading: "Introduction",
                items: [
                  { title: "Welcome to the course", minutes: 128 },
                  { title: "lorem ipsum", minutes: 120 },
                ],
              },
              {
                heading: "lorem",
                items: [
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                ],
              },
              {
                heading: "Introduction",
                items: [
                  { title: "Welcome to the course", minutes: 128 },
                  { title: "lorem ipsum", minutes: 120 },
                ],
              },
              {
                heading: "lorem",
                items: [
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                ],
              },
              {
                heading: "Introduction",
                items: [
                  { title: "Welcome to the course", minutes: 128 },
                  { title: "lorem ipsum", minutes: 120 },
                ],
              },
              {
                heading: "lorem",
                items: [
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                ],
              },
              {
                heading: "Introduction",
                items: [
                  { title: "Welcome to the course", minutes: 128 },
                  { title: "lorem ipsum", minutes: 120 },
                ],
              },
              {
                heading: "lorem",
                items: [
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                  { title: "lorem ipsum", minutes: 3 },
                ],
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Lecture;
