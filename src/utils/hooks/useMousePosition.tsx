import { useEffect, useState } from "react"

interface MousePosition {
  x: number
  y: number
}

export const useMousePosition = (customElement?: Element | null) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0})

  const updateMousePosition = (e?: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    const area = customElement ?? window

    area.addEventListener("mousemove", updateMousePosition)

    return () => area.removeEventListener("mousemove", updateMousePosition)
  }, [customElement])

  return mousePosition
}
