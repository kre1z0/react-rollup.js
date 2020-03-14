import React from "react";
import { InjectGlobalStyles, ThemeProvider, getTheme, H1, Divider } from "@evergis/ui";

import { GlobalsContainer } from "./styled";

const theme = getTheme();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalsContainer>
        <InjectGlobalStyles />
        <H1>React rollup starter kit</H1>
        <Divider />
      </GlobalsContainer>
    </ThemeProvider>
  );
};
