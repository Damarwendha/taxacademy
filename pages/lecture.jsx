import { useState } from "react";
import Link from "@/components/Link";
import { Button } from "flowbite-react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function Lecture() {
  const [isPlayingQuiz, setIsPlayingQuiz] = useState(false);

  return (
    <>
      <div className="flex items-center w-screen font-semibold text-gray-200 border-b-2 border-b-brand-primary h-11 text-md bg-classic-black text-classic-white">
        <Link className="px-4 text-3xl text-gray-200">
          <FaChevronLeft />
        </Link>
        <span className="w-full overflow-dot">
          Learn Figma - UI/UX Design Essential Training
        </span>
      </div>

      {isPlayingQuiz ? (
        <div className="p-4">
          <p>Question 1:</p>
          <h6 className="title-md">Lorem ipsum dolor sit amet, consectetur</h6>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-center gap-4 p-2 border-2 border-gray-500">
              <FaRegCircle />
              <p className=" title-md">Lorem Ipsum</p>
            </li>
            <li className="flex items-center gap-5 p-2 border-2 bg-brand-inverted border-gray-50">
              <FaRegCircle />
              <p className=" title-md">Lorem Ipsum</p>
            </li>
            <li className="flex items-center gap-4 p-2 border-2 border-gray-500">
              <FaRegCircle />
              <p className=" title-md">Lorem Ipsum</p>
            </li>
            <li className="flex items-center gap-4 p-2 border-2 border-gray-500">
              <FaRegCircle />
              <p className=" title-md">Lorem Ipsum</p>
            </li>
          </ul>
          <div className="flex place-content-between">
            <span>Question 1 of 4</span>
            <span>
              <Button className="mt-1 mb-2 rounded-none text-classic-black">
                Skip question
              </Button>
              <Button className="bg-gray-400 rounded-none">Check answer</Button>
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col h-screen gap-12 center-children">
            <div>
              <h3 className="title-lg">What is design principle?</h3>
              <span>Quiz 15</span>
              <span className="mx-4">|</span>
              <span>4 questions</span>
            </div>
            <div className="flex gap-2">
              <Button
                className="rounded-none bg-brand-primary"
                onClick={() => setIsPlayingQuiz(true)}
              >
                Start quiz
              </Button>
              <Button className="text-classic-black">Skip quiz</Button>
            </div>
          </div>

          {/* Sidebar Toggle */}
          <FaArrowCircleLeft
            className="fixed w-8 h-8 top-24 right-3 hover:opacity-70"
            color="var(--color-brand-primary)"
            onClick={() => {}}
          />
        </>
      )}
    </>
  );
}

export default Lecture;
