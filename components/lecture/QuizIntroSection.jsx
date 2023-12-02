import { Button } from "flowbite-react";

function QuizIntroSection({
  onStartQuiz,
  title,
  currQuizNum,
  totalQuestionNum,
}) {
  return (
    <div className="flex flex-col h-screen gap-12 center-children">
      <div>
        <h3 className="title-lg">{title}</h3>
        <span>Quiz {currQuizNum}</span>
        <span className="mx-4">|</span>
        <span>{totalQuestionNum} questions</span>
      </div>
      <div className="flex gap-2">
        <Button className="rounded-none bg-brand-primary" onClick={onStartQuiz}>
          Start quiz
        </Button>
        <Button className="text-classic-black">Skip quiz</Button>
      </div>
    </div>
  );
}

export default QuizIntroSection;
