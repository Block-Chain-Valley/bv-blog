import React from "react";
import { MobileProvider } from "./src/context/MobileContext";
import { ToastProvider } from "./src/context/ToastContext";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <MobileProvider>
    <ToastProvider>{element}</ToastProvider>
  </MobileProvider>
);
