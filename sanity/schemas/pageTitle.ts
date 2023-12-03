import type { SchemaTypeDefinition } from "sanity"

const pageTitle = {
  name: 'pageTitle',
  type: 'document',
  title: 'Page Title',
  fields: [
    {
      name: 'component_name',
      type: 'string',
      title: 'Component Name'
    },
    {
      name: 'text',
      type: 'string',
      title: 'text'
    }
  ]
}

export default pageTitle
