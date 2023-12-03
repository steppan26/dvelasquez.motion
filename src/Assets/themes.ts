export interface ITheme extends IThemeBase {}

interface IThemeBase {
  textPrimary: string
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
  backgroundPrimary: '#fdfdf5',
  backgroundSecondary: '#e40a5a',
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
