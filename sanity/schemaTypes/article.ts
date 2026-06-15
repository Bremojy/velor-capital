import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Research Article",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
});