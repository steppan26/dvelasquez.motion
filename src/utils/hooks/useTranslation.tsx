import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { getText } from "../../I18n"

interface Links {
  id: number
  href: string
  text: string
  newTab?: boolean
}

interface Config {
  useNavigatorLanguage?: boolean
}

export const useTranslation = (props?: Config) => {
  const { useNavigatorLanguage= false } = props ?? {}

  const [locale, setLocale] = useState('en')
  const router = useRouter()

  useEffect(() => {
    setLocale((useNavigatorLanguage && typeof(window) !== 'undefined') ? navigator.language.slice(0, 2) : router.locale as string)
  }, [useNavigatorLanguage, router.locale])


  const t = useCallback((key: string, links?: string) => {
    if (links) {
      const linkElement = getText(locale, key).split(/[\[\]]/)
      .map((text, index) => {
        if(text.startsWith(':a ')) {
          //@ts-ignore
          const linkObj = (getText(locale, links) as Array<Links>).find(v => v.id.toString() === text.slice(3))
          if(linkObj)
            return  <a
                    key={index}
                    href={linkObj.href}
                    target={linkObj.newTab ? '_blank' : '_self'}
                    >
                      {linkObj.text}
                    </a>

          return 'No/invalid link object provided'
        }
        return text
      })
      return linkElement
    }
    return getText(locale, key)
  }, [locale])

  return { t }
}
