import { useContext, useMemo } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import GeneralContext from "../../../contexts/GeneralContext";

const generateStyle = (h, w) => {
  let style = {};
  const addToStyle = (value, key) => {
    if (value) {
      style = {
        ...style,
        [key]: value,
      };
    }
  };
  addToStyle(h, "height");
  addToStyle(w, "width");
  if (Object.keys(style).length === 0) {
    console.warn("No height or width provided");
  }
  return style;
};

const defFactor = { x: 0.002, y: 0.005 };

const MouseParallax = ({
  children,
  width,
  height,
  factor = defFactor,
  containerStyles = {},
  updateStyles = () => ({}),
}) => {
  const { x = 0.002, y = 0.005 } = factor;
  const {
    state: { touch },
  } = useContext(GeneralContext);
  const styles = useMemo(() => generateStyle(height, width), [height, width]);
  return (
    <MouseParallaxContainer
      enabled={!touch}
      useWindowMouseEvents
      containerStyles={{
        ...styles,
        ...containerStyles,
      }}
    >
      <MouseParallaxChild
        factorX={x}
        factorY={y}
        updateStyles={(o) => {
          if (typeof updateStyles === "function") {
            return {
              ...styles,
              ...updateStyles(o),
            };
          } else if (typeof updateStyles === "object") {
            return {
              ...styles,
              ...updateStyles,
            };
          } else {
            return styles;
          }
        }}
      >
        {children}
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default MouseParallax;
