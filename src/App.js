import React from "react";
import StoreProvider from "./store";
import Routes from "./routes";

export default () => (
  <StoreProvider>
    <Routes />
  </StoreProvider>
);
