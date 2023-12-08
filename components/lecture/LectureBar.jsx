import { BsArrowLeftSquareFill } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import AccordionList from "./AccordionList";
import LectureBarTabs from "./LectureBarTabs";

function LectureBar({ onClose, onOpen, showBar }) {
  if (!showBar)
    return (
      <BsArrowLeftSquareFill
        size={50}
        className="fixed -right-1 top-[10vw] rounded-none hover:opacity-80 cursor-pointer"
        onClick={onOpen}
        color="var(--color-black)"
      />
    );

  return (
    <div className="lg:fixed lg:top-11 lg:right-0 lg:w-72 xl:w-96">
      <LectureBarTabs>
        <HiXMark
          className="absolute hidden cursor-pointer lg:inline right-3 hover:opacity-50 top-3"
          onClick={onClose}
          color="white"
          size={26}
        />
      </LectureBarTabs>

      <AccordionList
        lectureData={[
          {
            title: "Introduction Lorem ipsum Lorem ipsum",
            contentList: [
              { title: "Welcome to the course", minutes: 128 },
              {
                title: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                minutes: 120,
              },
            ],
          },
          {
            title: "lorem",
            contentList: [
              { title: "lorem ipsum", minutes: 3 },
              { title: "lorem ipsum", minutes: 3 },
              { title: "lorem ipsum", minutes: 3 },
            ],
          },
        ]}
      />
    </div>
  );
}

export default LectureBar;
