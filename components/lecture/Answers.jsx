import AnswerItem from "./AnswerItem";

function Answers({ answers, selectedIndex, setSelectedIndex }) {
  function handleSelect(i) {
    setSelectedIndex(i);
  }

  return (
    <ul className="flex flex-col gap-3 mt-4">
      {answers.map((answer, i) => (
        <AnswerItem
          itemIndex={i}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          key={i}
        >
          {answer}
        </AnswerItem>
      ))}
    </ul>
  );
}

export default Answers;
