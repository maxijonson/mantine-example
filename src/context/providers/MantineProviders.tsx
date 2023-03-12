import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import React from "react";

interface MantineProvidersProps {
  children?: React.ReactNode;
}

export default ({ children }: MantineProvidersProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
};
