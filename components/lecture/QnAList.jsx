import QnAItem from "./QnAItem";

function QnAList({ quizData }) {
  return (
    <ul className="flex flex-col gap-8">
      {quizData.map((quiz, i) => (
        <li>
          <QnAItem
            key={i}
            question={quiz.question}
            answers={quiz.answers}
            currQuestionNum={i + 1}
          />
        </li>
      ))}
    </ul>
  );
}

export default QnAList;
