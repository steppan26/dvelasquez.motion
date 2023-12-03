import type { SchemaTypeDefinition } from "sanity"

const navbarData: SchemaTypeDefinition = {
  name: 'navbarData',
  type: 'document',
  title: 'Navigation Data',
  fields: [
    {
      name: 'component_name',
      type: 'string',
      title: 'Admin Name'
    },
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
      type: 'image',
      title: 'logo',
    },
    {
      name: 'logoAlt',
      type: 'string',
      title: 'logo alt',
    },

  ]
}

export default navbarData
