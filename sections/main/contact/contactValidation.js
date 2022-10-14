import { possibleSubjects } from "../../../constants";

export const validateEmail = (errors, email) => {
  let newErrors = { ...errors };
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) {
    newErrors.email = "Introduce un email válido";
  } else {
    if (newErrors.email) {
      delete newErrors.email;
    }
  }
  return newErrors;
};

export const validateName = (errors, value) => {
  let newErrors = { ...errors };
  if (!(value.length > 0)) {
    newErrors.name = "Campo requerido";
  } else {
    if (newErrors.name) {
      delete newErrors.name;
    }
  }
  return newErrors;
};

export const validateSubject = (errors, value) => {
  let newErrors = { ...errors };
  if (!possibleSubjects.includes(value)) {
    newErrors.subject = "Selecciona un asunto";
  } else {
    if (newErrors.subject) {
      delete newErrors.subject;
    }
  }
  return newErrors;
};

export const validateContent = (errors, value) => {
  let newErrors = { ...errors };
  if (!(value.length > 0)) {
    newErrors.content = "Campo requerido";
  } else {
    if (newErrors.content) {
      delete newErrors.content;
    }
  }
  return newErrors;
};

export const validateAgreement = (errors, value) => {
  let newErrors = { ...errors };
  if (!value) {
    newErrors.agreement = true;
  } else {
    if (newErrors.agreement) {
      delete newErrors.agreement;
    }
  }
  return newErrors;
};

export const validations = {
  email: validateEmail,
  name: validateName,
  subject: validateSubject,
  content: validateContent,
  agreement: validateAgreement,
};

const validateContactForm = (state) => {
  let errs = {};
  Object.entries(state).forEach((entry) => {
    errs = { ...errs, ...validations[entry[0]](errs, entry[1]) };
  });
  console.log("a: ", errs);
  return errs;
};

export default validateContactForm;
