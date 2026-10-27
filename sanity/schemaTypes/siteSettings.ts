import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Ajustes del sitio",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Teléfono",
      type: "string",
      validation: (rule) => rule.required().max(30),
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      description: "Número de WhatsApp o enlace completo.",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "string",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "contactEmail",
      title: "Correo de contacto",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "generalSchedule",
      title: "Horario general",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
  ],
  preview: {
    select: {
      title: "address",
      subtitle: "phone",
    },
  },
});
