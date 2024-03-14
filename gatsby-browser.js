import React from "react";
import { ToastProvider } from "./src/context/ToastContext";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => <ToastProvider>{element}</ToastProvider>;
