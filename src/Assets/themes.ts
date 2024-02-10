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
  textPrimary: '#081218',
  textSecondary: '#e40a5a',
  textHeader: '#370031',
  backgroundPrimary: '#fdfdf5',
  backgroundSecondary: '#CE0852',
  btnPrimaryText: '',
  btnPrimaryBg: '',
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
