import LinkLib from "next/link";

function Link({ className, href = "#", children, ...props }) {
  return (
    <LinkLib
      href={href}
      className={`text-sm font-bold text-blue-800 ${className}`}
      {...props}
    >
      {children}
    </LinkLib>
  );
}

export default Link;
