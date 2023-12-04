import { Button } from "flowbite-react";
import Modal from "../Modal";
import Quiz from "./Quiz";

function QuizIntroSection({ title, currQuizNum, totalQuestionNum }) {
  return (
    <div className="flex flex-col gap-12 max-h-96 h-[65vw]  center-children">
      <div>
        <h3 className="font-bold text-[5vw] lg:text-4xl ">{title}</h3>
        <span>Quiz {currQuizNum}</span>
        <span className="mx-4">|</span>
        <span>{totalQuestionNum} questions</span>
      </div>
      <div className="flex gap-2">
        <Modal>
          <Modal.ToOpen id="quiz">
            <Button className="rounded-none bg-brand-primary">
              Start quiz
            </Button>
          </Modal.ToOpen>
          <Modal.Window id="quiz" type="fullscreen">
            <Quiz
              currQuestionNum={1}
              totalQuestionNum={4}
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
              answers={[
                "Lorem ipsum",
                "Lorem ipsum",
                "Lorem ipsum",
                "Lorem ipsum",
              ]}
            />
          </Modal.Window>
        </Modal>
        <Button className="text-classic-black">Skip quiz</Button>
      </div>
    </div>
  );
}

export default QuizIntroSection;
