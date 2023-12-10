import { DocumentListInput, StructureBuilder } from "sanity/desk";

export const singletonTypes = new Set(["site_settings", "navbar_data", "other_documents"])


export const structure = (S: StructureBuilder) => S.list()
  .title("Content")
  .items([
    settings(S),
    navigation(S),
    homePage(S),
    otherComponents(S)
  ])


const settings = (S: StructureBuilder) => S.listItem()
  .title("Site Settings")
  .child(
    S.document()
      .schemaType("site_settings")
      .documentId("site_settings")
  )

const homePage = (S: StructureBuilder) => S.listItem()
    .title('Homepage')
    .child(
      S.document()
        .title("Homepage")
        .schemaType('homepage')
        .documentId('homepage')
    )

const navigation = (S: StructureBuilder) => S.listItem()
  .title('Navigation')
  .child(
    S.document()
      .title('Navbar')
      .schemaType('navbar_data')
      .documentId('navbar_data')
  )


const otherComponents = (S: StructureBuilder) => S.listItem()
  .title('Other Components')
  .child(
    S.list()
    .title('Other Components')
    .id('other_documents')
    .items([
      ...S.documentTypeListItems().filter(listItem => ![...singletonTypes].includes(listItem.getId() as string))
    ])
  )
