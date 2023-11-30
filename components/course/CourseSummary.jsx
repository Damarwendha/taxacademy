import Link from "@/components/Link";
import { Button, Rating, RatingStar } from "flowbite-react";
import Logo from "../Logo";

function CourseSummary({
  title,
  headline,
  avgRating,
  totalRatings,
  totalStudents,
  author,
  authorLink,
}) {
  return (
    <div className="w-full px-4">
      <h1 className="mt-3 mb-3 text-xl font-black text-classic-black sm:mt-0 sm:text-3xl sm:mb-1 ">
        {title}
      </h1>
      <p className="leading-6 text-classic-black sm:text-lg ">{headline}</p>

      <div className="mt-3 mb-3 sm:mb-0">
        <Link>
          <Rating>
            <p className="mr-2 text-xs text-gray-800 no-underline">
              {avgRating}
            </p>
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
            <p className="ml-2 text-xs underline">{totalRatings}</p>
          </Rating>
        </Link>
        <p className="text-xs text-classic-black">{totalStudents}</p>
      </div>
      <p className="text-sm">
        Created by
        <Link href={authorLink} className="underline ml-1">
          {author}
        </Link>
      </p>
      <div className="mt-4">
        <h6 className="title-md">This course includes:</h6>
        <span className="text-sm flex items-center">
          <span className="mr-1">
            <Logo src="/images/document.png" size="sm" />
          </span>
          <p>17 Articles</p>
        </span>
      </div>
      <Button className="bg-brand-primary mt-4 w-full ">
        Go to course
      </Button>
      <div className="mt-2 center-children mb-10">
        <span className="mr-2 bg-brand-primary rounded-full max-h-5 border-x-8 border-brand-primary text-classic-white">
          i
        </span>
        <span className="text-xs font-bold text-classic-black">
          You purchased this course on Aug. 17, 2023
        </span>
      </div>
    </div>
  );
}

export default CourseSummary;
