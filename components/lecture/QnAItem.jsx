import { useState } from "react";
import Answers from "./Answers";

function QnAItem({
  currQuestionNum,
  question,
  // expect answers to be string[]
  answers,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <p>Question {currQuestionNum}:</p>
      <h6 className="title-md">{question}</h6>

      <Answers
        answers={answers}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
}

export default QnAItem;
