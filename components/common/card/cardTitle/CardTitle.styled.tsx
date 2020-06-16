import { styled } from 'baseui';

export const Title = styled('h2', ({ $theme }) => ({
  ...$theme.typography.font550,
  color: $theme.colors.black,
}));
