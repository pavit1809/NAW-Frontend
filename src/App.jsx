import * as React from "react";
// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme/index";
import GlobalStyles from "./theme/globalStyles";
// components
import ScrollToTop from "./components/AdminThemeComponents/ScrollToTop";
import { BaseOptionChartStyle } from "./components/AdminThemeComponents/charts/BaseOptionChart";
import axios from "axios";
import { interceptors } from "./vendors/axios/interceptors";

interceptors(axios);
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
