import {
  validateContactForm,
  type ContactApiResponse,
  type ContactFieldName,
  type ContactFormValues,
} from "@/lib/contact";

function readField(body: Record<string, unknown>, field: ContactFieldName) {
  const value = body[field];
  return typeof value === "string" ? value : "";
}

function readContactValues(body: Record<string, unknown>): ContactFormValues {
  return {
    name: readField(body, "name"),
    phone: readField(body, "phone"),
    email: readField(body, "email"),
    message: readField(body, "message"),
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "La solicitud no es válida." } satisfies ContactApiResponse,
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json(
      { ok: false, message: "La solicitud no es válida." } satisfies ContactApiResponse,
      { status: 400 },
    );
  }

  const values = readContactValues(body as Record<string, unknown>);
  const errors = validateContactForm(values);

  if (Object.keys(errors).length > 0) {
    return Response.json(
      {
        ok: false,
        message: "Revisa los campos marcados antes de enviar.",
        errors,
      } satisfies ContactApiResponse,
      { status: 422 },
    );
  }

  return Response.json(
    {
      ok: true,
      message:
        "Consulta validada correctamente. El envío de correos todavía no está activado; mientras tanto, puedes escribirnos por WhatsApp o llamarnos.",
    } satisfies ContactApiResponse,
    {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    },
  );
}
