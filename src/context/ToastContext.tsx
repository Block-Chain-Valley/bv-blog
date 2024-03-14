import React, { Dispatch, SetStateAction, createContext, useContext, useMemo, useState } from "react";

interface ToastContextType {
  toastContext: ToastContextChildren;
  setToastContext: Dispatch<SetStateAction<ToastContextChildren>>;
}
type ToastContextChildren = React.ReactNode | null | React.ReactNode[] | null[];

const ToastContext = createContext<ToastContextType>({ toastContext: null, setToastContext: () => {} });

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastContext, setToastContext] = useState<ToastContextChildren>(null);

  const providerValue = useMemo(
    () => ({
      toastContext,
      setToastContext,
    }),
    [toastContext, setToastContext],
  );

  return <ToastContext.Provider value={providerValue}>{children}</ToastContext.Provider>;
};

const useToastContext = () => useContext(ToastContext);

export { ToastContext, ToastProvider, useToastContext };
