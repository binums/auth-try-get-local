import { styled } from 'baseui';

export const Divider = styled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.mono800,
  height: '1px',
  width: '100%',
}));
