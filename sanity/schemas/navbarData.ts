import { defineType } from "sanity"

const navbarData = defineType({
  name: 'navbar_data',
  type: 'document',
  title: 'Navigation Data',
  fields: [
    {
      name: 'headerText',
      type: 'string',
      title: 'text'
    },
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color (default: #e40a5a)'
    },
    {
      name: 'logo',
      type: 'reference',
      title: 'logo',
      to: [{ type: 'accessibleImage' }]
    },
    {
      name: 'nav_links',
      type: 'array',
      title: 'Navigation Links',
      of: [
        {
          type: 'reference',
          to: { type: 'nav_link' }
        }
      ],
      validation: Rule => Rule.max(5)
    }
  ]
})

export default navbarData
