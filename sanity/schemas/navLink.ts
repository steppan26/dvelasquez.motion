import { defineType } from "sanity";

export const navLink = defineType({
  name: "nav_link",
  type: "document",
  title: "Navbar link",
  fields: [
    {
      name: "component_name",
      type: "string",
      title: "Component Name"
    },
    {
      name: "text",
      type: "string",
      title: "Text"
    },
    {
      name: "href",
      type: "string",
      title: "URL",
      description: "Either provide a full URL for external link (i.e. http://...) or provide the path if it is an internal link (i.e. /about/)"
    },
  ]
})
