import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "./ThemeContext";

const Theme = ({ children }) => {
  const lightTheme = useMemo(
    () => ({
      name: "light",
      background: "rgb(255,255,255)",
      backgroundOp: "rgba(255,255,255, .85)",
      backgroundSecondary: "rgb(192, 192, 192)",
      backgroundSecondaryOp: "rgba(192, 192, 192, .85)",
      boxShadowPrimary: "1px 1px 2px #d3d2d2fd",
      boxShadowPrimaryInset: "1px 1px 2px inset #d3d2d2fd",
      extraBackground: "#d3d2d2fd",
      color: "#313131",
      colorSecondary: "white",
      buttonColorPrimary: "rgb(0, 123, 255)",
      borderColorPrimary: "#d3d2d2fd",
      borderColorLight: "rgb(0, 123, 255)",
      borderColorSecondary: "rgb(0, 123, 255)",
    }),
    []
  );

  const darkTheme = useMemo(
    () => ({
      name: "dark",
      background: " rgb(76, 76, 76)",
      backgroundOp: " rgba(76, 76, 76, .95)",
      backgroundSecondary: "rgb(66, 66, 66)",
      backgroundSecondaryOp: "rgba(66, 66, 66,.95)",
      extraBackground: "rgb(66, 66, 66)",
      boxShadowPrimary: "1px 1px 2px #f3b200",
      boxShadowPrimaryInset: "1px 1px 2px inset #f3b200",
      color: "#f3b200",
      colorSecondary: "rgb(66, 66, 66)",
      buttonColorPrimary: "#f3b200",
      borderColorPrimary: "rgb(243 178 0 / 61%)",
      borderColorLight: "rgb(243 178 0 / 23%)",
      borderColorSecondary: "rgb(66, 66, 66)",
    }),
    []
  );

  const init = useMemo(
    () => ({
      raw: {
        dark: darkTheme,
        light: lightTheme,
      },
      mainYellow: "#f3b200",
      mainGrey: "#585858",
      mainOrange: "#ff4d20",
      mainRed: "#dc3545",
      mainGreen: "#198754",
      mediumGrey: "#d3d2d2fd",
      lightGrey: "#e7e7e7",
    }),
    [lightTheme, darkTheme]
  );

  const [theme, setThemeBase] = useState({ ...init, ...lightTheme });

  const setTheme = useCallback(
    (s) => {
      setThemeBase({
        ...s,
        ...init,
      });
    },
    [init]
  );

  const changeTheme = useCallback(() => {
    if (theme.name === "light") {
      setTheme(darkTheme);
      localStorage.setItem("selectedTheme", "dark");
      document
        .getElementById("__next")
        .setAttribute(
          "style",
          "background: linear-gradient(rgb(100, 100, 100), rgb(80, 80, 80))"
        );
    }
    if (theme.name === "dark") {
      setTheme(lightTheme);
      localStorage.setItem("selectedTheme", "light");
      document
        .getElementById("__next")
        .setAttribute(
          "style",
          "color: black; background-color: rgb(236, 236, 236)"
        );
    }
  }, [theme.name, lightTheme, darkTheme]);

  useEffect(() => {
    let selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "light") {
      setTheme(lightTheme);
      document
        .getElementById("__next")
        .setAttribute(
          "style",
          "color: black; background-color: rgb(236, 236, 236)"
        );
    }
    if (selectedTheme === "dark") {
      setTheme(darkTheme);
      document
        .getElementById("__next")
        .setAttribute(
          "style",
          "background: linear-gradient(rgb(100, 100, 100), rgb(80, 80, 80))"
        );
    }
  }, [darkTheme, lightTheme]);

  return (
    <ThemeProvider value={{ changeTheme, theme }}>
      {typeof children === "function" ? children(theme) : children}
    </ThemeProvider>
  );
};

export default Theme;
