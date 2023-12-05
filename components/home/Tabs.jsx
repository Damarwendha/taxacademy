function Tabs() {
  return (
    <div className="mb-6 text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-classic-black">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            All courses
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 rounded-t-lg text-classic-white border-classic-white active "
            aria-current="page"
          >
            My lists
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
