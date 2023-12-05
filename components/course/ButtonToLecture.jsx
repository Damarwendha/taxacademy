import { Button } from "flowbite-react";

function ButtonToLecture({ href }) {
  return (
    <Button
      href={href}
      className="w-full rounded-lg sm:rounded-none bg-brand-primary"
    >
      Go to course
    </Button>
  );
}

export default ButtonToLecture;
