import { defineType } from "sanity"

const siteSettings = defineType({
  name: 'site_settings',
  type: 'document',
  title: 'Site General Information',
  fields: [
    {
      name: 'max_page_width',
      type: 'number',
      title: 'Max Page Width',
      description: 'Define a maximum width for the site in pixels'
    },
    {
      name: 'tab_name',
      type: 'string',
      title: 'Tab Name',
      description: "The text which appears in the browser's tab"
    },
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Site Description',
    }
  ]
})

export default siteSettings
