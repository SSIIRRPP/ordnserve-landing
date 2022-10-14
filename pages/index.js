import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Presentation from "../sections/main/presentation";
import Benefits from "../sections/main/benefits";
import styles from "../styles/Main.module.scss";
import Contact from "../sections/main/contact";

const Separator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        width: "100%",
        height: 100,
        backgroundColor: theme.background,
      }}
    />
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Presentation />
      <Separator />
      <Benefits />
      <Separator />
      <Contact />
    </div>
  );
}
