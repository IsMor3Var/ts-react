import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
  body: string;
  text: string;
}
interface GlobalThemeProps {
  theme: ThemeProps;
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px 0px;
    padding: 0px 0px;
    font-family: sans-serif;
    background: ${({ theme }: GlobalThemeProps) => theme.body};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
