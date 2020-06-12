import { styled } from 'baseui';

export const Header = styled('div', ({ $theme }) => ({
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem',
}));
