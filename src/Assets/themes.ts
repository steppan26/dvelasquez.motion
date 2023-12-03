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
