import { useState } from "react"

export const useToggle = () => {
  const [value, setValue] = useState(false)

  const toggle = (v?: boolean) => {
    v ? setValue(v) : setValue(w => !w)
  }

  return [ value, toggle ]
}
