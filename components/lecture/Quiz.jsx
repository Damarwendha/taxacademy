import { FaRegCircle } from "react-icons/fa6";

function Quiz({
  currQuestionNum,
  question,
  answerA,
  answerB,
  answerC,
  answerD,
  totalQuestionNum,
}) {
  return (
    <div className="p-4">
      <p>Question {currQuestionNum}:</p>
      <h6 className="title-md">{question}</h6>
      <ul className="flex flex-col gap-3 mt-4">
        <li className="flex items-center gap-4 p-2 border-2 border-gray-500">
          <FaRegCircle />
          <p className=" title-md">{answerA}</p>
        </li>
        <li className="flex items-center gap-5 p-2 border-2 bg-brand-inverted border-gray-50">
          <FaRegCircle />
          <p className=" title-md">{answerB}</p>
        </li>
        <li className="flex items-center gap-4 p-2 border-2 border-gray-500">
          <FaRegCircle />
          <p className=" title-md">{answerC}</p>
        </li>
        <li className="flex items-center gap-4 p-2 border-2 border-gray-500">
          <FaRegCircle />
          <p className=" title-md">{answerD}</p>
        </li>
      </ul>
      <div className="flex place-content-between">
        <span>
          Question {currQuestionNum} of {totalQuestionNum}
        </span>
        <span>
          <Button className="mt-1 mb-2 rounded-none text-classic-black">
            Skip question
          </Button>
          {/* Set disabled to false when users click one of the answer */}
          <Button className="rounded-none bg-brand-primary" disabled={true}>
            Check answer
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Quiz;
