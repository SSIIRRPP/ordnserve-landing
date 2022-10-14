import { useReducer, useRef, useEffect, useCallback, useState } from "react";
import { GeneralProvider } from "./GeneralContext";
import { useResizeDetector } from "react-resize-detector";
import generalReducer, { generalState } from "./reducers";
import { setFontSizeTransform, toggleTouch } from "./actions";
import { useParallaxController } from "react-scroll-parallax";

const General = ({ children }) => {
  const mainRef = useRef(null);
  const scrollRef = useRef(null);
  const [state, dispatch] = useReducer(generalReducer, generalState);
  const [hydrated, setHydrated] = useState(false);
  const [sizes, setSizes] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });
  const { width, height } = useResizeDetector({
    targetRef: mainRef,
    refreshMode: "debounce",
    refreshRate: 150,
  });
  const { width: scrollWidth, height: scrollHeight } = useResizeDetector({
    targetRef: scrollRef,
    refreshMode: "debounce",
    refreshRate: 150,
  });
  const parallaxController = useParallaxController();

  const setWindowSize = useCallback(() => {
    setSizes({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
    parallaxController.update();
  }, [parallaxController]);

  const el = mainRef.current;

  useEffect(() => {
    const rm = () => {
      el.removeEventListener("touchstart", handleTouch);
    };
    const handleTouch = () => {
      dispatch(toggleTouch(true));
      rm();
    };
    if (el) {
      el.addEventListener("touchstart", handleTouch);
      return rm;
    }
  }, [el]);

  useEffect(() => {
    const el = document.getElementsByTagName("html")[0];
    const prt = window.getComputedStyle(el)["fontSize"];
    if (prt) {
      dispatch(setFontSizeTransform(parseInt(prt) / 16));
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      /* console.log("updating scroll container"); */
      parallaxController.updateScrollContainer(scrollRef.current);
    }
  }, [scrollRef, parallaxController]);

  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    setWindowSize();
    return () => window.removeEventListener("resize", setWindowSize);
  }, [setWindowSize]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <GeneralProvider
      value={{
        hydrated,
        state: {
          ...state,
          sizes: { ...sizes, width, height, scrollWidth, scrollHeight },
        },
        dispatch,
        mainRef,
        scrollRef,
      }}
    >
      {children}
    </GeneralProvider>
  );
};

export default General;
