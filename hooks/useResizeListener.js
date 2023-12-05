import { useEffect } from "react";

function useResizeListener(callback = () => {}, deps = [callback]) {
  useEffect(() => {
    function handleResize() {
      callback();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, deps);
}

export { useResizeListener };
