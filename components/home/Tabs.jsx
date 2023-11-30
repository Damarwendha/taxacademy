function Tabs() {
  return (
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-classic-black">
      <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            All courses
          </a>
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-4 text-classic-white border-b-2 border-classic-white rounded-t-lg active "
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
