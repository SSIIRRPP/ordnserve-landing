import { useContext, useEffect, useState } from "react";
import GeneralContext from "../../contexts/GeneralContext";

const SSRRenderProtection = ({ children, fallback }) => {
  const GeneralCTX = useContext(GeneralContext);
  return GeneralCTX?.hydrated ? (
    children
  ) : fallback ? (
    <div style={{ display: "none" }}>{fallback}</div>
  ) : null;
};

export default SSRRenderProtection;
