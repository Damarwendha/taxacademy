import { Button, Rating, RatingStar } from "flowbite-react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "@/components/Link";

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

      <div className="mt-3 mb-3 sm:mb-0 w-fit">
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
        <Link href={authorLink} className="ml-1 underline">
          {author}
        </Link>
      </p>

      <div className="mt-4">
        <h6 className="title-md">This course includes:</h6>
        <span className="flex items-center text-sm">
          <span className="mr-1">
            <IoDocumentTextOutline />
          </span>
          <p>17 Articles</p>
        </span>
      </div>

      <Button className="w-full mt-4 bg-brand-primary ">Go to course</Button>
      <div className="mt-2 mb-10 center-children">
        <FaCircleInfo color="var(--color-brand-primary)" className="mr-2"/>
        <span className="text-xs font-bold text-classic-black">
          You purchased this course on Aug. 17, 2023
        </span>
      </div>
    </div>
  );
}

export default CourseSummary;
