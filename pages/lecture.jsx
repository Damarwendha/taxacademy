import { useState } from "react";
import { useResizeListener } from "@/hooks/useResizeListener";
import HeaderBar from "@/components/HeaderBar";
import QuizSection from "@/components/lecture/QuizSection";
import LectureBar from "@/components/lecture/LectureBar";
import { BsArrowLeftSquareFill } from "react-icons/bs";

function Lecture() {
  const [showBar, setShowBar] = useState(true);

  function handleOpenBar() {
    setShowBar(true);
  }

  function handleCloseBar() {
    setShowBar(false);
  }

  useResizeListener(handleOpenBar);

  return (
    <>
      <HeaderBar
        href="/"
        title="Learn Figma - UI/UX Design Essential Training"
      />

      {/* main content */}
      <div
        className={`items-center justify-center lg:h-screen lg:-mt-20 lg:flex ${
          showBar ? "lg:mr-72 xl:mr:96" : ""
        }`}
      >
        <QuizSection
          title="What is design principle?"
          currQuizNum={13}
          totalQuestionNum={4}
        />
      </div>

      {showBar ? (
        <LectureBar onClose={handleCloseBar} />
      ) : (
        <BsArrowLeftSquareFill
          size={50}
          className="fixed -right-1 top-[10vw] rounded-none hover:opacity-80 cursor-pointer"
          onClick={handleOpenBar}
          color="var(--color-black)"
        />
      )}
    </>
  );
}

export default Lecture;
