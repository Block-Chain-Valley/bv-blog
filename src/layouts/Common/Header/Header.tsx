import Toast from "@/components/Popup/Toast";
import { useMobileContext } from "@/context/MobileContext";
import { useToastContext } from "@/context/ToastContext";
import clsx from "clsx";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import { Tabs } from "./Tabs";

export const Header = () => {
  const { isMobile } = useMobileContext();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div
      className={clsx(
        "sticky top-0 z-30 flex w-full flex-col bg-theme-white",
        isMobile ? "mb-2.5 gap-2.5 pt-2.5" : "pt-8",
      )}
    >
      {/* Header element */}
      <div className={clsx("flex items-center justify-between", isMobile ? "px-2.5" : "mb-8 px-[60px]")}>
        {/* Logo */}
        <button
          type="button"
          className="flex flex-row items-center justify-center gap-2.5"
          onClick={() => navigate("/")}
        >
          {isMobile ? (
            <StaticImage
              src="../../../assets/images/Logo.png"
              alt="BV Logo"
              placeholder="none"
              layout="fixed"
              height={28}
            />
          ) : (
            <StaticImage
              src="../../../assets/images/Logo.png"
              alt="BV Logo"
              placeholder="none"
              layout="fixed"
              height={45}
            />
          )}
          <div className={clsx("text-theme-black", isMobile ? "text-13/regular" : "text-16/regular")}>기술 블로그</div>
        </button>
        {/* Menu Button */}
        {isMobile && <MenuButton isMenuOpened={isMenuOpened} handleClick={() => setIsMenuOpened(!isMenuOpened)} />}
        {/* Tabs */}
        {!isMobile && <Tabs />}
      </div>
      {/* Mobile Menu */}
      {isMobile && isMenuOpened && <Tabs />}
      {/* Divider */}
      <div className="h-[1px] w-full bg-theme-primary" />
    </div>
  );
};

export default Header;
