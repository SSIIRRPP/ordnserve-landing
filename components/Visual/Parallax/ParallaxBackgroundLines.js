import { useContext, useMemo } from "react";
import { Parallax } from "react-scroll-parallax";
import ThemeContext from "../../../contexts/ThemeContext";
import styles from "./styles/ParallaxBCKLines.module.scss";

const ParallaxBackgroundLines = ({
  className,
  lines = [],
  style: sty,
  height,
}) => {
  const { theme } = useContext(ThemeContext);
  const items = useMemo(() => {
    return lines.map((line, i) => {
      const {
        scale = {},
        startScroll = height * 0.7,
        style = {},
        rotated = false,
        toLeft = false,
      } = line;
      const { x, y } = scale;
      return (
        <Parallax
          key={`ParallaxBCKLines-${i}-${Date.now() / i}`}
          scaleY={y ? y : undefined}
          scaleX={x ? x : undefined}
          startScroll={startScroll}
          shouldAlwaysCompleteAnimation={true}
          style={style}
        >
          <div
            className={`${styles.item}${rotated ? ` ${styles.rotated}` : ""} ${
              toLeft ? styles.toleft : styles.toright
            } ${
              theme.name === "dark" ? styles["item-dark"] : styles["item-light"]
            }`}
          />
        </Parallax>
      );
    });
  }, [theme?.name, lines, height]);
  return (
    <div className={className} style={{ ...sty, height }}>
      {items}
    </div>
  );
};

export default ParallaxBackgroundLines;
