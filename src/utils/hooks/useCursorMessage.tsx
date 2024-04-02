import { useEffect, useState } from "react"

export const useCursorMessage = () => {
  const [currentTimeout, updateTimeout] = useState<NodeJS.Timeout>()
  const [messageToDisplay, setMessageToDisplay] = useState("")
  const [displayElement, setDisplayElement] = useState(false)

  const retrieveMessage = (event: any) => {
    setMessageToDisplay(event.detail.message)
    setDisplayElement(true)
    const timeout = setTimeout(() => setDisplayElement(false), event.detail.timeInMs)
    updateTimeout(timeout)
  }

  useEffect(() => {
    if (typeof window == 'undefined') return

    window.addEventListener('dispatchCursorMessage', retrieveMessage)

    return () => window.removeEventListener('dispatchCursorMessage', retrieveMessage)
  }, [])

  const dispatchMessage = (message: string, timeInMs=1500) => {
    !!currentTimeout && clearTimeout(currentTimeout)
    window.dispatchEvent(new CustomEvent('dispatchCursorMessage', { detail: { message, timeInMs } }))
  }
  return { dispatchMessage, messageToDisplay, displayElement }
}
