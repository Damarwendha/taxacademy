import { HiXMark } from "react-icons/hi2";
import LectureSectionList from "./LectureSectionList";
import { BsArrowLeftSquareFill } from "react-icons/bs";

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
      {/* tabs */}
      <div className="relative text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-classic-black">
        <ul className="flex flex-wrap items-center -mb-px">
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 rounded-t-lg text-classic-white border-classic-white active "
              aria-current="page"
            >
              Course content
            </a>
          </li>
        </ul>
        <HiXMark
          className="absolute hidden lg:inline right-3 hover:opacity-50 top-3"
          onClick={onClose}
          color="white"
          size={26}
        />
      </div>
      {/* accordion list */}
      <div className="border-gray-200 lg:h-screen border-x-2 lg:overflow-y-scroll">
        <LectureSectionList
          sectionData={[
            {
              heading: "Introduction Lorem ipsum Lorem ipsum",
              items: [
                { title: "Welcome to the course", minutes: 128 },
                {
                  title: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                  minutes: 120,
                },
              ],
            },
            {
              heading: "lorem",
              items: [
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
              ],
            },
            {
              heading: "Introduction",
              items: [
                { title: "Welcome to the course", minutes: 128 },
                { title: "lorem ipsum", minutes: 120 },
              ],
            },
            {
              heading: "lorem",
              items: [
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
              ],
            },
            {
              heading: "Introduction",
              items: [
                { title: "Welcome to the course", minutes: 128 },
                { title: "lorem ipsum", minutes: 120 },
              ],
            },
            {
              heading: "lorem",
              items: [
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
              ],
            },
            {
              heading: "Introduction",
              items: [
                { title: "Welcome to the course", minutes: 128 },
                { title: "lorem ipsum", minutes: 120 },
              ],
            },
            {
              heading: "lorem",
              items: [
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
              ],
            },
            {
              heading: "Introduction",
              items: [
                { title: "Welcome to the course", minutes: 128 },
                { title: "lorem ipsum", minutes: 120 },
              ],
            },
            {
              heading: "lorem",
              items: [
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
              ],
            },
            {
              heading: "Introduction",
              items: [
                { title: "Welcome to the course", minutes: 128 },
                { title: "lorem ipsum", minutes: 120 },
              ],
            },
            {
              heading: "lorem",
              items: [
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
              ],
            },
            {
              heading: "Introduction",
              items: [
                { title: "Welcome to the course", minutes: 128 },
                { title: "lorem ipsum", minutes: 120 },
              ],
            },
            {
              heading: "lorem",
              items: [
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
                { title: "lorem ipsum", minutes: 3 },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default LectureBar;
