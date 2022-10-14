import { useCallback, useMemo } from "react";
import FadeInComp from "../../../components/Visual/FadeInComp";
import styles from "./style.module.scss";
import { Parallax } from "react-scroll-parallax";
import Body from "./Body";
import ParallaxBackgroundLines from "../../../components/Visual/Parallax/ParallaxBackgroundLines";
import MouseParallax from "../../../components/Visual/Parallax/MouseParallax";
import ADJParallaxBanner from "../../../components/Visual/Parallax/AdjustableParallaxBanner";

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
      /* {
        scale: { x: [1.1, 1], y: [3, 5] },
        startScroll: height * 0.7,
        rotated: true,
        style: st,
      }, */
      {
        /* scale: { x: [1, 1], y: [1, 1] }, */
        startScroll: height * 0.7,
        rotated: true,
        style: st,
      },
      {
        scale: { x: [1.1, 1], y: [5, 1.5] },
        startScroll: height * 0.7,
        style: st,
      },
    ];
  }, [height]);

  return (
    <>
      <ParallaxBackgroundLines lines={lines} style={sty} height={height} />
    </>
  );
};

const Contact = () => {
  const widthSwitch = useCallback((width) => {
    switch (true) {
      /* case width >= 1200: {
        return { height: 900, width };
      }
      case width >= 800: {
        return { height: 1050, width };
      } */
      default: {
        return { height: 900, width };
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
              backgroundImage: "url(/images/contact.jpeg)",
              width,
              height,
            }}
          />
        ),
        scale: [1, 1.12, "easeOutCubic"],
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
              translateY={[10, -10]}
              scale={[1, 0.95]}
              className={styles["body-wrapper"]}
              style={{ height }}
              shouldAlwaysCompleteAnimation={true}
            >
              <FadeInComp className={styles["body-container"]} delay={1000}>
                <Body />
              </FadeInComp>
            </Parallax>
          </MouseParallax>
        ),
        shouldAlwaysCompleteAnimation: true,
        style: {
          width,
          height,
        },
      },
    ];
  }, []);

  return (
    <ADJParallaxBanner
      containerClass={styles.container}
      containerId="contact"
      layers={layers}
      widthSwitch={widthSwitch}
      includeWidthContainer
      fallback={<Body />}
    />
  );
};

export default Contact;
