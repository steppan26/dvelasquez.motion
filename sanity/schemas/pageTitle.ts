import { SchemaTypeDefinition, defineType } from "sanity"

const pageTitle = defineType({
  type: 'document',
  name: 'pageTitle',
  title: 'Page Title',
  fields: [
    {
      name: 'component_name',
      type: 'string',
      title: 'Admin Name'
    },
    {
      name: 'text',
      type: 'string',
      title: 'text'
    },
    {
      name: 'subText',
      type: 'string',
      title: 'Sub Text'
    }
  ]
})

export default pageTitle
