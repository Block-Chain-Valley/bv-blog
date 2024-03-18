import clsx from "clsx";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import { Tabs } from "./Tabs";

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div
      className={clsx(
        "sticky top-0 z-30 mb-2.5 flex w-full flex-col gap-2.5 bg-theme-white pt-2.5",
        "pc:mb-0 pc:gap-0 pc:pt-8",
      )}
    >
      {/* Header element */}
      <div className={clsx("flex items-center justify-between px-2.5", "pc:mb-8 pc:px-[60px]")}>
        {/* Logo */}
        <button
          type="button"
          className="flex flex-row items-center justify-center gap-2.5"
          onClick={() => navigate("/")}
        >
          <StaticImage
            src="../../../assets/images/Logo.png"
            alt="BV Logo"
            placeholder="none"
            layout="fixed"
            height={28}
            className="pc:hidden"
          />
          <StaticImage
            src="../../../assets/images/Logo.png"
            alt="BV Logo"
            placeholder="none"
            layout="fixed"
            height={45}
            className="mobile:hidden"
          />
          <div className={clsx("text-13/regular text-theme-black", "pc:text-16/regular")}>기술 블로그</div>
        </button>
        {/* Menu Button */}
        <MenuButton
          className="pc:hidden"
          isMenuOpened={isMenuOpened}
          handleClick={() => setIsMenuOpened(!isMenuOpened)}
        />
        {/* Tabs */}
        <Tabs className="mobile:hidden" />
      </div>
      {/* Mobile Menu */}
      {isMenuOpened && <Tabs className="pc:hidden" />}
      {/* Divider */}
      <div className="h-[1px] w-full bg-theme-primary" />
    </div>
  );
};

export default Header;
