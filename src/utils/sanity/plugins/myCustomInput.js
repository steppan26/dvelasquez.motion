import { definePlugin } from "sanity";

export const customPlugin = definePlugin({
  name: "my-custom-plugin",
  document: {
    productionUrl: async(prev, { document }) => {
      console.info("HELLO WORLD")
      return prev
    }
  }
})
