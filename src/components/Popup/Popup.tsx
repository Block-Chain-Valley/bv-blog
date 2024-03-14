import { useToastContext } from "@/context/ToastContext";
import React from "react";

export const Popup = () => {
  const { toastContext } = useToastContext();

  return <>{toastContext}</>;
};

export default Popup;
