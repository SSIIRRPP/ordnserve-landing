import { useContext } from "react";
import OrdNServeLogo from "../../../components/Visual/OrdNServeLogo";
import ThemeContext from "../../../contexts/ThemeContext";
import styles from "./style.module.scss";

const Body = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={styles.body}
      style={{ backgroundColor: theme.backgroundOp }}
    >
      <h1 className={styles["body-title"]}>
        <OrdNServeLogo />
      </h1>
      <div className={styles["body-main"]}>
        <h3>
          <strong>OrdNServe</strong> es la primera aplicación orientada a
          empresas dedicadas al sector de la hostelería que permitirá a los
          clientes efectuar pedidos desde la mesa mediante su smartphone, y
          permitirá a los dueños gestionar la productividad de sus locales, así
          como el desempeño de sus empleados, todo ello sin necesidad de
          presencia física.
        </h3>
        <p>
          Nuestro objetivo es{" "}
          <strong>ayudar a las pequeñas y medianas empresas</strong> del sector
          a digitalizar y automatizar procesos típicos de su actividad,
          aumentando <strong>la eficiencia y la rentabilidad</strong> de su
          negocio.
        </p>
      </div>
    </div>
  );
};

export default Body;
