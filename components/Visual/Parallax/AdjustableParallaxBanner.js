import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ParallaxBanner, useParallaxController } from "react-scroll-parallax";
import GeneralContext from "../../../contexts/GeneralContext";
import FadeInComp from "../FadeInComp";
import SSRRenderProtection from "../SSRRenderProtection";

const a = () => {
  if (false) {
    console.log("test");
  }
};

export const AdjustableContainer = ({
  children,
  width: wd,
  containerClass,
  containerId,
  containerStyle = {},
  containerTag,
  includeWidthContainer,
  updateParallaxControllerOnResultUpdate = false,
  heightModifier,
  fallback,
  widthSwitch,
  fadeIn = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);
  const {
    state: {
      sizes: { scrollWidth: _wd },
      fontSizeTransform,
    },
  } = useContext(GeneralContext);
  const parallaxController = useParallaxController();
  const [height, setHeight] = useState(800);

  const width = useMemo(() => (wd ? wd : _wd), [wd, _wd]);

  const result = useMemo(() => {
    const _result = includeWidthContainer
      ? { ...widthSwitch(width), width } || { height: 800, width }
      : widthSwitch(width) || { height: 800 };
    return { ..._result, height: _result.height * fontSizeTransform };
  }, [width, widthSwitch, includeWidthContainer, fontSizeTransform]);

  const render = useMemo(
    () =>
      typeof children === "function"
        ? children({ result, ref: containerRef })
        : children,
    [children, result]
  );

  useEffect(() => {
    if (result?.height) {
      if (typeof heightModifier === "function") {
        setHeight(heightModifier(result?.height));
      } else {
        setHeight(result?.height);
      }
    } else {
      setHeight(800);
    }
  }, [heightModifier, result?.height]);

  useEffect(() => {
    if (updateParallaxControllerOnResultUpdate) {
      a(result);
      parallaxController.update();
    }
  }, [result, updateParallaxControllerOnResultUpdate, parallaxController]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const container = useMemo(
    () =>
      React.createElement(
        containerTag ? `${containerTag}` : "div",
        {
          ref: containerRef,
          className: containerClass ? containerClass : undefined,
          id: containerId ? containerId : undefined,
          style: result?.constainerStyle
            ? {
                ...containerStyle,
                ...result?.constainerStyle,
                minHeight: height,
                width: includeWidthContainer ? width : undefined,
              }
            : {
                ...containerStyle,
                minHeight: height,
                width: includeWidthContainer ? width : undefined,
              },
        },
        <>
          {width ? (
            fadeIn ? (
              <FadeInComp>{render}</FadeInComp>
            ) : (
              <>{render}</>
            )
          ) : null}
        </>
      ),
    [
      containerTag,
      containerClass,
      containerId,
      containerStyle,
      includeWidthContainer,
      fadeIn,
      render,
      result,
      height,
      width,
    ]
  );

  return (
    <SSRRenderProtection fallback={fallback}>{container}</SSRRenderProtection>
  );
};

const AdjustableParallaxBanner = (props) => {
  const { children, className, style = {}, layers = [] } = props;
  return (
    <AdjustableContainer {...props}>
      {({ result, ref }) => (
        <>
          <ParallaxBanner
            className={className ? className : ""}
            layers={typeof layers === "function" ? layers(result, ref) : layers}
            style={
              result?.style
                ? {
                    ...style,
                    ...result.style,
                    height: result?.height || 800,
                  }
                : {
                    ...style,
                    height: result?.height || 800,
                  }
            }
          />

          {children ? children : null}
        </>
      )}
    </AdjustableContainer>
  );
};

export default AdjustableParallaxBanner;
