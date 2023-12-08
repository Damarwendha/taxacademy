import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { toHoursAndMinutes } from "@/utils/helper";

function AccordionContentItem({ title, contentNum, minutes, totalContent }) {
  return (
    <li
      className={`flex gap-3 px-4 py-2 hover:bg-purple-200 ${
        contentNum === 1 ? "pt-4" : contentNum === totalContent ? "pb-4" : ""
      }`}
      key={contentNum}
    >
      <MdOutlineCheckBoxOutlineBlank className="react-icon" />
      <span>
        <p className="mb-2 text-start">
          {contentNum}. {title}
        </p>
        <span className="gap-1 row">
          <MdOutlineOndemandVideo color="gray" />
          <p className="text-xs text-gray-600 ">{toHoursAndMinutes(minutes)}</p>
        </span>
      </span>
    </li>
  );
}

export default AccordionContentItem;
