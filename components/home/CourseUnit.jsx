import { Card } from "flowbite-react";
import Link from "next/link";
import Thumbnail from "../Thumbnail";

function CourseUnit({ title, imgSrc }) {
  return (
    <Card
      className="max-w-sm"
      renderImage={() => (
        <Link href="/course">
          <Thumbnail src={imgSrc} />
        </Link>
      )}
    >
      <Link href="/course">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
    </Card>
  );
}

export default CourseUnit;
