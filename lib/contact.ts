export type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactFieldName = keyof ContactFormValues;

export type ContactFieldErrors = Partial<Record<ContactFieldName, string>>;

export type ContactApiResponse =
  | { ok: true; message: string }
  | { ok: false; message: string; errors?: ContactFieldErrors };

export const CONTACT_LIMITS = {
  name: 80,
  phone: 30,
  email: 254,
  message: 2000,
} as const;

export const emptyContactForm: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d\s().-]+$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  const name = values.name.trim();
  if (name.length < 2) {
    errors.name = "Escribe tu nombre.";
  } else if (name.length > CONTACT_LIMITS.name) {
    errors.name = `El nombre no puede superar los ${CONTACT_LIMITS.name} caracteres.`;
  }

  const phone = values.phone.trim();
  const phoneDigits = phone.replace(/\D/g, "");
  if (!phone) {
    errors.phone = "Escribe un teléfono de contacto.";
  } else if (
    phone.length > CONTACT_LIMITS.phone ||
    !PHONE_PATTERN.test(phone) ||
    phoneDigits.length < 9 ||
    phoneDigits.length > 15
  ) {
    errors.phone = "Introduce un teléfono válido.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Escribe tu correo electrónico.";
  } else if (
    email.length > CONTACT_LIMITS.email ||
    !EMAIL_PATTERN.test(email)
  ) {
    errors.email = "Introduce un correo electrónico válido.";
  }

  const message = values.message.trim();
  if (message.length < 10) {
    errors.message = "Cuéntanos un poco más (mínimo 10 caracteres).";
  } else if (message.length > CONTACT_LIMITS.message) {
    errors.message = `El mensaje no puede superar los ${CONTACT_LIMITS.message} caracteres.`;
  }

  return errors;
}
