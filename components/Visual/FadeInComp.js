import { useRef, useEffect, useState } from "react";
import useVisibility from "../../hooks/useVisibility";
import styles from "./styles/FadeInComp.module.scss";

const FadeInComp = ({
  children,
  className,
  childRef,
  style = {},
  options = { ratio: 0.2, threshold: [0.2, 0.4, 0.6, 0.8] },
  onShow,
  active,
  delay,
  id,
}) => {
  const _childRef = useRef(null);
  const [_visible, _setVisible] = useState(false);
  const [_active, _setActive] = useState(true);
  const { isVisible: _isVisible } = useVisibility({
    childRef: childRef ? childRef : _childRef,
    options: options ? options : undefined,
    active: typeof active === "boolean" ? active : _active,
  });
  useEffect(() => {
    if (_isVisible) {
      const activate = () => {
        _setVisible(true);
        _setActive(false);
        typeof onShow === "function" && onShow();
      };
      if (delay && typeof delay === "number") {
        let tm = setTimeout(activate, delay);
        return () => clearTimeout(tm);
      } else {
        activate();
      }
    }
  }, [_isVisible, onShow, delay]);
  return (
    <div
      ref={childRef ? childRef : _childRef}
      className={`${styles.FadeInComp} ${_visible ? styles.show : styles.hide}${
        className ? ` ${className}` : ""
      }`}
      style={style}
      id={id ? id : undefined}
    >
      {children}
    </div>
  );
};

export default FadeInComp;
