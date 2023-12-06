import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "@/components/Link";

function CourseSummary({ title, headline, author, authorLink }) {
  return (
    <div className="px-4 sm:ml-5">
      <h1 className="mt-3 mb-3 text-xl font-black lg:text-4xl text-classic-black sm:mt-0 sm:text-2xl sm:mb-1 ">
        {title}
      </h1>
      <p className="leading-6 text-classic-black sm:text-lg md:text-xl md:mt-4 md:mb-4 ">
        {headline}
      </p>

      <p className="mt-4 text-sm sm:mt-2">
        Created by
        <span href={authorLink} className="ml-1">
          {author}
        </span>
      </p>

      <div className="mt-2 sm:mt-2">
        <h6 className="title-md">This course includes:</h6>
        <span className="flex items-center text-sm">
          <span className="mr-1">
            <IoDocumentTextOutline />
          </span>
          <p>17 Articles</p>
        </span>
      </div>
    </div>
  );
}

export default CourseSummary;
