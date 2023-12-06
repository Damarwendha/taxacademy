import { FaRegDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";

function AnswerItem({ itemIndex, onSelect, children, selectedIndex }) {
  return (
    <li
      className="flex gap-4 p-2 border-2 border-gray-500 cursor-pointer"
      key={itemIndex}
      onClick={() => onSelect(itemIndex)}
    >
      {selectedIndex === itemIndex ? (
        <FaRegDotCircle className="mt-[0.15rem] react-icon" />
      ) : (
        <FaRegCircle className="mt-[0.15rem] react-icon" />
      )}

      <p className=" title-md">{children}</p>
    </li>
  );
}

export default AnswerItem;
