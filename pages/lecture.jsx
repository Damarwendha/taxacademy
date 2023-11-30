import Link from "@/components/Link";
import { Button } from "flowbite-react";

function Lecture() {
  return (
    <>
      <div className="flex items-center w-screen h-10 font-semibold text-gray-400 text-md bg-classic-black text-classic-white">
        <Link className="mr-2 text-3xl text-gray-400">&lt;&lt;</Link>
        <span className="w-full overflow-dot">
          Learn Figma - UI/UX Design Essential Training
        </span>
      </div>

      <div className="flex flex-col h-screen gap-12 center-children">
        <div>
          <h3 className="title-lg">What is design principle?</h3>
          <span>Quiz 15</span>
          <span className="mx-4">|</span>
          <span>4 questions</span>
        </div>
        <div className="flex gap-2">
          <Button className="rounded-none bg-brand-primary">Start quiz</Button>
          <Button className="text-classic-black">Skip quiz</Button>
        </div>
      </div>

      {/* Display this only when the quiz starts.*/}
      <div className="p-4">
        <p>Question 1:</p>
        <h6 className="title-md">Lorem ipsum dolor sit amet, consectetur</h6>
        <ul className="flex flex-col gap-3 mt-4">
          <li className="flex items-center gap-5 p-2 border-2 border-gray-500">
            <span className="font-light">o</span>
            <p className=" title-md">Lorem Ipsum</p>
          </li>
          <li className="flex items-center gap-5 p-2 border-2 bg-brand-inverted border-gray-50">
            <span className="font-light">o</span>
            <p className=" title-md">Lorem Ipsum</p>
          </li>
          <li className="flex items-center gap-5 p-2 border-2 border-gray-500">
            <span className="font-light">o</span>
            <p className=" title-md">Lorem Ipsum</p>
          </li>
          <li className="flex items-center gap-5 p-2 border-2 border-gray-500">
            <span className="font-light">o</span>
            <p className=" title-md">Lorem Ipsum</p>
          </li>
        </ul>
        <div className="flex place-content-between">
          <span>Question 1 of 4</span>
          <span>
            <Button className="mt-1 mb-2 rounded-none text-classic-black">
              Skip question
            </Button>
            {/* Enable the button when user click any answer */}
            <Button className="rounded-none bg-brand-primary" disabled={true}>
              Check answer
            </Button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Lecture;
