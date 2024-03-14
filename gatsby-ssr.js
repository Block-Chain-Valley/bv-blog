import React from "react";
import { ToastProvider } from "./src/context/ToastContext";

export const wrapRootElement = ({ element }) => <ToastProvider>{element}</ToastProvider>;
