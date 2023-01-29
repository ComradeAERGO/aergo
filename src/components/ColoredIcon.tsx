import { ThemeIcon } from '@mantine/core';

export const ColoredIcon = ({ children }: any) => (
  <ThemeIcon
    size="md"
    variant="gradient"
    gradient={{ from: `indigo`, to: `cyan` }}
  >
    {children}
  </ThemeIcon>
);
