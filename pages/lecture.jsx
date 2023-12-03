import HeaderBar from "@/components/HeaderBar";
import QuizIntroSection from "@/components/lecture/QuizIntroSection";

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
    </>
  );
}

export default Lecture;
