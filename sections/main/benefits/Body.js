import { Collapse, List } from "@mui/material";
import { useCallback, useContext, useMemo, useState } from "react";
import ExpandLess from "../../../assets/icons/expand_less.svg";
import ExpandMore from "../../../assets/icons/expand_more.svg";
import ThemeContext from "../../../contexts/ThemeContext";
import styles from "./style.module.scss";

const benefits = {
  client: [
    {
      id: "c-1",
      title: "Independencia del camarero.",
      body: "Tus clientes ya no tendrán que esperar a ser atendidos por el camarero, por lo que tendrán una experiencia más fluida que les incitará a volver.",
    },
    {
      id: "c-2",
      title: "Sin presiones.",
      body: "Permite a tus clientes consultar la carta sin presiones, y pedir cuando consideren que tienen claro lo que quieren.",
    },
    {
      id: "c-3",
      title: "Historial de pedidos.",
      body: "Si tu cliente se registra, podrá consultar en cualquier momento los pedidos que haya realizado.",
    },
    {
      id: "c-4",
      title: "Feedback directo con el local.",
      body: "Permite a tu clientes dar feedback directo a tu local. Desde el local y los camareros, hasta cada uno de los productos, para que puedas mejorar los aspectos que demande tu clientela.",
    },
    /* { RECOMENDACIONES DE PLATOS SEGUN HISTORIAL (futuro) } */
  ],
  local: [
    {
      id: "r-1",
      title: "Reduccion del trabajo de los camareros.",
      body: "Gracias a que los clientes realizan el pedido desde la mesa, los camareros tienen más tiempo para mejorar el servicio al cliente, la limpieza del local, etc.",
    },
    {
      id: "r-2",
      title: "Mayor control sobre las comandas.",
      body: "Mantén un mayor control sobre las comandas, cuándo fueron realizadas, qué falta por entregar al cliente, etc.",
    },
    {
      id: "r-3",
      title: "Registro y estadísticas.",
      body: "Te ofreceremos distintas métricas a nivel de local, producto, y empleados, para que tengas la máxima información posible sobre la productividad de tu negocio.",
    },
    {
      id: "r-4",
      title: "Puntuaciones por parte del cliente.",
      body: "Ofrece a tus clientes la oportunidad de valorar los platos que haya consumido, así como el servicio ofrecido por el camarero.",
    },
  ],
};

const BenefitItem = ({ title, body, id, openBenefit, setOpenBenefit }) => {
  const { theme } = useContext(ThemeContext);
  const isOpen = useMemo(() => openBenefit === id, [openBenefit, id]);
  const handleOpen = useCallback(() => {
    setOpenBenefit(isOpen ? null : id);
  }, [id, isOpen]);

  return (
    <div className={styles["benefit-item"]}>
      <div
        className={`${styles["benefit-item-open-button"]} ${
          styles[`benefits-box-shadow-${theme.name}`]
        } ${styles[`button-hover-bck-${theme.name}`]}`}
        onClick={handleOpen}
      >
        <h4 className={styles["benefit-item-title"]}>{title}</h4>
        <span className={styles["benefit-item-icon-container"]}>
          {isOpen ? (
            <ExpandLess fill={theme.color} />
          ) : (
            <ExpandMore fill={theme.color} />
          )}
        </span>
      </div>
      <Collapse in={isOpen}>
        {/* <FadeInComp> */}
        <div
          className={`${styles["benefit-item-body"]} ${
            styles[`benefits-box-shadow-${theme.name}`]
          }`}
        >
          <p
            className={styles["benefit-item-body-text"]}
            style={{ opacity: isOpen ? 1 : 0 }}
          >
            {body}
          </p>
        </div>
        {/* </FadeInComp> */}
      </Collapse>
    </div>
  );
};

const BenefitsList = ({ title, benefits }) => {
  const [openBenefit, setOpenBenefit] = useState(null);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles["body-benefits"]} ${
        styles[`benefits-box-shadow-${theme.name}`]
      }`}
    >
      <h3 className={styles["body-benefits-title"]}>{title}</h3>
      <div className={styles["body-benefits-body"]}>
        <List>
          {benefits.map((b) => (
            <BenefitItem
              key={b.id}
              openBenefit={openBenefit}
              setOpenBenefit={setOpenBenefit}
              {...b}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

const Body = ({ layerProps = {} }) => {
  const { theme } = useContext(ThemeContext);
  const { width = 0 } = layerProps;
  return (
    <div
      className={`${styles.body} ${
        styles[`benefits-box-shadow-${theme.name}`]
      }`}
      style={{ backgroundColor: theme.background }}
    >
      <h2 className={styles["body-title"]}>Beneficios</h2>
      <div
        className={`${styles["body-main"]} ${
          width < 800 ? styles["body-main-sm"] : styles["body-main-lg"]
        }`}
      >
        <BenefitsList title="Para el local:" benefits={benefits.local} />
        <BenefitsList title="Para el cliente:" benefits={benefits.client} />
      </div>
    </div>
  );
};

export default Body;
