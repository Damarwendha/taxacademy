"use client";

import { useEffect } from "react";

function useOverflowHidden(setIsHidden = true, deps = []) {
  useEffect(() => {
    if (setIsHidden) document.querySelector("body").style.overflow = "hidden";
    else document.querySelector("body").style.overflow = "visible";

    return () => (document.querySelector("body").style.overflow = "visible");
  }, deps);
}

export { useOverflowHidden };
