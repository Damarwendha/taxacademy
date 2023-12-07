import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaArrowLeft } from "react-icons/fa6";
import { LuBookCopy } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import CourseOverview from "@/components/course/CourseOverview";
import CourseDetails from "@/components/course/CourseDetails";
import MainNav from "@/components/MainNav";

function Course() {
  const MySwal = withReactContent(Swal);

  function handleLogout() {
    MySwal.fire({
      title: "Apakah anda yakin?",
      text: "Anda akan keluar dari akun ini",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8b8baa",
      confirmButtonText: "Logout",
      cancelButtonColor: "#d33",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Berhasil Logout!", "", "success");
      }
    });
  }

  return (
    <>
      <div className="hidden sm:inline">
        <MainNav />
      </div>

      <div className="absolute top-2 left-2 sm:hidden">
        <FaArrowLeft
          color="var(--color-black)"
          size={30}
          className="hover:opacity-70"
        />
      </div>

      <div className="flex flex-col -mt-5 gap-7 sm:-mt-0">
        <CourseOverview />
        <CourseDetails />
      </div>

      <ul className="fixed bottom-0 right-0 grid w-screen grid-cols-5 py-1 bg-black border-t-2 sm:hidden opacity-90">
        <li></li>
        <li></li>
        <li className="flex flex-col items-center justify-center py-[0.1rem] opacity-50 hover:opacity-100">
          <LuBookCopy size={25} color="white" opacity="80%" />
          <span className="text-[0.55rem] font-bold text-gray-200">
            My courses
          </span>
        </li>
        <li></li>
        <li
          className="flex flex-col items-center justify-center opacity-50 hover:opacity-100 py-[0.1rem]"
          onClick={handleLogout}
        >
          <IoIosLogOut size={25} color="white" />
          <span className="text-[0.55rem] font-bold text-gray-200">Logout</span>
        </li>
      </ul>
    </>
  );
}

export default Course;
