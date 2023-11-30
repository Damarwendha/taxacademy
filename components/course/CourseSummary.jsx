import Link from "@/components/Link";
import { Rating, RatingStar } from "flowbite-react";

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
    </div>
  );
}

export default CourseSummary;
