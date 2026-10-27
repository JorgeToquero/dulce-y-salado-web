import { defineField, defineType } from "sanity";

const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

export const schedule = defineType({
  name: "schedule",
  title: "Horario",
  type: "document",
  fields: [
    defineField({
      name: "days",
      title: "Día o rango de días",
      type: "string",
      placeholder: "Lunes a sábado",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "openingTime",
      title: "Horario de apertura",
      type: "string",
      placeholder: "08:00",
      validation: (rule) =>
        rule
          .required()
          .regex(timePattern, { name: "HH:MM" })
          .error("Usa el formato HH:MM, por ejemplo 08:00."),
    }),
    defineField({
      name: "closingTime",
      title: "Horario de cierre",
      type: "string",
      placeholder: "14:00",
      validation: (rule) =>
        rule
          .required()
          .regex(timePattern, { name: "HH:MM" })
          .error("Usa el formato HH:MM, por ejemplo 14:00."),
    }),
    defineField({
      name: "note",
      title: "Nota",
      type: "string",
      description: "Opcional, por ejemplo: cerrado en festivos.",
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: "days",
      subtitle: "note",
    },
  },
});
