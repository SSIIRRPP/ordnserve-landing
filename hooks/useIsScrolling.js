import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

const useIsScrolling = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let tm;
    const scrollScript = throttle(() => {
      clearTimeout(tm);
      setScrolling(true);
      tm = setTimeout(() => {
        setScrolling(false);
      }, 400);
    }, 300);
    window.addEventListener("scroll", scrollScript);
    return () => window.removeEventListener("scroll", scrollScript);
  }, []);

  return { scrolling };
};

export default useIsScrolling;
