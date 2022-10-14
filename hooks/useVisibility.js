import { useState, useEffect, useCallback } from "react";
const { throttle } = require("lodash");
const useVisibility = ({
  active = true,
  retrieveEntry = false,
  fatherRef,
  childRef,
  options: opts = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [child, setChild] = useState(null);
  const [parent, setParent] = useState(null);
  const [entry, setEntry] = useState({});
  const [isInTopHalf, setIsInTopHalf] = useState(false);

  const handleVisibility = useCallback(
    (entries) => {
      if (entries[0].intersectionRatio > (opts.ratio ? opts.ratio : 0.5)) {
        if (!isVisible) {
          if (retrieveEntry) {
            setEntry(entries[0]);
          }
          setIsVisible(true);
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
          setEntry(null);
        }
      }
    },
    [opts.ratio, retrieveEntry, isVisible]
  );

  const handleScroll = useCallback(() => {
    if (child && parent && isVisible) {
      const a = child.getBoundingClientRect();
      const { top } = a;
      const b = parent?.getBoundingClientRect();
      const { bottom: fB, top: fT } = b;
      if (top - fT > (fB - fT) / 2) {
        setIsInTopHalf(false);
      } else {
        setIsInTopHalf(true);
      }
    } else if (isVisible) {
      /* console.log("No childRef"); */
    }
  }, [child, parent, isVisible]);

  useEffect(() => {
    if (childRef?.current) {
      /* console.log("setting child"); */
      setChild(childRef.current);
    } else {
      setChild(null);
    }
  }, [childRef]);

  useEffect(() => {
    if (fatherRef?.current) {
      setParent(fatherRef.current);
    } else {
      setParent(null);
    }
  }, [fatherRef]);

  useEffect(() => {
    handleScroll();
    if (parent && active) {
      const e = parent;
      const f = throttle(handleScroll, 300);
      e?.addEventListener("scroll", f);
      return () => e?.removeEventListener("scroll", f);
    }
  }, [parent, active, handleScroll]);

  useEffect(() => {
    if (active && child) {
      const options = {
        root: parent ? parent : null,
        rootMargin: opts.rootMargin ? opts.rootMargin : "0px 0px 0px",
        threshold: opts.threshold ? opts.threshold : [0.95, 0.15],
      };
      const observer = new IntersectionObserver(handleVisibility, options);

      observer.observe(child);

      return () => observer.disconnect();
    }
  }, [parent, child, opts, active, handleVisibility]);

  return { isVisible, entry, isInTopHalf };
};

export default useVisibility;
