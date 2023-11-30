import Image from "next/image";

const sizes = {
  sm: 15,
  md: "30",
  lg: "50",
};

function Logo({
  src = "/images/brand-logo.png",
  alt = "Taxacademy Logo",
  size = "sm",
  ...props
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={sizes[size]}
      height={sizes[size]}
      {...props}
    />
  );
}

export default Logo;
