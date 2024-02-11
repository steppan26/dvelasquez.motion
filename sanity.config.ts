import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {apiVersion, dataset, projectId} from './sanity/env'
import { schemaTypes } from './sanity/schemas'
import { singletonTypes, structure } from './src/Utils/sanity/deskStructure'

export const singletonActions = new Set(["publish", "discardChanges", "restore"])

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  title: "D.Velasquez Admin Dashboard",
  plugins: [
    deskTool({
      structure
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
