import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from "react";

interface MobileContextType {
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
}

const MobileContext = createContext<MobileContextType>({ isMobile: false, setIsMobile: () => {} });

const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const providerValue = useMemo(
    () => ({
      isMobile,
      setIsMobile,
    }),
    [isMobile, setIsMobile],
  );

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <MobileContext.Provider value={providerValue}>{children}</MobileContext.Provider>;
};

const useMobileContext = () => useContext(MobileContext);

export { MobileProvider, useMobileContext };
