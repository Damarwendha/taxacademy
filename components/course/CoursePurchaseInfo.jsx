import { FaCircleInfo } from "react-icons/fa6";

const TimeProp = { D: "", M: "", Y: "" };

function CoursePurchaseInfo({ time = TimeProp }) {
  return (
    <div className="mt-2 mb-10 center-children">
      <FaCircleInfo color="var(--color-brand-primary)" className="mr-2" />
      <span className="text-xs font-bold text-classic-black">
        You purchased this course on{" "}
        {time.M.substring(0, 3) + ". " + time.D + ", " + time.Y}
      </span>
    </div>
  );
}
// Aug. 17, 2023
export default CoursePurchaseInfo;
