import style from "./form.module.scss";
import { Button, Container, Form, FormControl, Spinner } from "react-bootstrap";
import { useCallback, useState } from "react";
import { baseApiUrl, possibleSubjects, recaptchaKey } from "../../../constants";
import validateContactForm, { validations } from "./contactValidation";
import Link from "../../../components/Link";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  content: "",
  agreement: false,
};

const initialErrorsState = {
  name: null,
  email: null,
  subject: null,
  content: null,
  agreement: null,
};

const Forms = ({
  state,
  errors,
  setChange,
  handleSubmit,
  sending,
  sendSuccess,
  sendError,
}) => {
  return (
    <Form className={style["ContactForm__form"]} onSubmit={handleSubmit}>
      <Form.Group className={style["ContactForm__item"]}>
        <Form.Label className={style["form-label"]}>Su nombre</Form.Label>
        <Form.Control
          required
          value={state.name}
          isInvalid={errors.name}
          name="name"
          onChange={setChange}
          type="text"
        />
        <FormControl.Feedback type="invalid">
          {errors.name}
        </FormControl.Feedback>
      </Form.Group>
      <Form.Group className={style["ContactForm__item"]}>
        <Form.Label className={style["form-label"]}>Su email</Form.Label>
        <Form.Control
          required
          value={state.email}
          isInvalid={errors.email}
          name="email"
          onChange={setChange}
          type="email"
        />
        <FormControl.Feedback type="invalid">
          {errors.email}
        </FormControl.Feedback>
      </Form.Group>
      <Form.Group className={style["ContactForm__item"]}>
        <Form.Label className={style["form-label"]}>
          Asunto de su consulta:{" "}
        </Form.Label>
        <Form.Select
          required
          value={state.subject}
          name="subject"
          isInvalid={errors.subject}
          onChange={setChange}
          type="select"
        >
          <option value={"none"}>Selecciona un Asunto</option>
          {possibleSubjects.map((o) => (
            <option key={`subject-"${o}"`} value={o}>
              {o}
            </option>
          ))}
        </Form.Select>
        <FormControl.Feedback type="invalid">
          {errors.subject}
        </FormControl.Feedback>
      </Form.Group>
      <Form.Group className={style["ContactForm__item"]}>
        <Form.Label className={style["form-label"]}>Su mensaje: </Form.Label>
        <Form.Control
          required
          className={style["ContactForm__form--textarea"]}
          value={state.content}
          isInvalid={errors.content}
          name="content"
          onChange={setChange}
          as="textarea"
        />
        <FormControl.Feedback type="invalid">
          {errors.content}
        </FormControl.Feedback>
      </Form.Group>

      {sendSuccess ? (
        <p
          className={`${style["ContactForm__footer--feedback"]} ${style["success"]}`}
        >
          ¡Tu correo se ha enviado con éxito!
        </p>
      ) : null}
      {sendError ? (
        <p
          className={`${style["ContactForm__footer--feedback"]} ${style["error"]}`}
        >
          Ha habido un error. Por favor, inténtalo más tarde, o prueba otro
          medio de contacto.
        </p>
      ) : null}
      <Form.Group className={style["ContactForm__footer"]}>
        <Form.Check
          required
          value={state.agreement}
          name="agreement"
          onChange={setChange}
          isInvalid={errors.agreement}
          label={
            <>
              He leído y acepto los{" "}
              <Link href="/aviso-legal">Términos y Condiciones</Link>.
            </>
          }
        />
        <Button
          disabled={sendSuccess}
          className={style["ContactForm__footer--button"]}
          type="submit"
        >
          {sending ? (
            <Spinner
              className={style["ContactForm__footer--loader"]}
              size="sm"
              animation="border"
            />
          ) : null}
          Enviar
        </Button>
      </Form.Group>
    </Form>
  );
};

const Body = () => {
  const [state, setState] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [sending, setSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(null);

  const setChange = useCallback(
    (e) => {
      const { value, name, checked } = e.target;
      if (name !== "agreement") {
        setState((s) => ({ ...s, [name]: value }));
      } else {
        setState((s) => ({ ...s, [name]: checked }));
      }
      if (errors[name]) {
        setErrors((s) => validations[name](s, value));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newErrors = validateContactForm(state, errors);
      setSendError(null);
      setErrors(newErrors);
      if (Object.values(newErrors).find((e) => !!e)) {
        // incorrect
        console.log("incorrect: ", newErrors);
      } else {
        // correct
        console.log("correct: ", newErrors);
        setSending(true);
        window.grecaptcha.enterprise.execute(recaptchaKey).then((r) => {
          window.grecaptcha.enterprise.reset(recaptchaKey);
          // then, fetch
          fetch(`${baseApiUrl}public/contact`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...state, captcha: r }),
          })
            .then((res) => {
              console.log("form response: ", res);
              if (res.status === 200 || res.status === 204) {
                setSendSuccess(true);
              } else {
                setSendError(res);
              }
            })
            .catch((e) => {
              setSendError(e);
            })
            .finally(() => {
              setSending(false);
            });
        });
      }
    },
    [state, errors]
  );

  return (
    <Container className={style["ContactForm"]}>
      <h4 className={style["ContactForm__title"]}>Contacto: </h4>
      <Forms
        state={state}
        errors={errors}
        sending={sending}
        sendSuccess={sendSuccess}
        sendError={sendError}
        setChange={setChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Body;
