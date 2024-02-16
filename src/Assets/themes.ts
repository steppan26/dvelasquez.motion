export interface ITheme extends IThemeBase {}

interface IThemeBase {
  textPrimary: string
  textHeader: string
  textSecondary: string
  backgroundPrimary: string
  backgroundSecondary: string
  btnPrimaryText: string
  btnPrimaryBg: string
  btnSecondaryText: string
  btnSecondaryBg: string
  white: string
  grey: string
  black: string
}

export const lightTheme: ITheme = {
  textPrimary: '#370031',
  textSecondary: '#e40a5a',
  textHeader: '#370031',
  backgroundPrimary: '#f3f4D9',
  backgroundSecondary: '#CE0852',
  btnPrimaryText: '#fff',
  btnPrimaryBg: '#7A9B76',
  btnSecondaryText: '',
  btnSecondaryBg: '',
  white: '',
  grey: '',
  black: '',
}

export const darkTheme: ITheme = {
  textPrimary: '',
  textSecondary: '',
  textHeader: '',
  backgroundPrimary: '',
  backgroundSecondary: '',
  btnPrimaryText: '',
  btnPrimaryBg: '',
  btnSecondaryText: '',
  btnSecondaryBg: '',
  white: '',
  grey: '',
  black: '',
}

export const Sizes = {
  medium: '900px',
  small: '650px',
  xs: '400px'
}
