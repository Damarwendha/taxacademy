import Image from "next/image";

function Thumbnail({
  src,
  alt = "",
  ...props
}) {
  return (
    <span className="relative w-full max-w-md aspect-video sm:mr-8">
      <Image src={src} alt={alt} {...props} fill />;
    </span>
  );
}

export default Thumbnail;
