import Image from "next/image";

function Thumbnail({ src, alt = "", className }) {
  return (
    <span
      className={`flex relative max-w-md sm:max-w-xs lg:max-w-md aspect-video ${{
        className,
      }}`}
    >
      <Image src={src} alt={alt} fill />;
    </span>
  );
}

export default Thumbnail;
