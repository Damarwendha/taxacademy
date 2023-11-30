import Image from "next/image";

function Logo({
  src = "/images/brand-logo.png",
  alt = "Taxacademy Logo",
  width = 50,
  height = 50,
  ...props
}) {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />;
}

export default Logo;
