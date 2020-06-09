import { createTheme, lightThemePrimitives } from 'baseui';

const primitives = {
  ...lightThemePrimitives,
  primaryFontFamily: 'roboto, sans-serif',

  // Primary Palette
  primaryA: '#FF1D8E',
  primaryB: '#1D1D4F',
  primary: '#FF1D8E',
  primary50: '#FFE4F1',
  primary100: '#FFBBDC',
  primary200: '#FF8DC5',
  primary300: '#FF5FAE',
  primary400: '#FF3D9C',
  primary500: '#FF1B8B',
  primary600: '#FF1883',
  primary700: '#FF1478',

  // Accent Palette
  accent: '#00DEFF',
  accent50: '#E0FBFF',
  accent100: '#B3F5FF',
  accent200: '#80EFFF',
  accent300: '#4DE8FF',
  accent400: '#26E3FF',
  accent500: '#00DEFF',
  accent600: '#00DAFF',
  accent700: '#00D5FF',

  // Error Palette
  negative: '#ff1d1d',
  negative50: '#FFE4E4',
  negative100: '#FFBBBB',
  negative200: '#FF8E8E',
  negative300: '#FF6161',
  negative400: '#FF3F3F',
  negative500: '#FF1D1D',
  negative600: '#FF1A1A',
  negative700: '#FF1515',

  // Warning Palette
  warning: '#ff8e1d',
  warning50: '#FFF1E4',
  warning100: '#FFDDBB',
  warning200: '#FFC78E',
  warning300: '#FFB061',
  warning400: '#FF9F3F',
  warning500: '#FF8E1D',
  warning600: '#FF861A',
  warning700: '#FF7B15',

  // Success Palette
  positive: '#00FEC6',
  positive50: '#E0FFF8',
  positive100: '#B3FFEE',
  positive200: '#80FFE3',
  positive300: '#4DFED7',
  positive400: '#26FECF',
  positive500: '#00FEC6',
  positive600: '#00FEC0',
  positive700: '#00FEB9',

  // Monochrome Palette
  mono100: '#F3F5F6',
  mono200: '#E1E5E8',
  mono300: '#CDD4D9',
  mono400: '#B9C2CA',
  mono500: '#AAB5BE',
  mono600: '#9BA8B3',
  mono700: '#93A0AC',
  mono800: '#8997A3',
  mono900: '#7F8D9A',
  mono1000: '#6D7D8B',
};

const overrides = {
  typography: {
    ParagraphXSmall: '10/14 normal 400',
    ParagraphSmall: '12/16 normal 400',
    ParagraphMedium: '14/20 normal 400',
    ParagraphLarge: '16/24 normal 400',
    LabelXSmall: '12/16 normal 400',
    LabelSmall: '14/16 normal 400',
    LabelMedium: '16/18 normal 400',
    LabelLarge: '18/20 normal 400',
    HeadingXSmall: '14/19 normal 500',
    HeadingSmall: '18/24 normal 500',
    HeadingMedium: '22/30 normal 500',
    HeadingLarge: '26/34 normal 500',
    HeadingXLarge: '30/38 normal 500',
    HeadingXXLarge: '34/42 normal 500',
    DisplayXSmall: '42/50 normal 700',
    DisplaySmall: '50/58 normal 700',
    DisplayMedium: '58/64 normal 700',
    DisplayLarge: '102/118 normal 700',
  }
}

export const LocalLight = createTheme(primitives, overrides);
