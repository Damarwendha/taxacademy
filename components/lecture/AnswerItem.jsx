import { FaRegDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";

function AnswerItem({ itemIndex, onSelect, children, selectedIndex }) {
  return (
    <li
      className="flex items-center gap-4 p-2 border-2 border-gray-500"
      key={itemIndex}
      onClick={() => onSelect(itemIndex)}
    >
      {selectedIndex === itemIndex ? <FaRegDotCircle /> : <FaRegCircle />}

      <p className=" title-md">{children}</p>
    </li>
  );
}

export default AnswerItem;
