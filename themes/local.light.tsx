import { createTheme, lightThemePrimitives } from 'baseui';

const primitives = {
  ...lightThemePrimitives,
  primaryFontFamily: 'Roboto',
};

const theme = createTheme(primitives);
