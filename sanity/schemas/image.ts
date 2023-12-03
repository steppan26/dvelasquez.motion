import type { SchemaTypeDefinition } from "sanity"

const navbarData: SchemaTypeDefinition = {
  name: 'image',
  type: 'document',
  title: 'Navigation Data',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'logo',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'alt text',
    },
    {
      name: 'width',
      type: 'string',
      title: 'Width (as css value)',
    },
    {
      name: 'height',
      type: 'string',
      title: 'Height (as css value)',
    },
  ]
}

export default navbarData
