function LectureBarTabs({ children }) {
  return (
    <div className="relative text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-classic-black">
      <ul className="flex flex-wrap items-center -mb-px">
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 rounded-t-lg text-classic-white border-classic-white active "
            aria-current="page"
          >
            Course content
          </a>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default LectureBarTabs;
