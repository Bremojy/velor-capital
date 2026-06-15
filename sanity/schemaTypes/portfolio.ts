import { defineField, defineType } from "sanity";

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio Item",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "sector",
      title: "Sector",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});