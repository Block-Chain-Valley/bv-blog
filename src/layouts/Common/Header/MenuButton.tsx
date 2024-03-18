import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { UIProps } from "src/props";

export interface MenuButtonProps extends UIProps.Button {
  isMenuOpened: boolean;
  handleClick: () => void;
}

export const MenuButton = ({ isMenuOpened, handleClick, ...props }: MenuButtonProps) => {
  return (
    <button type="button" onClick={handleClick} {...props}>
      {isMenuOpened ? (
        <StaticImage
          src="../../../assets/icons/Close.png"
          alt="Close"
          layout="fixed"
          placeholder="none"
          loading="eager"
          height={24}
        />
      ) : (
        <StaticImage
          src="../../../assets/icons/Menu.png"
          alt="Menu"
          layout="fixed"
          placeholder="none"
          loading="eager"
          height={24}
        />
      )}
    </button>
  );
};

export default MenuButton;
