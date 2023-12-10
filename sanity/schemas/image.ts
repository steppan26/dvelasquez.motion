import { defineType } from "sanity"
import { Field, ObjectType } from "./schemaTypes"

export interface AccessibleImage extends ObjectType {

}


const accessibleImage = defineType({
  name: 'accessibleImage',
  type: 'object',
  title: "Image",
  fields: [
    {
      name: "component_name",
      type: "string",
      title: "Component Name"
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: Rule => [ Rule.required() ],
      options: {
        hotspot: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Alternative text is required.',
      hidden: ({ parent }) => !parent?.image?.asset,
      validation: Rule => [ Rule.required() ],
    },
    {
      name: 'width',
      type: 'string',
      title: 'Width (as css value)',
      description: "The width which you wish the image to take",
      hidden: ({ parent }) => !parent?.image?.asset,
    },
    {
      name: 'height',
      type: 'string',
      title: 'Height (as css value)',
      hidden: ({ parent }) => !parent?.image?.asset,
    }
  ]
})

export default accessibleImage
