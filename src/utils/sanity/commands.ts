import { client } from "./client"
import { NavbarInterface } from "./types"

export const getNavData = async () => await client.fetch<NavbarInterface>(`*[_type == 'navbarData'][0]{
  headerText,
  backgroundColor,
  "logo": {
    "imageUrl": logo.image.asset->url,
    "alt": logo.alt
  }
}`)
