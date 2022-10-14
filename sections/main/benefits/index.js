import dynamic from "next/dynamic";
import { Suspense, useCallback, useMemo } from "react";
import { Parallax } from "react-scroll-parallax";
import FadeInComp from "../../../components/Visual/FadeInComp";
import MouseParallax from "../../../components/Visual/Parallax/MouseParallax";
import ParallaxBackgroundLines from "../../../components/Visual/Parallax/ParallaxBackgroundLines";
import Body from "./Body";
import styles from "./style.module.scss";
import ADJParallaxBanner from "../../../components/Visual/Parallax/AdjustableParallaxBanner";

/* const ADJParallaxBanner = dynamic(
  () => import("../../../components/Visual/Parallax/AdjustableParallaxBanner"),
  { suspense: true, ssr: false }
); */

const Background = ({ height }) => {
  const sty = useMemo(
    () => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    []
  );
  const lines = useMemo(() => {
    const st = {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    return [
      {
        scale: { x: [1.1, 1], y: [1.5, 5] },
        startScroll: height * 0.7,
        rotated: true,
        style: st,
      },
    ];
  }, [height]);

  return (
    <>
      <ParallaxBackgroundLines
        inverted
        lines={lines}
        style={sty}
        height={height}
      />
    </>
  );
};

const Benefits = () => {
  const widthSwitch = useCallback((width) => {
    switch (true) {
      case width >= 1200: {
        return { height: 800, width };
      }
      case width >= 800: {
        return { height: 950, width };
      }
      default: {
        return { height: 1300, width };
      }
    }
  }, []);

  const layers = useCallback((layerProps) => {
    const { height, width } = layerProps;
    return [
      {}, // added to avoid scroll bug
      {
        children: (
          <div
            className={styles["background-image"]}
            style={{
              backgroundImage: "url(/images/benefits.jpg)",
              width,
              height,
            }}
          />
        ),
        scale: [1.12, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
      },
      {
        children: <Background {...layerProps} />,
        shouldAlwaysCompleteAnimation: true,
      },
      {
        children: (
          <MouseParallax {...layerProps} factor={{ x: -0.004, y: -0.005 }}>
            <Parallax
              translateY={[2, -2]}
              /* scale={[1, 0.85]} */
              shouldAlwaysCompleteAnimation={true}
              className={styles["body-wrapper"]}
              style={{ height }}
            >
              <FadeInComp className={styles["body-container"]} delay={1000}>
                <Body layerProps={layerProps} />
              </FadeInComp>
            </Parallax>
          </MouseParallax>
        ),
      },
    ];
  }, []);

  return (
    <ADJParallaxBanner
      containerClass={styles.container}
      containerId="benefits"
      layers={layers}
      widthSwitch={widthSwitch}
      includeWidthContainer
      fallback={<Body />}
    />
  );
};

export default Benefits;
