import { useState } from "react";
import HeaderBar from "@/components/HeaderBar";
import Quiz from "@/components/lecture/Quiz";
import QuizIntroSection from "@/components/lecture/QuizIntroSection";

function Lecture() {
  const [isPlayingQuiz, setIsPlayingQuiz] = useState(false);

  return (
    <>
      <HeaderBar
        href="#"
        title="Learn Figma - UI/UX Design Essential Training"
      />

      {isPlayingQuiz ? (
        <Quiz
          currQuestionNum={1}
          totalQuestionNum={4}
          question="Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit?"
          answerA="Lorem ipsum"
          answerB="Lorem ipsum"
          answerC="Lorem ipsum"
          answerD="Lorem ipsum"
        />
      ) : (
        <QuizIntroSection
          title="What is design principle?"
          currQuizNum={13}
          totalQuestionNum={4}
          onStartQuiz={() => setIsPlayingQuiz(true)}
        />
      )}
    </>
  );
}

export default Lecture;
