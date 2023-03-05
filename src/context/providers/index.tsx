import { MantineProvider } from "@mantine/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import PostProvider from "./PostProvider";

interface ProvidersProps {
  children?: React.ReactNode;
}

export default ({ children }: ProvidersProps) => {
  return (
    <PostProvider>
      <MantineProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </MantineProvider>
    </PostProvider>
  );
};
