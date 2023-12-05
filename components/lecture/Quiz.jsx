import { useState } from "react";
import { Button } from "flowbite-react";
import Answers from "./Answers";

function Quiz({
  currQuestionNum,
  question,
  // expect answers to be string[]
  answers,
  totalQuestionNum,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="sm:px-[10vw]">
      <p>Question {currQuestionNum}:</p>
      <h6 className="title-md">{question}</h6>

      <Answers
        answers={answers}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      <div className="flex place-content-between">
        <span>
          Question {currQuestionNum} of {totalQuestionNum}
        </span>
        <span>
          <Button className="mt-1 mb-2 rounded-none text-classic-black">
            Skip question
          </Button>
          <Button
            className="rounded-none bg-brand-primary"
            disabled={selectedIndex === null}
          >
            Check answer
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Quiz;
