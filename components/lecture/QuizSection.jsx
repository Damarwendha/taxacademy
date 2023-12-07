import { Button } from "flowbite-react";
import Modal from "../Modal";
import QnAList from "./QnAList";

function QuizSection({ title, currQuizNum, totalQuestionNum }) {
  return (
    <div className="flex flex-col gap-12 max-h-96 h-[65vw]  center-children">
      {/* Quiz introduction heading */}
      <div>
        <h3 className="font-bold text-[5vw] lg:text-4xl ">{title}</h3>
        <span>Quiz {currQuizNum}</span>
        <span className="mx-4">|</span>
        <span>{totalQuestionNum} questions</span>
      </div>

      <div className="flex gap-2">
        <Modal>
          {/* displayed in Quiz introduction  */}
          <Modal.ToOpen id="quiz">
            <Button className="rounded-none bg-brand-primary">
              Mulai kuis
            </Button>
          </Modal.ToOpen>
          {/* display Modal.Window when Modal.ToOpen clicked */}
          <Modal.Window id="quiz" type="fullscreen">
            <div className="sm:px-[10vw]">
              <QnAList
                quizData={[
                  {
                    question:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                    answers: [
                      "Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                    ],
                  },
                  {
                    question:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                    answers: [
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                    ],
                  },
                  {
                    question:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                    answers: [
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                    ],
                  },
                  {
                    question:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                    answers: [
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                    ],
                  },
                  {
                    question:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                    answers: [
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                      "Lorem ipsum",
                    ],
                  },
                ]}
              />

              {/* Quiz modal pagination */}
              <div className="flex justify-between mt-12 sm:justify-end sm:gap-2">
                <Button className="bg-gray-200 rounded-none text-classic-black">
                  Sebelumnya
                </Button>
                <Button className="rounded-none bg-brand-primary">
                  Selanjutnya
                </Button>
              </div>
            </div>
          </Modal.Window>
        </Modal>
        <Button className="text-classic-black">Lewati kuis</Button>
      </div>
    </div>
  );
}

export default QuizSection;
