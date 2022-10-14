import { useMemo } from "react";
import { Container } from "react-bootstrap";
import Link from "../../Link";
import style from "./style.module.scss";

const Footer = () => {
  const year = useMemo(() => new Date(Date.now()).getFullYear(), []);
  return (
    <footer className={style["Footer"]}>
      <Container>
        <span className={style["Footer__text"]}>
          Copyright © {year} OrdNServe Inc. |
        </span>{" "}
        <Link className={style["Footer__link"]} href="/aviso-legal">
          AVISO LEGAL
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
