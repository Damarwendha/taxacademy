"use client";

import { useEffect, useRef } from "react";

function useOutsideClick(callback, listenCapturing = true) {
  const refInside = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (refInside.current && !refInside.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [callback, listenCapturing]);

  return refInside;
}

export { useOutsideClick };
