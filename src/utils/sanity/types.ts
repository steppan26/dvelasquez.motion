export type PageTitle = {
  _id: string
  text: string
  subText?: string
}


export interface NavbarInterface {
  headerText: string
  backgroundColor: string
  logo: {
    imageUrl: string
    alt: string
  }
}
