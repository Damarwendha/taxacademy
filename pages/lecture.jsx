import { useState } from "react";
import { useResizeListener } from "@/hooks/useResizeListener";
import HeaderBar from "@/components/HeaderBar";
import QuizSection from "@/components/lecture/QuizSection";
import LectureBar from "@/components/lecture/LectureBar";
import MainContent from "@/components/lecture/MainContent";

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

      <MainContent isFullscreen={!showBar}>
        <QuizSection
          title="What is design principle?"
          currQuizNum={13}
          totalQuestionNum={4}
        />
      </MainContent>

      <LectureBar
        onClose={handleCloseBar}
        onOpen={handleOpenBar}
        showBar={showBar}
      />
    </>
  );
}

export default Lecture;
