import QnAItem from "./QnAItem";

function QnAList({ quizData }) {
  return quizData.map((quiz, i) => (
    <QnAItem
      key={i}
      question={quiz.question}
      answers={quiz.answers}
      currQuestionNum={i + 1}
    />
  ));
}

export default QnAList;
