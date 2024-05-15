export const useCookies = () => {
  const set = (
    key: string,
    state: any,
    options?: {
      Expires?: Date,
      'Max-age'?: number,
      Path?: string,
      Secure?: boolean,
      HttpOnly?: boolean
      SameSite?: 'Strict' | 'Lax' | 'None'
    }
  ) => {
    let cookieOptions = ''
    for (const key in options) {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        // @ts-ignore
        const value = options[key];
        const option = key + ((typeof(value) !== 'boolean') ? `=${value}` : '')
        cookieOptions = cookieOptions + (`; ${option}`)
      }
    }
    if(typeof(state) !== 'string'){
      state = JSON.stringify(state)
    }
    return document.cookie = `${key}=${state}${cookieOptions}; SameSite=Lax`
  }

  const get = (name: string, SSRCookie=null) => _retrieveCookie(name, SSRCookie)

  const request = async (name: string) => {
    if (typeof(document) === 'undefined') return

    return await document.requestStorageAccess()
    .then(
      () => _retrieveCookie(name), // Access granted
      () => console.error('storage access denied') // Access denied
    )
  }

  const remove = (key: string, path?: string) => {
    return document.cookie = (key+'=; Max-Age=-99999999' + (path && '; Path='+path))
  }

  const clear = () => {
    return document.cookie.split(";")
    .forEach((c) => {
      document.cookie = c.replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date()
      .toUTCString() + ";path=/");
    })
  }

  const _retrieveCookie = (name: string, SSRCookie?: any): string | null => {
    const isSSR = typeof(document) === 'undefined'
    let cookieValue = null
    const cookiesString = isSSR ? SSRCookie : document?.cookie ?? null
    if (cookiesString) {
      const cookies = cookiesString.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (name === cookie.substring(0, name.length + 1).slice(0, -1)) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  return { set, get, remove, clear, request }
}
