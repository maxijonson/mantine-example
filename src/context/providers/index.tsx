import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import MantineProviders from "./MantineProviders";
import PostProvider from "./PostProvider";

interface ProvidersProps {
  children?: React.ReactNode;
}

export default ({ children }: ProvidersProps) => {
  return (
    <MantineProviders>
      <AuthProvider>
        <PostProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </PostProvider>
      </AuthProvider>
    </MantineProviders>
  );
};
