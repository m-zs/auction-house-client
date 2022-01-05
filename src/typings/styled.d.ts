import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: { main: string; highlight: string };
    spacings: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    colors: {
      white: string;
      black: string;
      main: string;
      mainHighlight: string;
      error: string;
    };
  }
}
