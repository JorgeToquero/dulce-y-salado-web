"use client";

import Link from "next/link";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  CONTACT_LIMITS,
  emptyContactForm,
  validateContactForm,
  type ContactApiResponse,
  type ContactFieldErrors,
  type ContactFieldName,
  type ContactFormValues,
} from "@/lib/contact";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const inputBaseClassName =
  "mt-2 w-full rounded-2xl border bg-crema px-4 py-3 text-base text-marron shadow-sm outline-none transition-colors placeholder:text-marron/35 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const isPending = status === "loading";

  function handleChange(
    field: ContactFieldName,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const value = event.target.value;

    setValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });

    if (status === "success" || status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  }

  function getInputClassName(field: ContactFieldName) {
    return `${inputBaseClassName} ${
      fieldErrors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
        : "border-marron/15 focus:border-naranja focus:ring-naranja/20"
    }`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isPending) {
      return;
    }

    const nextErrors = validateContactForm(values);
    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setStatus("error");
      setFeedback("Revisa los campos marcados antes de enviar.");
      return;
    }

    setFieldErrors({});
    setStatus("loading");
    setFeedback("Enviando consulta…");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response
        .json()
        .catch(() => null)) as ContactApiResponse | null;

      if (!response.ok || !data?.ok) {
        if (data && !data.ok) {
          setFieldErrors(data.errors ?? {});
        }

        setStatus("error");
        setFeedback(
          data?.message ??
            "No se ha podido enviar la consulta. Inténtalo de nuevo.",
        );
        return;
      }

      setValues(emptyContactForm);
      setStatus("success");
      setFeedback(data.message);
    } catch {
      setStatus("error");
      setFeedback(
        "No se ha podido conectar con el servidor. Inténtalo de nuevo o contáctanos por WhatsApp.",
      );
    }
  }

  const feedbackClassName =
    status === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
      : status === "error"
        ? "border-red-200 bg-red-50 text-red-800"
        : "border-marron/10 bg-crema text-marron/70";

  return (
    <div className="rounded-[2rem] border border-marron/10 bg-blanco p-6 shadow-sm sm:p-8">
      <h2
        id="contact-form-title"
        className="font-display text-2xl font-semibold text-marron sm:text-3xl"
      >
        Cuéntanos qué necesitas
      </h2>
      <p className="mt-2 text-sm leading-6 text-marron/70">
        Completa el formulario con tus datos y tu consulta.
      </p>

      <form
        noValidate
        aria-labelledby="contact-form-title"
        onSubmit={handleSubmit}
        className="mt-6 space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-semibold text-marron"
            >
              Nombre
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              disabled={isPending}
              maxLength={CONTACT_LIMITS.name}
              autoComplete="name"
              value={values.name}
              onChange={(event) => handleChange("name", event)}
              aria-invalid={fieldErrors.name ? true : undefined}
              aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
              className={getInputClassName("name")}
              placeholder="Tu nombre"
            />
            {fieldErrors.name ? (
              <p
                id="contact-name-error"
                className="mt-1.5 text-sm text-red-700"
              >
                {fieldErrors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-semibold text-marron"
            >
              Teléfono
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              disabled={isPending}
              maxLength={CONTACT_LIMITS.phone}
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => handleChange("phone", event)}
              aria-invalid={fieldErrors.phone ? true : undefined}
              aria-describedby={
                fieldErrors.phone ? "contact-phone-error" : undefined
              }
              className={getInputClassName("phone")}
              placeholder="+34 600 00 00 00"
            />
            {fieldErrors.phone ? (
              <p
                id="contact-phone-error"
                className="mt-1.5 text-sm text-red-700"
              >
                {fieldErrors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-marron"
          >
            Correo electrónico
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            disabled={isPending}
            maxLength={CONTACT_LIMITS.email}
            autoComplete="email"
            value={values.email}
            onChange={(event) => handleChange("email", event)}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={
              fieldErrors.email ? "contact-email-error" : undefined
            }
            className={getInputClassName("email")}
            placeholder="tu@correo.com"
          />
          {fieldErrors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-sm text-red-700">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-semibold text-marron"
          >
            Mensaje
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            disabled={isPending}
            rows={5}
            maxLength={CONTACT_LIMITS.message}
            value={values.message}
            onChange={(event) => handleChange("message", event)}
            aria-invalid={fieldErrors.message ? true : undefined}
            aria-describedby={
              fieldErrors.message ? "contact-message-error" : undefined
            }
            className={getInputClassName("message")}
            placeholder="Cuéntanos qué necesitas"
          />
          {fieldErrors.message ? (
            <p
              id="contact-message-error"
              className="mt-1.5 text-sm text-red-700"
            >
              {fieldErrors.message}
            </p>
          ) : null}
        </div>

        <p className="text-sm leading-6 text-marron/70">
          Los datos que nos facilitas se usarán únicamente para responder a tu
          consulta. Puedes consultar más información en la{" "}
          <Link
            href="/privacidad"
            className="rounded-sm font-semibold text-marron underline underline-offset-4 hover:text-naranja focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
          >
            política de privacidad
          </Link>
          .
        </p>

        {feedback ? (
          <p
            role={status === "error" ? "alert" : "status"}
            aria-live={status === "error" ? "assertive" : "polite"}
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${feedbackClassName}`}
          >
            {feedback}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
          className="inline-flex w-full items-center justify-center rounded-full bg-marron px-6 py-3.5 text-sm font-bold text-crema transition-colors hover:bg-naranja hover:text-marron focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marron disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isPending ? "Enviando consulta…" : "Enviar consulta"}
        </button>
      </form>
    </div>
  );
}
