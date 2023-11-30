import { Card } from "flowbite-react";

function CourseUnit({ title, imgSrc }) {
  return (
    <Card className="max-w-sm" imgAlt="" imgSrc={imgSrc}>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
    </Card>
  );
}

export default CourseUnit;
