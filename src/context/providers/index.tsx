import React from "react";
import { BrowserRouter } from "react-router-dom";
import MantineProviders from "./MantineProviders";
import PostProvider from "./PostProvider";

interface ProvidersProps {
  children?: React.ReactNode;
}

export default ({ children }: ProvidersProps) => {
  return (
    <PostProvider>
      <MantineProviders>
        <BrowserRouter>{children}</BrowserRouter>
      </MantineProviders>
    </PostProvider>
  );
};
