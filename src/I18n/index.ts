import texts from './texts'

type Locale =  'fr' | 'es' | 'en'

const _getLocaleObj = (locale:Locale) => texts[locale] ? texts[locale] : texts['fr']

const getText = (locale: string, key: string): string => {
  try {
    return key.split('.').reduce((o: any, i) => o[i], _getLocaleObj(locale ? locale as Locale : 'fr' as Locale)) as string
  } catch (error) {
    console.error(`The following translation key contains an error: [${key}]`, error)
    return 'err'
  }
}

const getLangs = (locale: Locale, locales: Locale[]) => locales.sort((a, b) => a < b ? -1 : 1)

export { getText, getLangs }
