import Link from "./Link";
import { FaChevronLeft } from "react-icons/fa6";

function HeaderBar({ href, title, onClick }) {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center w-screen font-semibold text-gray-200 border-b-2 border-b-brand-primary h-11 text-md bg-classic-black text-classic-white">
      <Link
        className="p-4 text-3xl text-gray-200"
        href={href}
        onClick={onClick}
      >
        <FaChevronLeft />
      </Link>
      <span className="w-full overflow-dot">{title}</span>
    </div>
  );
}

export default HeaderBar;
