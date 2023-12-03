import { type SchemaTypeDefinition } from 'sanity'
import pageTitle from './schemas/pageTitle'
import navbarData from './schemas/navbarData'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageTitle, navbarData],
}
