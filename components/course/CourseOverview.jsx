import { Button } from "flowbite-react";
import { FaCircleInfo } from "react-icons/fa6";
import Thumbnail from "@/components/Thumbnail";
import TopicMenu from "./TopicMenu";
import CourseSummary from "./CourseSummary";
import Link from "../Link";

function CourseOverview() {
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-4 sm:px-8 sm:p-0 sm:relative sm:mt-12 sm:flex-row">
      <div className="relative w-screen grid-flow-row sm:grid sm:grid-cols-[300px_2fr] sm:grid-rows-[170px_1fr]">
        <span className="self-center w-full">
          <TopicMenu
            topics={[
              { label: "UI UX Improvement", href: "#" },
              { label: "Figma", href: "#" },
              { label: "Design", href: "#" },
            ]}
          />
          <Thumbnail src="https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0" />
        </span>

        <CourseSummary
          title="Learn Figma - UI/UX Design Essential Training"
          headline="Learn how to design a beautiful and engaging mobile app with Figma.
        Learn-by-doing approach."
          author="Ronaldo"
          authorLink="#"
        />
        <span className="flex-col order-1 row-span-1 center-children">
          <Link href="/lecture" className="w-11/12 mt-4 sm:w-full">
            <Button className="w-full rounded-lg sm:rounded-none bg-brand-primary">
              Go to course
            </Button>
          </Link>
          <div className="mt-2 mb-10 center-children">
            <FaCircleInfo color="var(--color-brand-primary)" className="mr-2" />
            <span className="text-xs font-bold text-classic-black">
              You purchased this course on Aug. 17, 2023
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}

export default CourseOverview;
