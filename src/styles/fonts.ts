import MontserratRegularWOFF from "assets/fonts/montserrat/montserrat-regular.woff";
import MontserratRegularWOFF2 from "assets/fonts/montserrat/montserrat-regular.woff2";
import Montserrat500WOFF from "assets/fonts/montserrat/montserrat-500.woff";
import Montserrat500WOFF2 from "assets/fonts/montserrat/montserrat-500.woff2";
import Montserrat900WOFF from "assets/fonts/montserrat/montserrat-900.woff";
import Montserrat900WOFF2 from "assets/fonts/montserrat/montserrat-900.woff2";
import Lato300WOFF from "assets/fonts/lato/lato-300.woff";
import Lato300WOFF2 from "assets/fonts/lato/lato-300.woff2";
import Lato700WOFF from "assets/fonts/lato/lato-700.woff";
import Lato700WOFF2 from "assets/fonts/lato/lato-700.woff2";
import LatoRegularWOFF from "assets/fonts/lato/lato-regular.woff";
import LatoRegularWOFF2 from "assets/fonts/lato/lato-regular.woff2";

export const fonts = `
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      url(${LatoRegularWOFF2}) format('woff2'),
      url(${LatoRegularWOFF}) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src:
      url(${Lato700WOFF2}) format('woff2'),
      url(${Lato700WOFF}) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src:
      url(${Lato300WOFF2}) format('woff2'),
      url(${Lato300WOFF}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      local('Montserrat Regular'), 
      local('Montserrat-Regular'),
      url(${MontserratRegularWOFF2}) format('woff2'),
      url(${MontserratRegularWOFF}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:
      url(${Montserrat500WOFF2}) format('woff2'),
      url(${Montserrat500WOFF}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src:
      url(${Montserrat900WOFF2}) format('woff2'),
      url(${Montserrat900WOFF}) format('woff');
  }
`;
