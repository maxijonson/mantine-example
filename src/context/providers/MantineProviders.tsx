import { MantineProvider } from "@mantine/core";
import React from "react";

interface MantineProvidersProps {
  children?: React.ReactNode;
}

export default ({ children }: MantineProvidersProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};
