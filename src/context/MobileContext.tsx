import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from "react";

interface MobileContextType {
  isMobile: boolean;
  isTablet: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  setIsTablet: Dispatch<SetStateAction<boolean>>;
}

const MobileContext = createContext<MobileContextType>({
  isMobile: false,
  isTablet: false,
  setIsMobile: () => {},
  setIsTablet: () => {},
});

const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const providerValue = useMemo(
    () => ({
      isMobile,
      isTablet,
      setIsMobile,
      setIsTablet,
    }),
    [isMobile, isTablet, setIsMobile, setIsTablet],
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
      setIsTablet(window.innerWidth >= 600 && window.innerWidth <= 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <MobileContext.Provider value={providerValue}>{children}</MobileContext.Provider>;
};

const useMobileContext = () => useContext(MobileContext);

export { MobileProvider, useMobileContext };
