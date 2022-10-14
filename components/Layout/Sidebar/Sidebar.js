import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import styles from "./style.module.scss";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav
      className={styles.bar}
      style={{
        width: "40vw",
        minWidth: "250px",
        maxWidth: "350px",
        height: "100%",
        color: theme.raw.dark.color,
        backgroundColor: theme.raw.dark.backgroundSecondary,
        borderTop: "2px solid rgb(0 0 0 / 20%)",
      }}
    >
      <a
        className={styles.link}
        href="https://store.ordnserve.com"
        target="__blank"
      >
        Store
      </a>
      <a
        className={styles.link}
        href="https://server.ordnserve.com"
        target="__blank"
      >
        Server
      </a>
      <a
        className={styles.link}
        href="https://app.ordnserve.com"
        target="__blank"
      >
        App
      </a>
    </nav>
  );
};

export default Sidebar;
